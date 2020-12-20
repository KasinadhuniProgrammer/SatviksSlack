import React from 'react'; 
import './App.css';

import Header from './Header'; 
import SideBar from './SideBar'; 
import Chat from './Chat'; 
import Login from './Login'; 
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
import { useStateValue } from './StateProvider';

function App() {
  const [{ user } , dispatch] = useStateValue(); 


  return (
    <div className="app">
      <Router> 
        {!user ? (
          <Login />
        ): ( 
          <>
            <Header />
            <div className="app__body">
              <SideBar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                  </Route>
                  <Route path="/">
                  <h1>Welcome to Satviks Slack</h1>
                </Route>
              </Switch>
            </div>
          </>
        

        )}
      </Router>
    </div>
  );
}

export default App;
