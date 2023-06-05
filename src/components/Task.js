import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { deleteTask } from '../actions/taskActions';
import { ToastContainer, toast } from 'react-toastify';
import { format } from 'date-fns';
import 'react-toastify/dist/ReactToastify.css';
import DeleteModal from './DeleteModal';
import './Task.css';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
    closeModal();
    history.push(`/`);
    toast.success(`Tarea ${task.id} eliminada!`);
  };


  return (
    <div className="task">
      <div className="task-content">
        <div className="task-info">
          <span className="task-label">TASK ID:</span> {task.id}
        </div>
        <div className="task-info">
          <span className="task-label">DESCRIPCIÓN:</span> {task.descripcion}
        </div>
        <div className="task-info">
          <span className="task-label">Data:</span> {format(new Date(task.fechaCreacion), 'dd/MM/yyyy')}
        </div>
        <div className="task-info">
          <span className="task-label">Hora:</span> {format(new Date(task.fechaCreacion), 'HH:mm')}
        </div>
        <div className="task-info">
          <span className="task-label">VIGENTE:</span> {task.vigente ? 'Sí' : 'No'}
        </div>
      </div>
      <div className="task-actions">
        <Link className="coopeuch-link" to={`/task/edit/${task.id}`}>
          Editar
        </Link>
        <button className="coopeuch-button" onClick={openModal}>Excluir</button>
      </div>

      {modalOpen && (
        <DeleteModal closeModal={closeModal} confirmDelete={handleDelete} />
      )}
    </div>
  );
};

export default Task;
