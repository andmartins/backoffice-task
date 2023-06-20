import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../../actions/taskActions';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddTask.css';

const AddTask = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [task, setTask] = useState({
    descripcion: '',
    vigente: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      descripcion: task.descripcion,
      vigente: task.vigente === 0 || task.vigente === '' ? "false" : true,
    };
    dispatch(createTask(newTask))
      .then(() => {
        // Reset form after successful submission
        setTask({
          descripcion: '',
          vigente: '',
        });
        // Redirect to home page
        history.push('/');
        // Display success notification
        toast.success('Tarea creada con éxito!');
      })
      .catch((error) => {
        console.log('Error creating task:', error);
        // Display error notification
        toast.error('Error al intentar crear tarea.');
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTask((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Crear nueva Tarea</h2>
      <form onSubmit={handleSubmit}>
        <div className='boxDescription'>
          <label className='Label' htmlFor="descripcion">Description:</label>
          <input
            type="text"
            id="descripcion"
            name="descripcion"
            value={task.descripcion}
            onChange={handleChange}
          />
        </div>
        <div className='boxDescription'>
          <label className='Label' htmlFor="vigente">Vigente:</label>
          <select
            id="vigente"
            name="vigente"
            value={task.vigente}
            onChange={handleChange}
          >
            <option value="0">No</option>
            <option value="1">Sí</option>
          </select>
        </div>
        <div className='boxDescription'>
          <button type="submit" className='coopeuch-button'>Crear Tarea</button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
