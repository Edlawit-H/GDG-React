import Task from "./Task";

function TaskList({ tasks, updateTask, deleteTask }) {
    return (
        <div>
            {tasks.length === 0 ? (
                <p>No tasks available</p>
            ) : (
                tasks.map((task) => (
                    <Task key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
                ))
            )}
        </div>
    );
}

export default TaskList;
