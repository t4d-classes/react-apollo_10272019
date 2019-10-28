import React from 'react';
import PropTypes from 'prop-types';

export const ColorTool = ({ colors, headerText }) => {

  return <>
    <header>
      <h1>{headerText}</h1>
    </header>
    <ul>
      {colors.map(
        (color, index) => <li key={index}>{color}</li>
      )}
    </ul>
  </>;

};

ColorTool.defaultProps = {
  headerText: 'Color Tool',
};

ColorTool.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};
