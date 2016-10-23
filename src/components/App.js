import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './app.css';


const App = () => (
  <div>
      <h1 className='global-css' styleName='title bar'>React + Webpack Boilerplate</h1>
      <p>Let's start coding</p>
  </div>
);



export default CSSModules(App, styles, { allowMultiple: true });
