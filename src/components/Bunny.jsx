import React from 'react';

export default function Bunny({ hop }) {
  return (
    <img
      src= "/7c8dabd912f6cf6baad5dfa7a9dc8d7a-ezgif.com-loop-count.gif"  // swap gifs here
      alt="Bunny"
      style={{
        width: 50,
        height: 50,
        marginLeft: 10,
        position: 'relative',
        top: hop ? -20 : 0,
        transform: hop ? 'scale(1.1)' : 'scale(1)',
        transition: 'top 0.3s ease, transform 0.3s ease',
        userSelect: 'none',
      }}
      draggable={false}
    />
  );
}
