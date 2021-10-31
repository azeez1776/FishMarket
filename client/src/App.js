import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Explore from './pages/Explore/index';
import store from './app/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
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
      </Provider>
    </div>
  );
}

export default App;
