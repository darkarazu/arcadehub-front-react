import * as React from 'react';
import { inject, observer } from 'mobx-react';

import { LoginFormStore } from '../stores/LoginFormStore';

import { Link } from 'react-router-dom';
import * as styles from './header.css';

export interface HeaderProps {
    loginFormStore?: LoginFormStore;
}


@inject('loginFormStore')
@observer
export default class Header extends React.Component<HeaderProps, {}> {
    constructor(props) {
        super(props);

        this.toggleLoginForm = this.toggleLoginForm.bind(this);
    }

    toggleLoginForm() {
        this.props.loginFormStore.toggleLoginForm();
    }

    render() {
        return <div>
                <div className={styles.topaux}></div>
                <div className={styles.headContainer}>
                    <div className={styles.gridaux}>
                        gridaux
                    </div>
                    <div className={styles.subContainer}>
                        <Link to='/home' className={styles.bigHome}></Link>
                        <Link to='/home' className={styles.menuItem}>Noticias</Link>
                        <Link to='/ranking' className={styles.menuItem}>Ranking</Link>
                        <Link to='/busqueda' className={styles.menuItem}>Busqueda</Link>
                        <Link to='' className={styles.menuItem} onClick={this.toggleLoginForm}>Login</Link>
                    </div>
                    <div className={styles.gridaux}>
                        FB / IG / GITHUB
                    </div>
                </div>
        </div>;
    }
}