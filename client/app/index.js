import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


import App from './components/App/App';
import NotFound from './components/App/NotFound';
import Home from './components/pages/Home';
import Login from "./components/pages/Login";
//import Wrapper from "./components/Wrapper";
import Admin from "./components/pages/Admin";
import FishGallery from "./components/pages/FishGallery";
import Inventory from "./components/pages/Inventory";
import Products from "./components/pages/Products";
import Counters from "./components/pages/Counters";

render((
  <Router>
    <div>
    <App>
     
    
      <Switch>
        <Route exact path="/" component={Home}/>
		<Route path="/home" component={Home}/>
        <Route exact path="/counters" component={Counters}/>
        <Route exact path="/products" component={Products} />
        <Route exact path="/inventory" component={Inventory} />
        <Route path="/fishgallery" component={FishGallery} />
        <Route path="/admin" component={Admin} />
        <Route path="/login" component={Login} />
        <Route component={NotFound}/>
      </Switch>
   
    </App>
    </div>
  </Router>
), document.getElementById('app'));
