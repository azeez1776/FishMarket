import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Explore from './pages/Explore/index';
import store from './app/store'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact path='/'
            name='explore'
          >
            <Explore />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
