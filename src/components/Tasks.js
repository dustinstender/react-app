const tasks = [
  { name: "Dustin", status: "Yes" },
  { name: "Laura", status: "No" },
];

const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (
        <h3>{task.name}</h3>
      ))}
    </>
  )
}

export default Tasks
