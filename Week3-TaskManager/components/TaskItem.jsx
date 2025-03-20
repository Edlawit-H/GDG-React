const TaskItem = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task-item ${task.completed ? "completed" : ""}`}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <small>Due: {task.dueDate}</small>
            <button className="delete-btn" onClick={() => onDelete(task.id)}>Delete</button>
            <button className="complete-btn" onClick={() => onToggle(task.id)}>
                {task.completed ? "Undo" : "Complete"}
            </button>
        </div>
    );
};

export default TaskItem;
