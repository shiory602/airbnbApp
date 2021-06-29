import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header';
import Top from './components/Top/Top';
import Detail from './components/Detail/Detail';
import Footer from './components/Footer';
import HotelProvider from './context/HotelContext';

function App() {
  return (
    <HotelProvider>
      <BrowserRouter class='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={Top}>
            <Top />
          </Route>
          <Route path='/Detail' component={Detail}>
            <p>Detail</p>
          </Route>
          <Route path='/Checkout'>
            <p>Checkout</p>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </HotelProvider>
  );
}

export default App;