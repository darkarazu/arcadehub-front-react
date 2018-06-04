import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './header.css';

export default class Header extends React.Component {
    render() {
        return <div>
                <div className={styles.topaux}></div>
                <div className={styles.headContainer}>
                    <div>
                        gridaux
                    </div>
                    <div className={styles.subContainer}>
                        <Link to='/home' className={styles.bigHome}></Link>
                        <Link to='/home' className={styles.menuItem}>Noticias</Link>
                        <Link to='/ranking' className={styles.menuItem}>Ranking</Link>
                        <Link to='/busqueda' className={styles.menuItem}>Busqueda</Link>
                        <Link to='/login' className={styles.menuItem}>Login</Link>
                    </div>
                    <div>
                        FB / IG / GITHUB
                    </div>
                </div>
        </div>;
    }
}