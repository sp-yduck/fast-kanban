import React from "react";
import { DraggableAttributes, UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { KanbanCard } from "./Card";
import { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";

interface ColumnContextprops {
  attributes: DraggableAttributes;
  listeners: SyntheticListenerMap | undefined;
}

const ColumnContext = React.createContext<ColumnContextprops>(
  {} as ColumnContextprops
);

const useColumnContext = () => React.useContext(ColumnContext);

export function Column({
  id,
  children,
}: {
  id: UniqueIdentifier;
  children?: React.ReactNode;
}) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useSortable({
      id: id,
    });
  const column = {
    attributes,
    listeners,
  } as ColumnContextprops;

  return (
    <ColumnContext.Provider value={column}>
      <Card
        className="min-w-72"
        ref={setNodeRef}
        style={{
          transform: transform
            ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
            : undefined,
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        {children}
      </Card>
    </ColumnContext.Provider>
  );
}

export function ColumnHandler({ children }: { children?: React.ReactNode }) {
  const { attributes, listeners } = useColumnContext();
  return (
    <div {...attributes} {...listeners}>
      {children}
    </div>
  );
}

export const ColumnHeader = CardHeader;
export const ColumnTitle = CardTitle;
export const ColumnContent = CardContent;

export function ColumnBody() {
  return (
    <CardContent className="flex-col min-h-80 space-y-2">
      <KanbanCard />
      <KanbanCard />
    </CardContent>
  );
}
