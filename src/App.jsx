import React, { useState } from 'react';

const COLORS = ["#ff3b3b", "#ffb93b", "#fff93b", "#3bff5f", "#3bbcff", "#d33bff"];

function App() {
  const [clicked, setClicked] = useState(false);
  const [confetti, setConfetti] = useState([]);

  const handleClick = () => {
    // 切換卡片文字狀態
    setClicked(!clicked);

    // 產生彩帶
    const newConfetti = Array.from({ length: 30 }).map(() => {
      const translateX = (Math.random() - 0.5) * 400; // 放大範圍，變成 -200 ~ 200 px
      const translateY = (Math.random() - 0.5) * 400;
      return {
        id: Math.random().toString(36).slice(2),
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        left: Math.random() * 100,
        rotate: Math.random() * 360,
        delay: Math.random() * 0.5,
        translateX,
        translateY,
      };
    });

    setConfetti(newConfetti);

    setTimeout(() => setConfetti([]), 4500);
  };

  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">首頁</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* 卡片 */}
      <div className="card shadow mx-auto mt-5"
        style={{ width: '300px', textAlign: 'center', padding: '1.5rem', position: 'relative' }} >
        <h5 className="card-title mb-3">父親節快樂卡片</h5>
        <p className={`card-text ${clicked ? 'text-primary fw-bold' : ''}`}>
          {clicked ? '謝謝爸爸，您是最棒的！' : '點擊按鈕送出祝福吧！'}
        </p>

        {/* 按鈕容器（相對定位） */}
        <div style={{ position: 'relative', display: 'inline-block', marginTop: 20 }}>
          <button
            onClick={handleClick}
            style={{
              position: 'relative',
              zIndex: 2,
              padding: '0.6em 1.2em',
              fontSize: '1rem',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: '#007bff',
              color: '#fff',
              userSelect: 'none',
              overflow: 'hidden',
            }}
          >
            {clicked ? '收回祝福' : '送出祝福'}
          </button>

          {/* 彩帶 */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              overflow: 'visible',
              zIndex: 1,
            }}
          >
            {confetti.map(({ id, color, left, rotate, delay, translateX, translateY }) => (
              <span
                key={id}
                className="confetti"
                style={{
                  backgroundColor: color,
                  left: `${left}%`,
                  transform: `rotate(${rotate}deg)`,
                  animationDelay: `${delay}s`,
                  '--tx': `${translateX}px`,
                  '--ty': `${translateY}px`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CSS動畫樣式 */}
      <style>{`
        .confetti {
          position: absolute;
          bottom: 0;
          width: 8px;
          height: 16px;
          border-radius: 2px;
          opacity: 0.9;
          animation: confetti-fall 4s forwards;
          animation-timing-function: ease-out;
          transform-origin: center;
        }

        @keyframes confetti-fall {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.9;
          }
          100% {
            transform: translate(var(--tx), var(--ty)) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}

export default App;
