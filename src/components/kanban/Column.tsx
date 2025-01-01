import { useSortable } from "@dnd-kit/sortable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { KanbanCard } from "./Card";
import { UniqueIdentifier } from "@dnd-kit/core";

export function Column({ id }: { id: UniqueIdentifier }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useSortable({
      id: id,
    });
  const transformStyle = transform
    ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
    : undefined;

  return (
    <Card
      className="min-w-72"
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      style={{
        transform: transformStyle,
        opacity: isDragging ? 0.5 : 1,
        cursor: isDragging ? "grabbing" : "grab",
      }}
    >
      <ColumnHeader id={id} />
      <ColumnBody />
    </Card>
  );
}

export function ColumnHeader({ id }: { id: UniqueIdentifier }) {
  return (
    <CardHeader>
      <CardTitle>{id}</CardTitle>
    </CardHeader>
  );
}

export function ColumnBody() {
  return (
    <CardContent className="flex-col min-h-80 space-y-2">
      <KanbanCard />
      <KanbanCard />
    </CardContent>
  );
}
