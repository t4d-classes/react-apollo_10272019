import React from 'react';

export const CarForm = ({ onSubmitCar }) => {

  const submitCar = () => {
    onSubmitCar({
      make: 'Ford'
    });
  }

  return (
    <button type="button" onClick={submitCar}>Add Car</button>
  );

};
