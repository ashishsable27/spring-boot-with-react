import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Show from './components/Show';
import Create from './components/Create';
import Edit from './components/Edit';

import './App.css';

ReactDOM.render(
<Router>
  <div>
    <Route exact path="/" component={App}/>
    <Route exact path="/show/:id" component={Show}/>
    <Route exact path="/create" component={Create}/>
    <Route exact path="/edit/:id" component={Edit}/>
  </div>
</Router>,
document.getElementById('root')
);

//registerServiceWorker();
