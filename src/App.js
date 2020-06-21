import React from 'react';
// import './styles/app.scss';
// import Header from './Components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Cart from './Components/Cart';
// import Home from './Components/Home';
// import Contact from './Components/Contact';
import Cart from './Components/cart';
import Header  from './Components/header';
import Home from './Components/home'

import './styles/app.scss';


function App() {

  return (
<Router>
  <Header/>
  <Router path="/" exact component={Home}/>
  <Router path="/card" exact component={Cart}/>

</Router>

  );
}

export default App;
