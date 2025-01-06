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
  ColumnBody,
  ColumnTitle,
} from "./components/kanban/Column";
import { SortableColumnsContainer } from "./components/kanban/ColumnsContainer";

function App() {
  const columnItems = [
    { id: "backlog" },
    { id: "to do" },
    { id: "in progress" },
    { id: "done" },
  ];
  function renderColumn(id: UniqueIdentifier) {
    return (
      <Column id={id}>
        <ColumnHandler>
          <ColumnHeader>
            <ColumnTitle>{id}</ColumnTitle>
          </ColumnHeader>
        </ColumnHandler>
        <ColumnBody />
      </Column>
    );
  }

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
              columnRenderFunc={renderColumn}
            />
          </KanbanContent>
        </Kanban>
      </div>
    </div>
  );
}

export default App;
