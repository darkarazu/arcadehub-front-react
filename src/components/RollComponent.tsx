import * as React from 'react';
/// import { CSSProperties } from 'react';

export interface RollComponentState {
    counter: number;
}

export interface RollComponentProps {
    max?: number;
    min?: number;
}

const rollComponentStyle1: React.CSSProperties = {
    display: 'flex',
    width: '250px',
    background: 'rgb(132, 146, 184)',
    justifyContent: 'center'
};

const rollComponentStyle2: React.CSSProperties = {
    borderRadius: '100%',
    fontSize: '25px',
    margin: '20px',
    width: '50px',
    height: '50px',
    color: 'white',
    background: 'rgb(26, 107, 201)'
};

const rollComponentStyle3: React.CSSProperties = {
    fontSize: '35px',
    color: 'rgb(49, 49, 49)',
    textAlign: 'center'
};

export default class CounterButton extends React.Component< RollComponentProps, RollComponentState> {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1
        };
        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);
    }

    incrementCount() {
        if (this.state.counter < this.props.max) {
            this.setState({
                counter: this.state.counter + 1
            });
        }
    }

    decrementCount() {
        if (this.state.counter > this.props.min) {
            this.setState({
                counter: this.state.counter - 1
            });
        }
    }

    render() {
        return <div style={rollComponentStyle1}>
                    <button onClick={this.incrementCount} style={rollComponentStyle2}>+</button>
                    <h1 style={rollComponentStyle3}>{this.state.counter}</h1>
                    <button onClick={this.decrementCount} style={rollComponentStyle2}>-</button>
                </div>;
    }
}