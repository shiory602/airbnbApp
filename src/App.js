import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />    
        <Switch>
          <Route path="/search">
            {/* {SearchPage} */}
          </Route>
          </Switch>    
      </Router>
    </div>
  );
}

export default App;
