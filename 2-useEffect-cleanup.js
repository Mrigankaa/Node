import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [ size, setSize ] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", checkSize);
  },[])
  return <>
    <h1>Window size</h1>
    <p>{size} PX</p>
  </>

};

export default UseEffectCleanup;
