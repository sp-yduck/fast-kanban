import { Kanban } from "./components/kanban/Board";

function App() {
  return (
    <div className="py-32 px-8 space-y-8">
      <div className="text-5xl font-bold text-center">
        React Tailwind Kanban
      </div>
      <div>
        <Kanban />
      </div>
    </div>
  );
}

export default App;
