import * as React from 'react';
import * as styles from './RankingBlockRight.css';
import * as supstyles from './Block.css';


export interface RankingBlockLeftProps {
    title: string;
    ranks: string[];
}


export default class RankingBlockRight extends React.Component<RankingBlockLeftProps, {}> {

    render() {
        return <div className={supstyles.superContainerRank}>
            <div className={styles.block}>
                <div className={styles.rankOrder}>
                    <div className={supstyles.newTitle}>
                        {this.props.title}
                    </div>
                    <div className={supstyles.newDesc}>
                        <ul>
                            <li>{this.props.ranks[0]}</li>
                            <li>{this.props.ranks[1]}</li>
                            <li>{this.props.ranks[2]}</li>
                            <li>{this.props.ranks[3]}</li>
                            <li>{this.props.ranks[4]}</li>
                        </ul>
                    </div>
                </div>
                <img src='http://www.volcanica.cat/wp-content/uploads/2015/10/LOGO-HEARTHSTONE.jpg' className={supstyles.imagen} alt='Smiley face' height='200' width='200'/>
            </div>
        </div>;
    }

}