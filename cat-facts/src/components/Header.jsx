import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header>
      <div>
        <p>Not GitHub<br></br>&nbsp;&nbsp;&nbsp;&nbsp;cat btw</p>
        <Link to="/">
          <img id="logo" src={props.logoSrc} alt="logo"></img>
        </Link>
      </div>
      <h1>Meow Facts</h1>
    </header>
  )
}