import React from 'react'; 
import './App.css';

import Header from './Header'; 
import SideBar from './SideBar'; 
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"; 

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app__body">
          <SideBar />
          <Switch>
            <Route path="/room/:roomId">
              <h1>CHAT SCREEN</h1>

            </Route>
            <Route path="/">
              <h1>Welcome</h1>

            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
