import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Helloo } from './components/Helloo';

ReactDOM.render(
    <Helloo compiler="TypeScript" framework="React" />,
    document.getElementById('app')
);
