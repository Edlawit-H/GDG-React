import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete, onToggle }) => {
    return (
        <div>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </div>
    );
};

export default TaskList;

