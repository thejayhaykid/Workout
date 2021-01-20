import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import styles from "./App.module.scss";
import AddExercise from './pages/AddExercise/AddExercise';
import Nav from './components/Nav/Nav';

function App() {
  return <div className={styles.App}>
    <Nav />
    <Router>
      <Switch>
        <Route path="/addExercise">
          <AddExercise />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </div>;
}

export default App;
