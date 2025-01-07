import { UniqueIdentifier } from "@dnd-kit/core";
import {
  Kanban,
  KanbanContent,
  KanbanHeader,
  KanbanTitle,
} from "./components/kanban/Board";
import {
  Column,
  ColumnHandler,
  ColumnHeader,
  ColumnContent,
  ColumnTitle,
} from "./components/kanban/Column";
import { SortableColumnsContainer } from "./components/kanban/ColumnsContainer";
import {
  KanbanCard,
  KanbanCardHeader,
  KanbanCardTitle,
  KanbanCardContent,
  KanbanCardHandler,
  KanbanCardsContainer,
} from "./components/kanban/Card";

function App() {
  const columnItems = [
    { id: "backlog" },
    { id: "to do" },
    { id: "in progress" },
    { id: "done" },
  ];
  const kanbanCardItems = [
    { id: "1", column_id: "backlog" },
    { id: "2", column_id: "backlog" },
    { id: "3", column_id: "to do" },
    { id: "4", column_id: "in progress" },
    { id: "5", column_id: "done" },
  ];

  return (
    <div className="py-12 px-8 space-y-12">
      <div className="text-5xl font-bold text-center">
        React Tailwind Kanban
      </div>
      <div>
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
      </div>
    </div>
  );
}

export default App;

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
