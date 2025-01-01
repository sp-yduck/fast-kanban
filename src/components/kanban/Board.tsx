import { useState } from "react";
import {
  DndContext,
  DragEndEvent,
  UniqueIdentifier,
  useDroppable,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Column } from "./Column";
import { SortableContext } from "@dnd-kit/sortable";

export function Kanban() {
  return (
    <Card className="bg-gray-200">
      <KanbanHeader />
      <KanbanBody />
    </Card>
  );
}

export function KanbanHeader() {
  return (
    <CardHeader>
      <CardTitle>Kanban Board</CardTitle>
    </CardHeader>
  );
}

export function KanbanBody() {
  const { setNodeRef } = useDroppable({ id: "droppable" });
  const [columns, setColumns] = useState<{ id: UniqueIdentifier }[]>([
    { id: "column-1" },
    { id: "column-2" },
    { id: "column-3" },
    { id: "column-4" },
  ]);
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <SortableContext id="columns" items={columns}>
        <CardContent className="flex space-x-4" ref={setNodeRef}>
          {columns.map((column) => (
            <Column key={column.id} id={column.id} />
          ))}
        </CardContent>
      </SortableContext>
    </DndContext>
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;
    const activeId = active.id;
    const overId = over.id;
    if (activeId !== overId) {
      setColumns((columns) => {
        const activeIndex = columns.findIndex((col) => col.id === activeId);
        const overIndex = columns.findIndex((col) => col.id === overId);
        return arrayMove(columns, overIndex, activeIndex);
      });
    }
  }
}
