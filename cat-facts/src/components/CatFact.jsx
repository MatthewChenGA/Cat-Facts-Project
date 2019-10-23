import React from 'react';
import { Link } from 'react-router-dom';

export default function CatFact(props) {
  return (
    <div id="catfact">

      <button onClick={props.handleClick}>More Cat Facts!</button>
      <Link to="/randomfact">
        <button onClick={props.randomHandleClick}>Random Animal Fact</button>
      </Link>
      <p>{props.catfact}</p>
    </div>
  )
}