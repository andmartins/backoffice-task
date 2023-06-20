import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchTaskById, updateTask } from '../../actions/taskActions';
import { format } from 'date-fns';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditTask = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const task = useSelector(state =>
    state.tasks.find(task => task.id === id)
  );

  const [descripcion, setDescripcion] = useState('');
  const [vigente, setVigente] = useState('');

  useEffect(() => {
    if (!task) {
      dispatch(fetchTaskById(id));
    } else {
      setDescripcion(task.descripcion);
      setVigente(task.vigente);
    }
  }, [dispatch, id, task]);

  const handleChange = (event) => {
  const { name, value } = event.target;

    if (name === 'descripcion') {
      setDescripcion(value);
    } else if (name === 'vigente') {
      setVigente(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (descripcion.trim() === '') {
      return;
    }

    const updatedTask = {
      descripcion,
      vigente,
    };

    dispatch(updateTask(id, updatedTask))
    .then(() => {
      history.push('/');
      // Display success notification
      toast.success('Tarea alterada con éxito!');
    })
    .catch((error) => {
      console.log('Error al alterar tarea:', error);
      // Display error notification
      toast.error('Error al intentar alterar tarea.');
    });
  };

  return (
    <div>
      <h2>Editar Tarea: {task.id}</h2>
      <form onSubmit={handleSubmit}>

        <div className='boxDescription'>
          <label className='Label' htmlFor="descripcion">Description:</label>
          <input
            type="text"
            name="descripcion"
            value={descripcion}
            onChange={handleChange}
            placeholder="Enter updated task description"
          />
        </div>
        
        <div className='boxDescription'>
          <label className='Label' htmlFor="vigente">Vigente:</label>
          <select
            id="vigente"
            name="vigente"
            value={vigente}
            onChange={handleChange}
          >
            <option value="false">No</option>
            <option value="true">Sí</option>
          </select>
        </div>

        <div className='boxDescription'>
          <button type="submit" className='coopeuch-button'>Actualizar Tarea</button>
        </div>
      </form>
    </div>
  );
};

export default EditTask;
