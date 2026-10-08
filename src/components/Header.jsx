function Header({ gamesCount }) {
  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container">
          <a className="navbar-brand" href="#inicio">PlayVerse Store</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainMenu"
            aria-controls="mainMenu"
            aria-expanded="false"
            aria-label="Mostrar menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainMenu">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
              <li className="nav-item"><a className="nav-link" href="#catalogo">Catalogo</a></li>
              <li className="nav-item"><a className="nav-link" href="#administrar">Administrar</a></li>
              <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
              <li className="nav-item">
                <span className="catalog-badge">{gamesCount}</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
