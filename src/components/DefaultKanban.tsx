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
} from "react-tailwind-kanban";

export default function DefaultKanban({
  columnItems,
  kanbanCardItems,
}: {
  columnItems: { id: UniqueIdentifier }[];
  kanbanCardItems: { id: UniqueIdentifier; column_id: UniqueIdentifier }[];
}) {
  return (
    <Kanban>
      <KanbanHeader>
        <KanbanTitle>Kanban Board</KanbanTitle>
      </KanbanHeader>
      <KanbanContent>
        <SortableColumnsContainer
          items={columnItems}
          kanbanCardItems={kanbanCardItems}
          columnRenderFunc={renderColumn}
        />
      </KanbanContent>
    </Kanban>
  );
}

function renderColumn(id: UniqueIdentifier, items: { id: UniqueIdentifier }[]) {
  return (
    <Column key={id} id={id}>
      <ColumnHandler>
        <ColumnHeader>
          <ColumnTitle>{id}</ColumnTitle>
        </ColumnHeader>
      </ColumnHandler>
      <ColumnContent>
        <KanbanCardsContainer items={items} cardRenderFunc={renderKanbanCard} />
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
