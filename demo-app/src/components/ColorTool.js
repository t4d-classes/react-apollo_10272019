import React from 'react';

export const ColorTool = () => {

  const colors = [ 'black', 'blue', 'orange', 'white', 'green', 'red' ];

  return <>
    <header>
      <h1>Color Tool</h1>
    </header>
    <ul>
      {colors.map(
        (color, index) => <li key={index}>{color}</li>
      )}
    </ul>
  </>;

};