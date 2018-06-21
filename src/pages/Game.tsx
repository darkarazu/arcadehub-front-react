import * as React from 'react';
import Frame from 'react-frame-component';
import * as styles from './Game.css';



export default class Game extends React.Component {

    render() {
        return <div className={styles.container}>
                <Frame initialContent= {
                    `<!DOCTYPE html>
                    <head>
                    </head>
                    <body>
                    <script src="lib/phaser-ce/phaser.min.js"></script>
                    <script src="dist/bundle.js"></script>
                    </body>
                    </html>
                    `}>
                </Frame>
            </div>;
    }
}