import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './containers/Header';
import Home from './pages/Home';
import Ranking from './pages/Ranking';
import Busqueda from './pages/Busqueda';

export default class App extends React.Component {

    render() {
        return <Router>
                <div>
                    <Route exact path='/' component={Home}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/ranking' component={Ranking}/>
                    <Route path='/busqueda' component={Busqueda}/>
                </div>
            </Router>;
    }



}