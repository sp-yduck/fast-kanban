import {
  EllipsisIcon,
  PlusIcon,
  SquareCheckIcon,
  UserIcon,
} from "lucide-react";
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
  SortableColumnsContainer,
  KanbanCard,
  KanbanCardHeader,
  KanbanCardTitle,
  KanbanCardContent,
  KanbanCardHandler,
  KanbanCardsContainer,
} from "fast-kanban";

export default function JiraStyleKanban({
  columnItems,
  kanbanCardItems,
}: {
  columnItems: { id: UniqueIdentifier }[];
  kanbanCardItems: { id: UniqueIdentifier; column_id: UniqueIdentifier }[];
}) {
  return (
    <Kanban className="rounded-md shadow-none">
      <KanbanHeader>
        <KanbanTitle>Kanban Board</KanbanTitle>
      </KanbanHeader>
      <KanbanContent>
        <SortableColumnsContainer
          className="space-x-3"
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
    <Column
      key={id}
      id={id}
      className="rounded-md shadow-none bg-gray-50 border-none p-0"
    >
      <ColumnHandler className="cursor-grab">
        <ColumnHeader className="uppercase text-sm p-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-2 text-gray-500">
              <div>{id}</div>
              <div className="rounded-xs bg-gray-200 text-gray-800 text-center min-w-8 h-5">
                {items.length}
              </div>
            </div>
            <div className="cursor-pointer hover:bg-gray-200 h-8 w-8 p-2">
              <EllipsisIcon className="h-4 w-4" />
            </div>
          </div>
        </ColumnHeader>
      </ColumnHandler>
      <ColumnContent className="p-0 px-1 py-2">
        <KanbanCardsContainer
          className="space-y-1 w-full"
          items={items}
          cardRenderFunc={renderKanbanCard}
        />
        <div className="flex rounded-sm hover:bg-gray-200 p-2 space-x-1 text-center text-md text-gray-500 ">
          <PlusIcon className="h-6 w-6" />
          <div className="">Create</div>
        </div>
      </ColumnContent>
    </Column>
  );
}

function renderKanbanCard(id: UniqueIdentifier) {
  return (
    <KanbanCard
      key={id}
      id={id}
      className="hover:bg-gray-200 shadow-sm rounded-md p-0 text-gray-700"
    >
      <KanbanCardHandler>
        <KanbanCardHeader className="p-4 py-3 hover:underline">
          <div className="flex justify-between">
            <KanbanCardTitle className="text-md font-normal">
              kanban card title - {id}
            </KanbanCardTitle>
          </div>
        </KanbanCardHeader>
        <KanbanCardContent className="p-4 text-sm text-center">
          <div className="flex justify-between">
            <div className="flex space-x-1">
              <div>
                <SquareCheckIcon className="text-blue-500 w-5 h-5" />
              </div>
              <div>JIRA-{id}</div>
            </div>
            <div className="bg-gray-300 rounded-full p-1">
              <UserIcon className="h-5 w-5" />
            </div>
          </div>
        </KanbanCardContent>
      </KanbanCardHandler>
    </KanbanCard>
  );
}
