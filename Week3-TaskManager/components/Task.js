function Task({ task, updateTask, deleteTask }) {
    const toggleComplete = () => {
        updateTask(task.id, { ...task, completed: !task.completed });
    };

    return (
        <div className="task">
            <h3 style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                {task.title}
            </h3>
            <p>{task.description}</p>
            <p>Due Date: {task.dueDate}</p>
            <button onClick={toggleComplete}>
                {task.completed ? "Mark Incomplete" : "Mark Complete"}
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    );
}

export default Task;
