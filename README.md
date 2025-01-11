# Fast Kanban

fast-kanban is a TypeScript library for creating Kanban boards without struggling with the complex logic behind the UI (e.g. drag-and-drop).

## Features

- Good abstraction of logic: You will never struggle with drag-and-drop libraries. 
- Customizable: fast-kanban allows you to use your own format of Kanban card, Column and Kanban Board.
- Modern UI: Fast Kanban uses [shadcn/ui](https://github.com/shadcn-ui/ui) for its base component.
- Accessibility: Fast Kanban uses [dnd-kit](https://github.com/clauderic/dnd-kit) for its base component, then it inherits some good features of dnd-kit like accessibility. 

## Installation
```sh
npm install fast-kanban
```

## Examples
### Demo site

https://sp-yduck.github.io/fast-kanban/

### Sample codes

You can find all the sample codes [here](https://github.com/sp-yduck/fast-kanban/tree/main/src/components).


```example.ts
// simple example implementation

export function DefaultKanban({
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
```