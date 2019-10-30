import React from 'react';
import PropTypes from 'prop-types';

import { useForm } from '../hooks/useForm';
import { carPropType } from '../propTypes/carsPropTypes';

export const CarEditRow = ({ car, onSaveCar, onCancelCar: cancelCar }) => {

  const [ carForm, change, _, setIfBlank ] = useForm({
    make: car.make,
    model: car.model,
    year: car.year,
    color: car.color,
    price: car.price,
  });

  console.log('carForm state', carForm);

  const saveCar = () => {
    onSaveCar({
      ...carForm,
      id: car.id,
    });
  };

  return <tr>
    <td>{car.id}</td>
    <td><input type="text" name="make"
      value={carForm.make} onChange={change} /></td>
    <td><input type="text" name="model"
      value={carForm.model} onChange={change} /></td>
    <td><input type="number" name="year"
      value={carForm.year} onChange={change} onBlur={setIfBlank(1900)} /></td>
    <td><input type="text" name="color"
      value={carForm.color} onChange={change} /></td>
    <td><input type="number" name="price"
      value={carForm.price} onChange={change} onBlur={setIfBlank(0)} /></td>
    <td>
      <button type="button"
        onClick={saveCar}>Save</button>
      <button type="button"
        onClick={cancelCar}>Cancel</button>
    </td>
  </tr>;

};

CarEditRow.propTypes = {
  car: carPropType,
  onSaveCar: PropTypes.func.isRequired,
  onCancelCar: PropTypes.func.isRequired,
};
