function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">父親節快樂</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">首頁</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">祝福語</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">相簿</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">關於爸爸</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="container mt-4">
        <h1>歡迎來到父親節網站！</h1>
      </main>
    </div>
  );
}

export default App;
