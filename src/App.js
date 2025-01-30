import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; // Importing routing components from react-router-dom
import HomePage from "./pages/HomePage";
import ResumePage from "./pages/ResumePage";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/portfolio">
          <HomePage />
        </Route>
        <Route path="/resume">
          <ResumePage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
