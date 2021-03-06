import * as React from 'react';
import * as styles from './NewsBlockRight.css';
import * as supstyles from './Block.css';

import { Link } from 'react-router-dom';


export interface NewsBlockLeftProps {
    title: string;
    desc: string;
}


export default class NewsBlockRight extends React.Component<NewsBlockLeftProps, {}> {

    render() {
        return <div className={supstyles.superContainer}>
            <div className={styles.block}>
                <Link to='/Valkyrie-Fighter' className={styles.linkBoton}>Entrar</Link>
                <div>
                    <div className={supstyles.newTitle}>
                        <h4>Lorem Ipsum dolor sit amet</h4>
                    </div>
                    <div className={supstyles.newDesc}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer.
                    </div>
                </div>
                <img src='http://www.volcanica.cat/wp-content/uploads/2015/10/LOGO-HEARTHSTONE.jpg' className={supstyles.imagen} alt='Smiley face' height='200' width='200'/>
            </div>
        </div>;
    }

}