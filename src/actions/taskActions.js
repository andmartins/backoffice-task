import axios from "axios";

export const fetchTasks = () => async dispatch => {
  const response = await axios.get('http://localhost:8080/task?page=0&size=5&sort=fechaCreacion,DESC');
  dispatch({
    type: "FETCH_TASKS",
    payload: response.data.content
  });
}

export const createTask = (task) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:8080/task', task);
      dispatch({
        type: 'CREATE_TASK',
        payload: response.data,
      });
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };
};

export const deleteTask = (id) => async dispatch => {
  await axios.delete(`http://localhost:8080/task/${id}`);
  dispatch({
    type: "DELETE_TASK",
    payload: id
  });
}

export const fetchTask = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:8080/task/${id}`);
      dispatch({
        type: 'FETCH_TASK',
        payload: response.data,
      });
    } catch (error) {
      console.log('Error fetching task:', error);
    }
  };
};

export const updateTask = (id, updatedTask) => async dispatch => {
  const response = await axios.put(`http://localhost:8080/task/${id}`, updatedTask);
  dispatch({
    type: "UPDATE_TASK",
    payload: response.data
  });
}

export const fetchTaskById = (id) => async dispatch => {
  const response = await axios.get(`http://localhost:8080/task/${id}`);
  dispatch({
    type: "FETCH_TASK_BY_ID",
    payload: response.data
  });
}
