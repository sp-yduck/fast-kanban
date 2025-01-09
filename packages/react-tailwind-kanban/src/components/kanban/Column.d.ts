import React from "react";
import { UniqueIdentifier } from "@dnd-kit/core";
export declare function Column({ id, children, }: {
    id: UniqueIdentifier;
    children?: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function ColumnHandler({ children }: {
    children?: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare const ColumnHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export declare const ColumnTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export declare function ColumnContent({ children }: {
    children?: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
