// // eslint-disable-next-line
// import logo from './logo.svg';
// import './App.css';
// import { Route, Switch } from 'react-router-dom';
// import HomePage from './pages/Home';
// import LoginPage from './pages/Login';
// import RegisterPage from './pages/Register';
// import TickerSearchPage from './pages/TickerSearch';
// import Tools from './pages/Tools'
// import MainNavigation from './components/Navbar'


// // Route is like a component, and we use it like a component
// // but the job of the route component is to define different paths in the URL 
// // we want to listen to, and which component should be loaded for these different paths



// // we want to use our components which we import from react router dom
// function App() {
//   //localhost:3000/{path}
//   // eventually it will be domain/{path}
//   return <div>
//     <Navbar />
//     <Switch>
//     <Route path = '/' exact = { true }>
//       <HomePage />
//     </Route>
//     <Route path = '/Register'>
//       <RegisterPage/>
//     </Route>
//     <Route path = '/Login'>
//       <LoginPage />
//     </Route>
//     <Route path = '/Ticker'>
//       <TickerSearchPage />
//     </Route>
//     <Route path = '/Tools'>
//       <Tools/>
//     </Route>
//     </Switch>
//   </div>
// }

// export default App;

import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import GraphResult from './components/pages/GraphResult';
// import Register from './components/pages/SignUp';
import Register from './components/pages/Register'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/Register' component={Register} />
          <Route path ='/graphResults' component={GraphResult} />
        </Switch>
      </Router>
    </>
  );
}

export default App;


