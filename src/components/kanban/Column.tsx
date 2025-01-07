import React from "react";
import { DraggableAttributes, UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: { type: "Column" },
  });
  const column = {
    attributes,
    listeners,
  } as ColumnContextprops;

  return (
    <ColumnContext.Provider value={column}>
      <Card
        className="w-72"
        ref={setNodeRef}
        style={{
          transform: transform
            ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
            : undefined,
          transition: transition,
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

export function ColumnContent({ children }: { children?: React.ReactNode }) {
  return <CardContent className="flex-col space-y-2">{children}</CardContent>;
}
