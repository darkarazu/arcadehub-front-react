import * as React from 'react';
import { inject, observer } from 'mobx-react';

import { UserStore } from '../stores/UserStore';

import FeedLine from '../components/FeedLine';

import * as styles from './Navx.css';

export interface NavxProps {
    userStore?: UserStore
}


@inject('userStore')
@observer
export default class Navx extends React.Component<NavxProps, {}> {
    constructor(props) {
        super(props);

    }

    render() {
        return <div className={styles.container}>
            <FeedLine/>
            <FeedLine/>
            <FeedLine/>
            <FeedLine/>
        </div>;
    }
}