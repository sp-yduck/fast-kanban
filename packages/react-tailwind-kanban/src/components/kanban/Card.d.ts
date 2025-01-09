import React from "react";
import { UniqueIdentifier } from "@dnd-kit/core";
export declare const KanbanCardHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export declare const KanbanCardTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export declare const KanbanCardContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export declare function KanbanCard({ id, children, }: {
    id: UniqueIdentifier;
    children?: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function KanbanCardHandler({ children, }: {
    children?: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function KanbanCardsContainer({ items, data, cardRenderFunc, }: {
    items: {
        id: UniqueIdentifier;
    }[];
    data?: unknown;
    cardRenderFunc: (id: UniqueIdentifier, data: unknown) => React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
