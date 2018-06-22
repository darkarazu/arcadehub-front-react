import * as React from 'react';
import { inject, observer } from 'mobx-react';


import { UserStore } from '../stores/UserStore';
import * as styles from './Game.css';

export interface GameProps {
    userStore?: UserStore;
}


@inject('userStore')
@observer
export default class Game extends React.Component<GameProps, {}> {

    isLoggedRender(ak: string) {
        if (ak) {
            console.log(ak);
            console.log(`./games/Valkyrie_Fighter/index.html?apiKey=${ak}`);
            return <iframe src={`./games/Valkyrie_Fighter/index.html?apiKey=${ak}`} className={styles.frame1}></iframe>;
        } else {
            alert('Debes estar logeado primero.');
        }
    }

    render() {
        return <div className={styles.container}>
                { this.isLoggedRender(this.props.userStore.apiKey) }
            </div>;
    }
}

//


/*<Frame className={styles.frame1} initialContent= {
                    `<!DOCTYPE html>
                        <html>
                            <head>
                            </head>
                            <body>
                                <iframe src='./games/Valkyrie_Fighter/index.html'></iframe>
                            </body>
                        </html>
                    `}>
                </Frame>*/