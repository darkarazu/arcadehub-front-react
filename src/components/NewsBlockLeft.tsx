import * as React from 'react';
import * as styles from './NewsBlockLeft.css';
import * as supstyles from './Block.css';


import { Link } from 'react-router-dom';

export interface NewsBlockLeftProps {
    title: string;
    desc: string;
}


export default class NewsBlockLeft extends React.Component<NewsBlockLeftProps, {}> {


    render() {
        return <div className={supstyles.superContainer}>
            <div className={styles.block}>
                <img src='https://raw.githubusercontent.com/Lesen7/valkyrie-fighter-ts/master/img/macross_logo.png' className={supstyles.imagen} alt='Smiley face' height='200' width='200'/>
                <div>
                    <div className={supstyles.newTitle}>
                    <h4>{this.props.title}</h4>
                    </div>
                    <div className={supstyles.newDesc}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer.
                    </div>
                </div>
                <Link to='/Valkyrie-Fighter' className={styles.linkBoton}>Entrar</Link>
            </div>
        </div>;
    }

}