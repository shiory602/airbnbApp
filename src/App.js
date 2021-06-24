import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'
import './App.css';

import Header from './components/Header';
import Top from './components/Top/Top';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter class='App'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Top />
        </Route>
        <Route path='/detail'>
          <p>Detail</p>
        </Route>
        <Route path='/checkout'>
          <p>Checkout</p>
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

const Test = styled.div`
  text-align: center;
`
