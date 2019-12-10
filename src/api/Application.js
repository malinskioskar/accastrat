/* eslint-disable */

import path from 'path';
import qs from 'qs';
import express from 'express';
import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { toJS } from 'immutable';
import mongoose from 'mongoose';
import store from '../core/Core';
import Root from '../core/Root';
import Product from './models/Product';

const DB_NAME = 'accastrategy';

const DB_URL = `mongodb://127.0.0.1:27017/${DB_NAME}`;

const application = express();
const PORT = 3333;

application.use(handleRender);

mongoose.connect(DB_URL, { useNewUrlParser: true, useCreateIndex: true })

const { connection } = mongoose;

connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

connection.once('open', console.log('Connected to MongoDB successfully'))


// We are going to fill these out in the sections to follow
function handleRender(request, response) {
  // Read the counter from the request, if provided
  const params = qs.parse(request.query);
  const counter = parseInt(params.counter, 10) || 0;

  // Compile an initial state
  const preloadedState = { counter };

  // Render the component to a string
  const html = renderToString(
    <Root store={store} />,
  );

  // Grab the initial state from our Redux store
  const finalState = store.getState().toJS();

  // Send the rendered page back to the client
  response.send(renderFullPage(html, finalState));
}
function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
    /</g,
    '\\u003c',
  )}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `;
}

application.listen(PORT);
