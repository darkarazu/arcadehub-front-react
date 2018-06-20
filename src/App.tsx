import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import stores from './stores';
import { inject, observer, Provider } from 'mobx-react';
import { VelocityTransitionGroup } from 'velocity-react';

import Header from './containers/Header';
import Navx from './containers/Navx';
import Footer from './containers/Footer';
import Home from './pages/Home';
import Ranking from './pages/Ranking';
/*import Busqueda from './pages/Busqueda';*/


import LoginForm from './components/LoginForm';


import { LoginFormStore } from './stores/LoginFormStore';
import { UserStore } from './stores/UserStore';


import * as styles from './App.css';



export interface AppProps {
    loginFormStore?: LoginFormStore;
    userStore?: UserStore;
}


@observer
export default class App extends React.Component<AppProps, {}> {

    render() {
        return <Provider {...stores}>
            <Router>
                    <div>
                        <Header/>
                        <div className={styles.divaux}>
                            separador
                        </div>
                        <div className={styles.bodyContainer}>
                        <VelocityTransitionGroup enter={{animation: 'fadeIn'}} leave={{animation: 'fadeOut'}}>
                            {stores.loginFormStore.visible ? <LoginForm/> : undefined}
                        </VelocityTransitionGroup>
                            <div className={styles.bodyContent}>
                                <Route exact path='/' component={Home}/>
                                <Route path='/home' component={Home}/>
                                <Route path='/ranking' component={Ranking}/>
                                <Route path='/busqueda' component={Home}/>
                            </div>
                            <div className={styles.navContent}>
                                <Navx/>
                            </div>
                        </div>
                        <div className={styles.foot}>
                            <Footer/>
                        </div>
                    </div>
                </Router>
            </Provider>;
    }



}