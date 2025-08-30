import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Bunny from '../components/Bunny';
import ClickEffect from '../components/ClickEffect';

export default function Home() {
  const [clicked, setClicked] = useState(false);
  const [clickPos, setClickPos] = useState(null);
  const navigate = useNavigate();

  const handleClick = (e) => {
    // Get position relative to button
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setClickPos({ x, y });

    setClicked(true);
    new Audio('/470494__tergelcom__button-pop.mp3').play();

    setTimeout(() => {
      navigate('/explore');
      setClicked(false);
      setClickPos(null);
    }, 1000);
  };

  return (
    <div
      className="home-screen"
      style={{
        backgroundImage: 'url("https://i.pinimg.com/originals/76/01/a3/7601a31e47247077856ed69b7b4fa124.gif")',
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
      }}
    >
      <h1>Welcome to Kiana's Portfolio</h1>
      <button
        onClick={handleClick}
        style={{ 
          fontSize: 35, 
          padding: '12px 24px', 
          cursor: 'pointer', 
          display: 'flex', 
          alignItems: 'center', 
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        Let's Explore!
        <Bunny hop={clicked} />

        {/* Show click effect if clickPos exists */}
        {clickPos && <ClickEffect x={clickPos.x} y={clickPos.y} onDone={() => setClickPos(null)} />}
      </button>
    </div>
  );
}
