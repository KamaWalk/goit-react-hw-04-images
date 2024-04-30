import React from 'react';
import { Puff } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Puff
  visible={true}
  height="80"
  width="80"
  color="#c21b9b"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
  );
};

export default Loader;