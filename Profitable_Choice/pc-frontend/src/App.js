// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import TickerSearchPage from './pages/TickerSearch';
import MainNavigation from './components/layout/MainNavigation'

// Route is like a component, and we use it like a component
// but the job of the route component is to define different paths in the URL 
// we want to listen to, and which component should be loaded for these different paths


// we want to use our components which we import from react router dom
function App() {
  //localhost:3000/{path}
  // eventually it will be domain/{path}
  return <div>
    <MainNavigation />
    <Switch>
    <Route path = '/' exact = { true }>
      <HomePage />
    </Route>
    <Route path = '/Register'>
      <RegisterPage/>
    </Route>
    <Route path = '/Login'>
      <LoginPage />
    </Route>
    <Route path = '/Ticker'>
      <TickerSearchPage />
    </Route>
    </Switch>
  </div>
}

export default App;
