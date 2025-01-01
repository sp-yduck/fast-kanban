import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function KanbanCard() {
  return (
    <Card>
      <KanbanCardHeader />
      <KanbanCardBody />
    </Card>
  );
}

export function KanbanCardHeader() {
  return (
    <CardHeader>
      <CardTitle>kanban card title</CardTitle>
    </CardHeader>
  );
}

export function KanbanCardBody() {
  return <CardContent>kanban card body</CardContent>;
}
