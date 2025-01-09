import React from "react";
import { UniqueIdentifier } from "@dnd-kit/core";
export declare function SortableColumnsContainer({ items, kanbanCardItems, data, columnRenderFunc, }: {
    items: {
        id: UniqueIdentifier;
    }[];
    kanbanCardItems: {
        id: UniqueIdentifier;
        column_id: UniqueIdentifier;
    }[];
    data?: unknown;
    columnRenderFunc: (id: UniqueIdentifier, items: {
        id: UniqueIdentifier;
    }[], data?: unknown) => React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
