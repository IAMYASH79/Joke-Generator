import React from 'react'

const button = (props) => {
  return <button onClick={props.callApi}>
        click to generate a joke.
  </button>;
    
  
}

export default button;