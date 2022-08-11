import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Nav from './components/Nav';
import Home from './pages/Home';
import Content from './pages/Content';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      {/* we are using exact so that react routes exactlty acc to the path specified */}
      {/* we could use exact={true} or just exact in react  */}
      <Route exact path="/content">
        <Content />
      </Route>
      {/* The last route works only when the all the other fails to work
      so it is basically used for rendering error message page like 404 not found */}
      <Route>Not Found</Route>
    </Switch>
  );
}

export default App;
