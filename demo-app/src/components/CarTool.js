import React, { useState }from 'react';
import PropTypes from 'prop-types';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';
import { AltCarEditRow } from './AltCarEditRow';

import { carsPropType } from '../propTypes/carsPropTypes';

export const CarTool = ({ cars: initialCars, headerText }) => {

  const [ cars, setCars ] = useState(initialCars.concat());
  const [ editCarId, setEditCarId ] = useState(-1);

  const appendCar = car => {
    setCars(cars.concat({
      ...car,
      id: Math.max(...cars.map(c => c.id), 0) + 1,
    }));
    setEditCarId(-1);
  }

  const deleteCar = carId => {
    setCars(cars.filter(c => c.id !== carId));
    setEditCarId(-1);
  };

  const saveCar = car => {

    const carIndex = cars.findIndex(c => c.id === car.id);
    const newCars = cars.concat(); // make a copy
    newCars[carIndex] = car;
    setCars(newCars);
    setEditCarId(-1);

    // setCars(cars.map(c => c.id === car.id ? car : c));
  };

  const cancelCar = () => setEditCarId(-1);

  console.log(cars);

  return <>
    <ToolHeader headerText={headerText} />
    <CarTable cars={cars} editCarId={editCarId}
      onEditCar={setEditCarId} onDeleteCar={deleteCar}
      onSaveCar={saveCar} onCancelCar={cancelCar}
       />
    <CarForm onSubmitCar={appendCar} />
  </>;

};

CarTool.propTypes = {
  headerText: PropTypes.string,
  cars: carsPropType,
};
