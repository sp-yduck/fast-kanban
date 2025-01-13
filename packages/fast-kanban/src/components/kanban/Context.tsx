import React, { useContext } from "react";
import { ColumnItems, KanbanCardItems } from "./types";

// Context for managing the state of ColumnItems
const ColumnsItemContext = React.createContext<ColumnItems>({} as ColumnItems);
const SetColumnsItemContext = React.createContext<
  React.Dispatch<React.SetStateAction<ColumnItems>>
>(() => {});
export const useColumnItems = (): [
  ColumnItems,
  React.Dispatch<React.SetStateAction<ColumnItems>>
] => [useContext(ColumnsItemContext), useContext(SetColumnsItemContext)];

// Context for managing the state of KanbanCardItems
const KanbanCardItemContext = React.createContext<KanbanCardItems>(
  {} as KanbanCardItems
);
const SetKanbanCardItemContext = React.createContext<
  React.Dispatch<React.SetStateAction<KanbanCardItems>>
>(() => {});
export const useKanbanCardItems = (): [
  KanbanCardItems,
  React.Dispatch<React.SetStateAction<KanbanCardItems>>
] => [useContext(KanbanCardItemContext), useContext(SetKanbanCardItemContext)];

// Context Provider for managing the state of ColumnItems and KanbanCardItems
export function KanbanProvider({ children }: { children: React.ReactNode }) {
  const [columnItems, setColumnItems] = React.useState<ColumnItems>(
    [] as ColumnItems
  );
  const [kanbanCardItems, setKanbanCardItems] = React.useState<KanbanCardItems>(
    [] as KanbanCardItems
  );
  return (
    <ColumnsItemContext.Provider value={columnItems}>
      <SetColumnsItemContext.Provider value={setColumnItems}>
        <KanbanCardItemContext.Provider value={kanbanCardItems}>
          <SetKanbanCardItemContext.Provider value={setKanbanCardItems}>
            {children}
          </SetKanbanCardItemContext.Provider>
        </KanbanCardItemContext.Provider>
      </SetColumnsItemContext.Provider>
    </ColumnsItemContext.Provider>
  );
}
