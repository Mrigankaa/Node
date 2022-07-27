import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("render component");
    if (value >= 1) {
      document.title = `New message (${value})`;
    }
  }, []);

  return <>
    <h1>{value}</h1>
    <button className='btn' onClick={()=>setValue(value+1)}>increse</button>
  </>
}

export default UseEffectBasics;
