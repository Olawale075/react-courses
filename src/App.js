import React from 'react'
import Navbar from './component/Navbar'

import './App.css';
import Home from './component/pages/Home';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom/cjs/react-router-dom.min"
import Products from './component/pages/Products';
import Services from './component/pages/Services';
import SignUp from './component/pages/SignUp';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/services'  component={Services}/>
          <Route path='/products'  component={Products}/>
          <Route path='/sign-up'  component={SignUp}/></Switch>
      </Router>
       </div> 
     

  )

}

export default App
