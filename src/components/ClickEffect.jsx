// src/components/ClickEffect.jsx
import React, { useEffect, useState } from 'react';

export default function ClickEffect({ x, y, onDone }) {
  useEffect(() => {
    // Remove effect after animation (500ms)
    const timer = setTimeout(() => {
      onDone();
    }, 500);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div
      className="click-effect"
      style={{ top: y, left: x }}
    />
  );
}
