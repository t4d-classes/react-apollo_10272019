import React from 'react';
import PropTypes from 'prop-types';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';

import { carsPropType } from '../propTypes/carsPropTypes';

export const CarTool = ({ cars, headerText }) => {

  return <>
    <ToolHeader headerText={headerText} />
    <CarTable cars={cars} />
  </>;

};

CarTool.propTypes = {
  headerText: PropTypes.string,
  cars: carsPropType,
};
