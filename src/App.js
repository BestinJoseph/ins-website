import { CssBaseline } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.scss';

import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' component={Home} exact />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
