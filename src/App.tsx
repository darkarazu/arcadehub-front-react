import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './containers/Header';
import Home from './pages/Home';
import * as styles from './app.css';
/*import Ranking from './pages/Ranking';
import Busqueda from './pages/Busqueda';*/

export default class App extends React.Component {

    render() {
        return <Router>
                <div>
                    <Header/>
                    <div className={styles.divaux}>
                        separador
                    </div>
                    <div className={styles.bodyContainer}>
                        <div className={styles.bodyContent}>
                            <Route exact path='/' component={Home}/>
                            <Route path='/home' component={Home}/>
                            <Route path='/ranking' component={Home}/>
                            <Route path='/busqueda' component={Home}/>
                        </div>
                        <div className={styles.navContent}>
                            nav
                        </div>
                    </div>
                    <div className={styles.foot}>
                        Footer
                    </div>
                </div>
            </Router>;
    }



}