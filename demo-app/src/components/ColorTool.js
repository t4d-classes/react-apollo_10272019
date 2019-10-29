import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const ColorTool = ({ colors: initialColors, headerText }) => {

  const [ colors, setColors ] = useState(initialColors);

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

  const appendColor = () => {
    setColors(colors.concat(colorForm.color));
  }

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
      <button type="button" onClick={appendColor}>Add Color</button>
    </form>
  </>;

};

ColorTool.defaultProps = {
  headerText: 'Color Tool',
};

ColorTool.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};
