import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from './redux/slice/todo';

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  console.log("State", state);

  if (state.todo.isLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="App">
      <button onClick={() => dispatch(fetchTodos())}>Fetch Todos</button>
      {state.todo.data ? (
        <ul>
          {state.todo.data.map((e) => (
            <li key={e.id}>{e.title}</li>
          ))}
        </ul>
      ) : (
        <p>get todo</p>
      )}
    </div>
  );
}

export default App;
