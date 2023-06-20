import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

jest.mock('react-toastify', () => ({
  ToastContainer: jest.fn(() => null),
  toast: jest.fn()
}));

describe('App', () => {
  test('adiciona uma nova tarefa à lista', () => {
    render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );

    // Simule a interação do usuário para adicionar uma nova tarefa
    const addButton = screen.getByText('Adicionar Tarefa');
    fireEvent.click(addButton);

    const inputElement = screen.getByPlaceholderText('Digite uma nova tarefa');
    fireEvent.change(inputElement, { target: { value: 'Nova tarefa' } });
    fireEvent.keyPress(inputElement, { key: 'Enter', code: 13, charCode: 13 });

    // Verifique se a tarefa foi adicionada corretamente
    const taskElement = screen.getByText('Nova tarefa');
    expect(taskElement).toBeInTheDocument();
  });

  test('atualiza o texto de uma tarefa', () => {
    render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );

    // Localize a tarefa que deseja atualizar
    const taskElement = screen.getByText('Tarefa antiga');

    // Simule a interação do usuário para atualizar o texto da tarefa
    const editButton = taskElement.parentElement.querySelector('button');
    fireEvent.click(editButton);
    const inputElement = screen.getByDisplayValue('Tarefa antiga');
    fireEvent.change(inputElement, { target: { value: 'Tarefa atualizada' } });
    fireEvent.keyPress(inputElement, { key: 'Enter', code: 13, charCode: 13 });

    // Verifique se o texto da tarefa foi atualizado corretamente
    const updatedTaskElement = screen.getByText('Tarefa atualizada');
    expect(updatedTaskElement).toBeInTheDocument();
  });

  test('remove uma tarefa da lista', () => {
    render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );

    // Localize a tarefa que deseja remover
    const taskElement = screen.getByText('Tarefa a ser removida');

    // Simule a interação do usuário para remover a tarefa
    const removeButton = taskElement.parentElement.querySelector('button');
    fireEvent.click(removeButton);

    // Verifique se a tarefa foi removida corretamente
    const removedTaskElement = screen.queryByText('Tarefa a ser removida');
    expect(removedTaskElement).toBeNull();
  });
});
