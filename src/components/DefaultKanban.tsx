import {
  UniqueIdentifier,
  Kanban,
  KanbanContent,
  KanbanHeader,
  KanbanTitle,
  Column,
  ColumnHandler,
  ColumnHeader,
  ColumnContent,
  ColumnTitle,
  SortableColumnsContainer,
  KanbanCard,
  KanbanCardHeader,
  KanbanCardTitle,
  KanbanCardContent,
  KanbanCardHandler,
  KanbanCardsContainer,
  ColumnItems,
  KanbanCardItems,
  useColumnItems,
  useKanbanCardItems,
} from "fast-kanban";
import { useEffect } from "react";

export default function DefaultKanban({
  columnItems,
  kanbanCardItems,
}: {
  columnItems: ColumnItems;
  kanbanCardItems: KanbanCardItems;
}) {
  const [, setColumnsItems] = useColumnItems();
  const [, setKanbanCardItems] = useKanbanCardItems();
  useEffect(() => {
    setColumnsItems(columnItems);
    setKanbanCardItems(kanbanCardItems);
  }, [setColumnsItems, setKanbanCardItems, columnItems, kanbanCardItems]);
  return (
    <Kanban>
      <KanbanHeader>
        <KanbanTitle>Kanban Board</KanbanTitle>
      </KanbanHeader>
      <KanbanContent>
        <SortableColumnsContainer columnRenderFunc={renderColumn} />
      </KanbanContent>
    </Kanban>
  );
}

function renderColumn(id: UniqueIdentifier) {
  return (
    <Column key={id} id={id}>
      <ColumnHandler>
        <ColumnHeader>
          <ColumnTitle>{id}</ColumnTitle>
        </ColumnHeader>
      </ColumnHandler>
      <ColumnContent>
        <KanbanCardsContainer
          column_id={id}
          cardRenderFunc={renderKanbanCard}
        />
      </ColumnContent>
    </Column>
  );
}

function renderKanbanCard(id: UniqueIdentifier) {
  return (
    <KanbanCard key={id} id={id}>
      <KanbanCardHandler>
        <KanbanCardHeader>
          <KanbanCardTitle>ID: {id}</KanbanCardTitle>
        </KanbanCardHeader>
        <KanbanCardContent>kanban card content for {id}</KanbanCardContent>
      </KanbanCardHandler>
    </KanbanCard>
  );
}
