import React from 'react';
//import route from react router dom
import {Switch, Route} from 'react-router-dom'
import './App.css';
import shopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
// step 2 import homepage function from homepage.component.jsx


import HomePage from './pages/homepage/homepage.component'

//Make hats page component
// const HatsPage =() => (
//     <div>
//     <h1>HATS PAGE</h1>
     
//     </div>



// );

// step 3 render homepage by inserting in APP uSE ROUTE TO CHART THE PATH OF THE PAGE
function App() {
  return (
    <div>
    <Header />
    <Switch>
    <Route  exact path='/' component = {HomePage}/>
    <Route  path='/shop' component = {shopPage}/>
    </Switch>
    </div>
  );
}

export default App;
