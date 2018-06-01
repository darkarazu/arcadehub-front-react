import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './components/Hello';
import RollComponent from './components/RollComponent';

// ReactDOM.render(<Hello name='Pepe'/>, document.getElementById("app"));
ReactDOM.render(<RollComponent max={20} min={1}/>, document.getElementById('app'));