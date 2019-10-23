import React from 'react';

export default function ShowCat(props) {
  return (
    <div>
      <button onClick={props.handleSubmit}>Button</button>
      <p>{props.cat}</p>
    </div>
  )
}
