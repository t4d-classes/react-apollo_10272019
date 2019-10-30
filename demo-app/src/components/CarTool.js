import React, { useState }from 'react';
import PropTypes from 'prop-types';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

import { carsPropType } from '../propTypes/carsPropTypes';

export const CarTool = ({ cars: initialCars, headerText }) => {

  const [ cars, setCars ] = useState(initialCars.concat());
  const [ editCarId, setEditCarId ] = useState(-1);

  const appendCar = car => {
    setCars(cars.concat({
      ...car,
      id: Math.max(...cars.map(c => c.id), 0) + 1,
    }));

  }

  const deleteCar = carId => {
    setCars(cars.filter(c => c.id !== carId));
  };

  console.log(cars);

  return <>
    <ToolHeader headerText={headerText} />
    <CarTable cars={cars} editCarId={editCarId}
      onEditCar={setEditCarId} onDeleteCar={deleteCar}
      onSaveCar={() => null} onCancelCar={() => null} />
    <CarForm onSubmitCar={appendCar} />
  </>;

};

CarTool.propTypes = {
  headerText: PropTypes.string,
  cars: carsPropType,
};
