import { useState } from "react";

const TaskForm = ({ onAdd }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) return;
        onAdd({ title, description, dueDate, completed: false });
        setTitle("");
        setDescription("");
        setDueDate("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Task Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
