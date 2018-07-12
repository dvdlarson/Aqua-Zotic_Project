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
        <Route exact path="/counters" component={Counters}/>
        <Route exact path="/products" component={Products} />
        <Route exact path="/inventory" component={Inventory} />
        <Route path="/fishgallery" component={FishGallery} />
        <Route path="/admin" component={Admin} />
        <Route path="/login" component={Login} />
        <Route component={NotFound}/>
      </Switch>
      <iframe src="https://www.botlibre.com/chat?&id=22771587&embedded=true&chatLog=true&facebookLogin=false&application=918375383508331366&bubble=true&menubar=true&chooseLanguage=true&sendImage=true&background=%23fff&prompt=You+say&send=&css=https://www.botlibre.com/css/chatlog.css&language=en" width="500" height="400" frameborder="0" scrolling="auto"></iframe>
    </App>
    </div>
  </Router>
), document.getElementById('app'));
