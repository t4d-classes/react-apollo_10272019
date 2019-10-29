import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const ColorTool = ({ colors, headerText }) => {

  const [ colorForm, setColorForm ] = useState({
    color: '',
    hexcode: 0,
  });

  const change = (e) => {
    setColorForm({
      ...colorForm,
      [ e.target.name ]: e.target.type === 'number'
        ? Number(e.target.value)
        : e.target.value,
    });
  };

  console.log('color tool rendered', colorForm);

  return <>
    <header>
      <h1>{headerText}</h1>
    </header>
    <ul>
      {colors.map(
        (color, index) => <li key={index}>{color}</li>
      )}
    </ul>
    <form>
      <div>
        <label htmlFor="color-input">Color:</label>
        <input type="text" id="color-input" name="color"
          value={colorForm.color} onChange={change}  />
      </div>
      <div>
        <label htmlFor="hexcode-input">HexCode:</label>
        <input type="number" id="hexcode-input" name="hexcode"
          value={colorForm.hexcode} onChange={change}  />
      </div>
    </form>
  </>;

};

ColorTool.defaultProps = {
  headerText: 'Color Tool',
};

ColorTool.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};
