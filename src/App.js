import logo from './logo.svg';
import './App.css';

function App() {

  const todos = [
    {id:1, title:'wipe down stuff', completed: true},
    {id:2, title:'sweep floor', completed: true},
    {id:3, title:'make food', completed: false}
  ]

  return (
    <div className="App">
      {todos.map(todo => {
          return (<Todo todo={todo}/>)
        })}
    </div>
  );
}

export default App;
