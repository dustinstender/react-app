import Header from './components/Header';
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { name: "get head", date: "10/10/2021", id: 2 },
    { name: "run", date: "11/10/2021", id: 1 },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((tasks) => tasks.id !== id))
  }

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
