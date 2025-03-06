import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const updateTask = (id, updatedTask) => {
        setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div className="App">
            <h1>Task Management Application</h1>
            <TaskForm addTask={addTask} />
            <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
        </div>
    );
}

export default App;
