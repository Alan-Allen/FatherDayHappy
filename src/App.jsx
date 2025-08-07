import React, { useState } from 'react';

const COLORS = ["#ff3b3b", "#ffb93b", "#fff93b", "#3bff5f", "#3bbcff", "#d33bff"];
const text_colors = ['text-primary', 'text-success', 'text-danger', 'text-warning', 'text-info'];

function App() {
  const [clicked, setClicked] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const [textColor, setTextColor] = useState('text-success');

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

    const newColor = text_colors[Math.floor(Math.random() * text_colors.length)];

    setTextColor(newColor);
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
        style={{ 
          width: '400px',
          textAlign: 'center',  
          padding: '1.5rem', 
          position: 'relative',
          background: 'linear-gradient(135deg, #fceabb 0%, #f8b500 100%)',
          borderRadius: '1em',
          boxShadow: 'inset 0 0 10px rgba(255, 255, 255, 0.3), 0 4px 20px rgba(0, 0, 0, 0.2)',
          color: '#333',
          }} >
        <h5 style={{ fontSize: '2em', marginBottom: '0.5em', fontFamily: '"ZCOOL KuaiLe", cursive', }}>🎉 父親節快樂 🎉</h5>
        <p className={`card-text fw-bold ${textColor}`} style={{ fontSize: '2em', fontFamily: '"ZCOOL KuaiLe", cursive' }}>
          煙花綻放!
        </p>

        {/* 按鈕容器（相對定位） */}
        <div style={{ position: 'relative', display: 'inline-block', marginTop: 20 }}>
          <button
            onClick={handleClick}
            style={{
              fontSize: '1.2em',
              backgroundColor: '#007bff',
              color: '#fff',
              padding: '0.75em 1.5em',
              border: 'none',
              borderRadius: '0.5em',
              cursor: 'pointer',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.2s ease',
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
          >
            啟動
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
