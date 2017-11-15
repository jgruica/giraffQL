import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Divider from './components/Divider.js';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom'


ReactDOM.render(
    <BrowserRouter>
        <Divider />
    </BrowserRouter>, 
    document.getElementById('root'));
// import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import Contact from './components/Contact'


// ReactDOM.render((
//   <BrowserRouter>
//   <div>
//     <Route exact path="/" component={App}/>
//     <Route path="/contact" component={Contact}/>
//   </div>
//   </BrowserRouter>
//   ), document.getElementById('root'));
registerServiceWorker();
