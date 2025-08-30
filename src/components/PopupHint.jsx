import React from 'react';

export default function PopupHint({ text }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 20,
        right: 20,
        background: 'rgba(255, 255, 255, 0.8)',
        padding: '10px 15px',
        borderRadius: 10,
        boxShadow: '0 0 10px rgba(0,0,0,0.2)',
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
        fontSize: 14,
        zIndex: 1000,
      }}
    >
      {text}
    </div>
  );
}
