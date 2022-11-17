import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Header from './js/Header';
import Dungeon from './js/Dungeon';
import './js/scroll.js';

const mountNode = document.getElementById('root');
const root = ReactDOM.createRoot(mountNode);
root.render(
  <>
    <Header />
    <Dungeon />
  </>
);
