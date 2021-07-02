// import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import loadingImg from './img/Spinner-1s-200px.gif';

import Header from './components/Header';
import Top from './components/Top/Top';
import Detail from './components/Detail/Detail';
import Footer from './components/Footer';
import HotelProvider from './context/HotelContext';
import SearchPage from './components/SearchPage';


function App() {
  return (
    <HotelProvider>
      <BrowserRouter class='App'>
        <Header />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route exact path='/'>
            <Top />
          </Route>
          <Route path='/Detail'>
            <Detail />
          </Route>
          <Route path='/checkout'>
            <p>Checkout</p>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </HotelProvider>
  );
}

export default App;