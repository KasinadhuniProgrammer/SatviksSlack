import React from 'react'; 
import './App.css';

import Header from './Header'; 
import SideBar from './SideBar'; 
import Chat from './Chat'; 
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
              <Chat />

            </Route>
            <Route path="/">
              <Chat />

            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
