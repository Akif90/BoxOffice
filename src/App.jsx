import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
// import Nav from './components/Nav';
import Home from './pages/Home';
import Content from './pages/Content';
import Show from './pages/Show';

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* we are using exact so that react routes exactlty acc to the path specified */}
        {/* we could use exact={true} or just exact in react  */}
        <Route exact path="/content">
          <Content />
        </Route>
        <Route exact path="/show/:id">
          <Show />
        </Route>
        {/* The last route works only when the all the other fails to work
      so it is basically used for rendering error message page like 404 not found */}
        <Route>Not Found</Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
