import React from 'react';
import { Link } from 'react-router-dom';

export default function RandomFact(props) {
  return (
    <div id="randomfact">

      <Link to="/catfact">
        <button onClick={props.handleClick}>Get Cat Facts</button>
      </Link >
      <button onClick={props.handleRandomClick}>More Random Facts!</button>
      <p>{props.randomfact}</p>
    </div >
  )
}