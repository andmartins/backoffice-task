import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './taskActions';
import axios from 'axios';

jest.mock('axios');

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);

describe('taskActions', () => {
    it('should create an action to fetch tasks', () => {
        const tasks = [
            { descripcion: 'Task 1', vigente: 'A' },
            { descripcion: 'Task 2', vigente: 'A' }
        ];
        const response = { fecha: { content: tasks }};
        axios.get.mockResolvedValue(response);

        const expectedActions = [
            { type: 'FETCH_TASKS', payload: tasks }
        ];

        const store = mockStore({ tasks: [] })

        return store.dispatch(actions.fetchTasks()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
    
    // Faça o mesmo para as outras ações (createTask, deleteTask, updateTask, fetchTaskById)
});
