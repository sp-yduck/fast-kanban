export type UniqueIdentifier = string | number;

export type ColumnItems = { id: UniqueIdentifier }[];
export type KanbanCardItems = {
  id: UniqueIdentifier;
  column_id: UniqueIdentifier;
}[];
