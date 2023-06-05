import React from 'react';
import { Link } from 'react-router-dom';
import './CreateTaskButton.css';

const CreateTaskButton = () => {
  return (
    <Link to="/task/add" className="create-task-button">
      + Criar Nova Tarefa
    </Link>
  );
};

export default CreateTaskButton;
