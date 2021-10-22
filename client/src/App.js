import { Route, Switch, BrowerRouter as Router } from 'react-router-dom'
import './App.css';
import Explore from './pages/Explore/index';

function App() {
  return (
    <div className="App">
      <Router
        exact path='/'
        name='explore'
      >
        <Explore />
      </Router>

    </div>
  );
}

export default App;
