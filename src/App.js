import './App.css';
import Header from './components/Header';
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Test className="App">
      Test
    </Test>
  );
}

export default App;

const Test = styled.div`
  text-align: center;
`
