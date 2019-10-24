import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header>
      <div>
        <p>Not GitHub<br></br>cat btw ^_^</p>
        <Link to="/">
          <img id="logo" src={props.logoSrc} alt="logo"></img>
        </Link>
        <p>Home</p>
      </div>
      <h1>Meow Facts</h1>
    </header>
  )
}