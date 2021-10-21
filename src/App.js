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

  const toggleReminder = (id) => {
    console.log(id)
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks}
       onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks!'}
    </div>
  );
}

export default App;
