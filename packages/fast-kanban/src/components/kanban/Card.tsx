import React from "react";
import { DraggableAttributes, UniqueIdentifier } from "@dnd-kit/core";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const KanbanCardHeader = CardHeader;
export const KanbanCardTitle = CardTitle;
export const KanbanCardContent = CardContent;

interface CardContextProps {
  attributes: DraggableAttributes;
  listeners: SyntheticListenerMap | undefined;
}

const CardContext = React.createContext<CardContextProps>(
  {} as CardContextProps
);

const useCardContext = () => React.useContext(CardContext);

export function KanbanCard({
  className,
  id,
  children,
}: {
  className?: string;
  id: UniqueIdentifier;
  children?: React.ReactNode;
}) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useSortable({
      id: id,
      data: { type: "Task" },
    });
  const card = {
    attributes,
    listeners,
  } as CardContextProps;

  return (
    <CardContext.Provider value={card}>
      <Card
        className={cn(className)}
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
    </CardContext.Provider>
  );
}

export function KanbanCardHandler({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { attributes, listeners } = useCardContext();
  return (
    <div {...attributes} {...listeners} className={cn(className)}>
      {children}
    </div>
  );
}

export function KanbanCardsContainer({
  className,
  items,
  data,
  cardRenderFunc,
}: {
  className?: string;
  items: { id: UniqueIdentifier }[];
  data?: unknown;
  cardRenderFunc: (id: UniqueIdentifier, data: unknown) => React.ReactNode;
}) {
  return (
    <SortableContext id="kanban-card" items={items}>
      <div className={cn(className)}>
        {items.map((item) => cardRenderFunc(item.id, data))}
      </div>
    </SortableContext>
  );
}
