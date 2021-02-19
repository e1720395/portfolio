import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Appli from './Appli';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Appli />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('racine')
);
