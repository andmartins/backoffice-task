const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_TASKS":
      return action.payload;
    case "CREATE_TASK":
      return [...state, action.payload];
    case "DELETE_TASK":
      return state.filter(task => task.id !== action.payload);
    case "UPDATE_TASK":
      return state.map(task =>
        task.id === action.payload.id ? action.payload : task
      );
    default:
      return state;
  }
};

export default tasksReducer;
