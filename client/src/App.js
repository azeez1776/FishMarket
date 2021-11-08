import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Explore from './pages/Explore/index';
import ItemDetail from './pages/ItemDetail/index.js';
import Nav from './components/Nav'
import store from './app/store'
import { Provider } from 'react-redux'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Nav />
        <Router>
          <Switch>
            <Route
              exact path='/'
              name='explore'
            >
              <Explore />
            </Route>
            <Route
              exact path='/item'
              name='item'
            >
              <ItemDetail />
            </Route>
          </Switch>
        </Router>
      </Provider>
      <Footer />
    </div>
  );
}

export default App;
