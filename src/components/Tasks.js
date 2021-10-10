const Tasks = ({tasks}) => {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.name}</h3>
      ))}
    </>
  )
}

export default Tasks
