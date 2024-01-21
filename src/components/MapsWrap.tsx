import React from 'react';
import Maps from './maps';

const MapsWrap = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <h1 className='text-center font-bold text-2xl p-4'>HERE OUR LOCATION</h1>
      <Maps />
    </div>
  );
};

export default MapsWrap;
