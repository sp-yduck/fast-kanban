# React Tailwind Kanban

react-tailwind-kanban is a TypeScript library for creating Kanban boards without struggling with the complex logic behind the UI (e.g. drag-and-drop).

## Features

- Good abstraction of logic: You will never struggle with drag-and-drop libraries. 
- Customizable: react-tailwind-kanban allows you to use your own format of Kanban card, Column and Kanban Board.
- Modern UI: React Tailwind Kanban uses [shadcn/ui](https://github.com/shadcn-ui/ui) for its base component.
- Accessibility: React Tailwind Kanban uses [dnd-kit](https://github.com/clauderic/dnd-kit) for its base component, then it inherits some good features of dnd-kit like accessibility. 

## Examples
### Demo site

https://sp-yduck.github.io/react-tailwind-kanban/

### Sample codes
```example.ts
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

```