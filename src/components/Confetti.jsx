import React, { useEffect, useRef } from 'react';

export default function Confetti() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    const confettiPieces = [];

    const colors = ['#9bc81e', '#ffb707', '#03324e', '#03324e'];

    function randomRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    class ConfettiPiece {
      constructor() {
        this.x = randomRange(0, canvas.width);
        this.y = randomRange(-canvas.height, 0);
        this.size = randomRange(5, 10);
        this.speed = randomRange(2, 5);
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.rotation = randomRange(0, 2 * Math.PI);
        this.rotationSpeed = randomRange(-0.1, 0.1);
      }
      update() {
        this.y += this.speed;
        this.rotation += this.rotationSpeed;
        if (this.y > canvas.height) {
          this.y = randomRange(-canvas.height, 0);
          this.x = randomRange(0, canvas.width);
        }
      }
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
      }
    }

    function initConfetti() {
      for (let i = 0; i < 100; i++) {
        confettiPieces.push(new ConfettiPiece());
      }
    }

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      confettiPieces.forEach((piece) => {
        piece.update();
        piece.draw();
      });
      animationFrameId = requestAnimationFrame(render);
    }

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();
    initConfetti();
    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 10000,
      }}
    />
  );
}
