import React, { useState } from "react";
import {
  DndContext,
  DragEndEvent,
  useDroppable,
  UniqueIdentifier,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { CardContent } from "@/components/ui/card";

export function SortableColumnsContainer(props: {
  items: { id: UniqueIdentifier }[];
  kanbanCardItems: { id: UniqueIdentifier; column_id: UniqueIdentifier }[];
  columnRenderFunc: (
    id: UniqueIdentifier,
    items: { id: UniqueIdentifier }[]
  ) => React.ReactNode;
}) {
  const { setNodeRef } = useDroppable({ id: "droppable" });
  const [cols, setCols] = useState<{ id: UniqueIdentifier }[]>(props.items);
  const [kanbanCards, setKanbanCards] = useState<
    { id: UniqueIdentifier; column_id: UniqueIdentifier }[]
  >(props.kanbanCardItems);
  return (
    <DndContext
      onDragEnd={handleColumnsDragEnd}
      //   onDragOver={handleKanbanCardDragOver}
    >
      <SortableContext id="columns" items={cols}>
        <CardContent className="flex space-x-4" ref={setNodeRef}>
          {cols.map((col) =>
            props.columnRenderFunc(
              col.id,
              kanbanCards.filter((item) => item.column_id === col.id)
            )
          )}
        </CardContent>
      </SortableContext>
    </DndContext>
  );

  function handleColumnsDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!active || !over) return;
    const activeId = active.id;
    const overId = over.id;
    if (activeId === overId) return;

    console.log(
      active.data.current?.type,
      over.data.current?.type,
      activeId,
      overId
    );

    // Im dropping a Column over another Column
    if (
      active.data.current?.type === "Column" &&
      over.data.current?.type === "Column"
    ) {
      if (activeId !== overId) {
        setCols((cols) => {
          const activeIndex = cols.findIndex((col) => col.id === activeId);
          const overIndex = cols.findIndex((col) => col.id === overId);
          return arrayMove(cols, activeIndex, overIndex);
        });
      }
    } else if (
      active.data.current?.type == "Task" &&
      over.data.current?.type === "Column"
    ) {
      // Im dropping a Task over a Column
      setKanbanCards((kanbanCards) => {
        const activeIndex = kanbanCards.findIndex(
          (card) => card.id === activeId
        );
        return kanbanCards.map((card, index) => {
          if (index === activeIndex) {
            return { ...card, column_id: overId };
          }
          return card;
        });
      });
    } else if (
      active.data.current?.type === "Task" &&
      over.data.current?.type === "Task"
    ) {
      // Im dropping a Task over another Task
      // sort the tasks in the same column
      if (active.data.current?.column_id === over.data.current?.column_id) {
        setKanbanCards((kanbanCards) => {
          const activeIndex = kanbanCards.findIndex(
            (card) => card.id === activeId
          );
          const overIndex = kanbanCards.findIndex((card) => card.id === overId);
          return arrayMove(kanbanCards, activeIndex, overIndex);
        });
      }
      // sort the tasks in different columns
      setKanbanCards((kanbanCards) => {
        const activeIndex = kanbanCards.findIndex(
          (card) => card.id === activeId
        );
        const overIndex = kanbanCards.findIndex((card) => card.id === overId);
        const activeCard = kanbanCards[activeIndex];
        const overCard = kanbanCards[overIndex];
        const newKanbanCards = kanbanCards.map((card) => {
          if (card.id === activeId) {
            return { ...card, column_id: overCard.column_id };
          } else if (card.id === overId) {
            return { ...card, column_id: activeCard.column_id };
          }
          return card;
        });
        return newKanbanCards;
      });
    }
  }
}
