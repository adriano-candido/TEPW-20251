import React from 'react';
import Header from './Header';
import Header2 from './Header2';

export default function App() {
  return (
    <div>
      <h1>Hello World !</h1>
      <Header example="Ola mundo2!"/>
      <Header2>
        Ola mundo3!
      </Header2>
    </div>
  );
}