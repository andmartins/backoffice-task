import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/Navbar/Navbar';
import TaskList from './components/Tasks/TaskList';
import AddTask from './components/Tasks/AddTask';
import EditTask from './components/Tasks/EditTask';
import ViewTask from './components/Tasks/ViewTask';
import CreateTaskButton from './components/Button/CreateTaskButton';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <CreateTaskButton />
        <ToastContainer />
        <Navbar />
        <div className="container mx-auto mt-5">
          <Switch>
            <Route exact path="/" component={TaskList} />
            <Route exact path="/task/add" component={AddTask} />
            <Route exact path="/task/edit/:id" component={EditTask} />
            <Route exact path="/task/:id" component={ViewTask} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
