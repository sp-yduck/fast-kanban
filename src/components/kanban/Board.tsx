import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Column } from "./Column";

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
  return (
    <CardContent className="flex space-x-4">
      <Column />
      <Column />
      <Column />
      <Column />
    </CardContent>
  );
}
