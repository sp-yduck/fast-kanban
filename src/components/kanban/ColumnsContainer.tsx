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
  columnRenderFunc: (id: UniqueIdentifier) => React.ReactNode;
}) {
  const { setNodeRef } = useDroppable({ id: "droppable" });
  const [cols, setCols] = useState<{ id: UniqueIdentifier }[]>(props.items);
  return (
    <DndContext onDragEnd={handleColumnsDragEnd}>
      <SortableContext id="columns" items={cols}>
        <CardContent className="flex space-x-4" ref={setNodeRef}>
          {cols.map((col) => props.columnRenderFunc(col.id))}
        </CardContent>
      </SortableContext>
    </DndContext>
  );

  function handleColumnsDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;
    const activeId = active.id;
    const overId = over.id;
    if (activeId !== overId) {
      setCols((cols) => {
        const activeIndex = cols.findIndex((col) => col.id === activeId);
        const overIndex = cols.findIndex((col) => col.id === overId);
        return arrayMove(cols, overIndex, activeIndex);
      });
    }
  }
}
