import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Title from './components/Title';
import CreatePost from './components/CreatePost';
import DeletePost from './components/DeletePost';
import Home from './components/Home';
import EditPost from './components/EditPost';




function App() {
  return (
    <Router>
      <div>
        <Title />
        <Switch>

            <Route path='/detalle'>
              
            </Route>

            <Route path='/creacion'>
              <CreatePost />
            </Route>

            <Route path='/edicion'>
             <EditPost />
            </Route>

            <Route path='/'>
              <Home />
            </Route>

        </Switch>
    </div>
    </Router>
  );
}

export default App;
