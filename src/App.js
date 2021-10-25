import Header from './components/Header';
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    { text: "get head", day: "10/10/2021", id: 2, reminder: false },
    { text: "run", day: "11/10/2021", id: 1, reminder: true },
  ]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])

  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((tasks) => tasks.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) =>
    task.id === id ?
    { ...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks!"
      )}
    </div>
  );
}

export default App;
