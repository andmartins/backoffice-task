import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/Navbar/Navbar';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';
import CreateTaskButton from './components/CreateTaskButton';


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="container mx-auto mt-5">
          <Switch>
            <Route exact path="/" component={TaskList} />
            <Route exact path="/task/add" component={AddTask} />
            <Route exact path="/task/edit/:id" component={EditTask} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
