import React from 'react';
import { hydrate } from 'react-dom';
import Root from './core/Root';
import store from './core/Core';

import './style.css';

const rootElement = document.getElementById('root');

hydrate(
  <Root
    store={store}
  />,
  rootElement,
);
