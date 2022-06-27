import React from 'react';
import './styles.css';

const Loader = () => {

  return (
    <div>
      <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      <p className="text-center">loading</p>
    </div>
  );
}

export default Loader;