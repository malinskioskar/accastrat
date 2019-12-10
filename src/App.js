import React from 'react';
import CounterComponent from './counter/CounterComponent';
import HorizontalMenuComponent from './horizontalMenu/HorizontalMenuComponent';
import DropdownComponent from './dropdown/DropdownComponent';

const App = () => (
    <div>
        <div>
            <CounterComponent />
        </div>
        <div>
            <HorizontalMenuComponent />
        </div>
        <div>
            <DropdownComponent />
        </div>
    </div>
);

export default App;
