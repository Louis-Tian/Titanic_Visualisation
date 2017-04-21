import React from 'react';
import ReactDOM from 'react-dom';
import Canvas from './Canvas';

const App = () => (
  <div>
    <h1>Surviving Titanic</h1>
    <Canvas />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'))
