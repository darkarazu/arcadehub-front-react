import * as React from 'react';
import * as styles from './Ranking.css';


import RankingBlockRight from '../components/RankingBlockRight';
import RankingBlockLeft from '../components/RankingBlockLeft';




export interface Rankings{
    id: number;
    title: string;
    ranks: string[];
}
//Array Prueba
const rankingsList: Rankings[] = [
    {id: 1,
    title: 'World of Warcraft',
    ranks: ['Doomlord - 25789','XxPepe - 24120','Carla49 - 18750','Mari15 - 14500','NiñoRata02 - 9876']
    },
    {id: 2,
    title: 'Hearthstone',
    ranks: ['Doomlord - 25789','XxPepe - 24120','Carla49 - 18750','Mari15 - 14500','NiñoRata02 - 9876']
    },
    {id: 3,
    title: 'World of Warcraft',
    ranks: ['Doomlord - 25789','XxPepe - 24120','Carla49 - 18750','Mari15 - 14500','NiñoRata02 - 9876']
    },
    {id: 4,
    title: 'Hearthstone',
    ranks: ['Doomlord - 25789','XxPepe - 24120','Carla49 - 18750','Mari15 - 14500','NiñoRata02 - 9876']
    },
    {id: 5,
    title: 'World of Warcraft',
    ranks: ['Doomlord - 25789','XxPepe - 24120','Carla49 - 18750','Mari15 - 14500','NiñoRata02 - 9876']
    },
    {id: 6,
    title: 'Hearthstone',
    ranks: ['Doomlord - 25789','XxPepe - 24120','Carla49 - 18750','Mari15 - 14500','NiñoRata02 - 9876']
    }
];
export default class Ranking extends React.Component {

    renderRanking(rankings: Rankings, index){
        if(index%2 === 0) {
            return (
                <div key={rankings.id} className={styles.rankingContainerLeft}>
                    <RankingBlockLeft title={rankings.title} ranks={rankings.ranks}/>
                </div>                
            );
        }else {
            return (<div key={rankings.id} className={styles.rankingContainerRight}>
                <RankingBlockRight title={rankings.title} ranks={rankings.ranks}/>
            </div>);
        }
    }
    

    render() {
        return <div className={styles.rankContainer}>
                {rankingsList.map((rankings,index) => this.renderRanking(rankings,index))}              
            </div>;
    }
}