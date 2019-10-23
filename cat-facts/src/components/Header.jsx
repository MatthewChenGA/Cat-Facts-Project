import React from 'react';

export default function Header(props) {
  return (
    <header>
      <div>
        <p>Not GitHub<br></br>&nbsp;&nbsp;&nbsp;&nbsp;cat btw</p>
        <a href={props.href}>
          <img id="logo" src={props.logoSrc} alt="logo"></img>
        </a>
      </div>
      <h1>Meow Facts</h1>
    </header>
  )
}