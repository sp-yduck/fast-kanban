import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { KanbanCard } from "./Card";

export function Column() {
  return (
    <Card className="bg-white min-w-72">
      <ColumnHeader />
      <ColumnBody />
    </Card>
  );
}

export function ColumnHeader() {
  return (
    <CardHeader>
      <CardTitle>column</CardTitle>
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
