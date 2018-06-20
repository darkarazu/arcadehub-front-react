import * as React from 'react';
import * as styles from './FeedLine.css';

export interface FeedLineProps {
    player?: string;
    logro?: string;
    link?: string;
}


export default class FeedLine extends React.Component<FeedLineProps, {}> {


    render() {
        return <div className={styles.container}>
            <div className={styles.feed}>
                <div><strong>Doomlord -</strong> Ha conseguido el logro:</div>
                <div className={styles.logro}>
                    First Blood!
                </div>
            </div>
        </div>;
    }

}