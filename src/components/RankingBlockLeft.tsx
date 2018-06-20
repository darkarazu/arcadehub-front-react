import * as React from 'react';
import * as styles from './RankingBlockLeft.css';
import * as supstyles from './Block.css';

export interface RankingBlockLeftProps {
    title: string;
    ranks: string[];
}



export default class RankingBlockLeft extends React.Component<RankingBlockLeftProps, {}> {


    render() { 
        return <div className={supstyles.superContainerRank}>
            <div className={styles.block}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/WoW_icon.svg/245px-WoW_icon.svg.png" className={supstyles.imagen} alt="Smiley face" height="200" width="200"/>
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
            </div>
            
        </div>;
    }

}