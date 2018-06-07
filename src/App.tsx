import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import stores from './stores';
import { Provider } from 'mobx-react';
import {inject, observer } from 'mobx-react';


import Header from './containers/Header';
import Home from './pages/Home';
/*import Ranking from './pages/Ranking';
import Busqueda from './pages/Busqueda';*/


import LoginForm from './components/LoginForm';


import { LoginFormStore } from './stores/LoginFormStore';


import * as styles from './app.css';



export interface AppProps {
    loginFormStore?: LoginFormStore;
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
                            {stores.loginFormStore.visible && <LoginForm/>}
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
                </Router>
            </Provider>;
    }



}