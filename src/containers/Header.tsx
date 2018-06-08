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
        return <div className={styles.head}>
                <div className={styles.headContainer}>
                    <div className={styles.gridaux}>
                    </div>
                    <div className={styles.subContainer}>
                        <Link to='/home' className={styles.bigHome}>HOME</Link>
                        <Link to='/home' className={styles.menuItem}>Noticias</Link>
                        <Link to='/ranking' className={styles.menuItem}>Ranking</Link>
                        <Link to='/busqueda' className={styles.menuItem}>Busqueda</Link>
                        <Link to='' className={styles.menuItem} onClick={this.toggleLoginForm}>Login</Link>
                    </div>
                    <div className={styles.gridsocial}>
                        <a href='' className={styles.fabiconauxfacebook}><i className="fab fa-facebook fa-2x"></i></a>
                        <a href='' className={styles.fabiconauxtwitter}><i className="fab fa-twitter-square fa-2x"></i></a>
                        <a href='https://github.com/darkarazu/arcadehub-front-react' className={styles.fabiconauxgithub}><i className="fab fa-github-square fa-2x"></i></a>
                    </div>
                </div>
        </div>;
    }
}