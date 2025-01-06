import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Kanban({ children }: { children?: React.ReactNode }) {
  return <Card className="bg-gray-200">{children}</Card>;
}

export const KanbanHeader = CardHeader;
export const KanbanTitle = CardTitle;
export const KanbanContent = CardContent;
