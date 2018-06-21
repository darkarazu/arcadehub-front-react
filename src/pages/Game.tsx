import * as React from 'react';
import Frame from 'react-frame-component';
import * as styles from './Game.css';



export default class Game extends React.Component {

    render() {
        return <div className={styles.container}>
                <Frame initialContent= {
                    `
                    <script src="/dist/games/Valkyrie_Fighter/lib/phaser-ce/phaser.min.js"></script>
                    <script src="/dist/games/Valkyrie_Fighter/dist/bundle.js"></script>
                    `}>
                </Frame>
            </div>;
    }
}