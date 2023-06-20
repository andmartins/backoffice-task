import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks, deleteTask } from '../../actions/taskActions';
import Task from './Task';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      {tasks.length === 0 ? (
        <p>No hay tareas registradas para esta empresa</p>
      ) : (
        tasks.map(task => (
          <Task key={task.id} task={task} onDelete={handleDeleteTask} />
        ))
      )}
    </div>
  );
};

export default TaskList;
