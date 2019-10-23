import React from 'react';
import { Link } from 'react-router-dom';

export default function Main(props) {
  return (
    <div id="intro">
      <p>Hi, this is <span className="greenText underline">Matthew Chen</span>, cat-loving designer.</p>
      <p><span className="redText bold">Do you like cats too?</span></p>
      <p>Ah, no matters. You are here for some random cat trivia.Why not try and click some button?</p>
      <Link to="/catfact">
        <button onClick={props.handleClick}>Get Cat Fact!</button>
      </Link>
      <Link to="/randomfact">
        <button onClick={props.handleRandomClick}>Get Random Animal Facts!</button>
      </Link>
    </div >
  )
}