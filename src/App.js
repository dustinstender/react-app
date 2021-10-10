import Header from './components/Header';
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { name: "get head", date: "10/10/2021", id: 2 },
    { name: "run", date: "11/10/2021", id: 1 },
  ]);
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
