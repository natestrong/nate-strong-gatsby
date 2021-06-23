import React from 'react';
import { Link } from 'gatsby';

export default function renderAboutMe() {
  return (
    <>
      <h1>About Me</h1>
      <p>This page is all about me.</p>
      <Link to='/'>&larr; back to home</Link>
    </>
  );
}
