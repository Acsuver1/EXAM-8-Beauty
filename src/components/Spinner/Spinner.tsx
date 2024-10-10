
import React from 'react';
import { Audio } from 'react-loader-spinner'; 

const Spinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Audio height="100" width="100" color="#4fa94d" ariaLabel="loading" />
    </div>
  );
};

export default Spinner;
