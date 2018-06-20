import * as React from 'react';
import * as styles from './Home.css';


import NewsBlockRight from '../components/NewsBlockRight';
import NewsBlockLeft from '../components/NewsBlockLeft';




export interface News {
    id: number;
    title: string;
    desc: string;
}
// Array Prueba

const newsList: News[] = [
    {id: 1,
    title: 'Lorem Ipsum dolor sit amet Izq',
    desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer.'
    },
    {id: 2,
    title: 'Lorem Ipsum dolor sit amet Der',
    desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer.'
    },
    {id: 3,
    title: 'Lorem Ipsum dolor sit amet Izq',
    desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer.'
    },
    {id: 4,
    title: 'Lorem Ipsum dolor sit amet Der',
    desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer.'
    },
    {id: 5,
    title: 'Lorem Ipsum dolor sit amet Izq',
    desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer.'
    }
];
export default class Home extends React.Component {

    renderNews(news: News, index) {
        if (index % 2 === 0) {
            return (
                <div key={news.id} className={styles.newsContainerLeft}>
                    <NewsBlockLeft title={news.title} desc={news.desc}/>
                </div>
            );
        } else {
            return (<div key={news.id} className={styles.newsContainerRight}>
                <NewsBlockRight title={news.title} desc={news.desc}/>
            </div>);
        }
    }
    render() {
        return <div className={styles.newContainer}>
                {newsList.map((news, index) => this.renderNews(news, index))}
            </div>;
    }
}

