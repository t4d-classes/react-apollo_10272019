import React from 'react';
import PropTypes from 'prop-types';

import { CarViewRow } from './CarViewRow';
import { CarEditRow } from './CarEditRow';

import { carsPropType } from '../propTypes/carsPropTypes';

export const CarTable = ({
  cars, editCarId,
  onEditCar: editCar,
  onDeleteCar: deleteCar,
  onSaveCar: saveCar,
  onCancelCar: cancelCar,
}) => {

  return <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Make</th>
        <th>Model</th>
        <th>Year</th>
        <th>Color</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {cars.map(car =>
        editCarId === car.id
          ? <CarEditRow key={car.id} car={car}
              onSaveCar={saveCar} onCancelCar={cancelCar} />
          : <CarViewRow key={car.id} car={car}
              onEditCar={editCar} onDeleteCar={deleteCar} />)}
    </tbody>
  </table>;

  // return <div>
  //   <h1>Hello World</h1>
  //   <span>hi</span>
  // </div>;

  // return React.createElement('div', null,
  //   React.createElement('h1', null, 'Hello World'),
  //   React.createElement('span', null, 'h1'),
  // );

};

CarTable.defaultProps = {
  cars: [],
  editCarId: -1,
};

CarTable.propTypes = {
  cars: carsPropType,
  editCarId: PropTypes.number,
  onEditCar: PropTypes.func.isRequired,
  onDeleteCar: PropTypes.func.isRequired,
  onSaveCar: PropTypes.func.isRequired,
  onCancelCar: PropTypes.func.isRequired,
};
