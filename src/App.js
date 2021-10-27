import Todo from "./components/Todo";


function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Study" />
      <Todo text="Pray" />
      <Todo text="Hope for the best!" />
      <Todo text="Apply for more jobs" />
    </div>
  );
}

export default App;
