import React, { useState } from 'react';

function TodoGo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const todoCos = (e) => {
    setNewTask(e.target.value);
  };

  const todoTan = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  return (
      <div>
        <h1>Список задач</h1>
        <input
            type="text"
            placeholder="Добавить задачу"
            value={newTask}
            onChange={todoCos}
        />
        <button onClick={todoTan}>Добавить</button>
        <ul>
          {tasks.map((task, index) => (
              <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
  );
}

export default TodoGo;
