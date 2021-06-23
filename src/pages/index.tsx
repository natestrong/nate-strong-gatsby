import React from 'react';
import { Link } from 'gatsby';

export default function renderWelcome() {
  return (
    <>
      <header className='w-full mb-10 p-7 text-center
      bg-gradient-to-b from-purple-400 via-pink-500 to-red-500'>
        <h1 className='text-6xl text-white'>Home</h1>
      </header>

      <div className="w-full h-20 bg-red-500">
        <div
          className="bg-repeat w-full h-full text-primary-100 heropattern-jigsaw-red-100">

        </div>
      </div>

      <div>Welcome gud frands</div>
      <Link to='/about/'>Learn about me &rarr;</Link>
    </>
  )
    ;
};
