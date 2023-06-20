import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TaskList from './TaskList';

const mockStore = configureStore([]);

describe('TaskList', () => {
  it('should render "No tasks available" when there are no tasks', () => {
    const store = mockStore({ tasks: [] });

    render(
      <Provider store={store}>
        <TaskList />
      </Provider>
    );

    const noTasksText = screen.getByText('No tasks available');
    expect(noTasksText).toBeInTheDocument();
  });

  it('should render tasks when there are tasks', () => {
    const tasks = [
      { id: '1', descripcion: 'Task 1', fechaCreacion: '2023-06-01T10:00:00Z' },
      { id: '2', descripcion: 'Task 2', fechaCreacion: '2023-06-02T14:30:00Z' }
    ];
    const store = mockStore({ tasks });

    render(
      <Provider store={store}>
        <TaskList />
      </Provider>
    );

    const task1 = screen.getByText('Task 1');
    const task2 = screen.getByText('Task 2');
    expect(task1).toBeInTheDocument();
    expect(task2).toBeInTheDocument();
  });
});
