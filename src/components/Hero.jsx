function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <p className="text-uppercase section-label mb-2">PlayVerse Store</p>
            <h1 className="display-4 fw-bold mb-3">Tienda online de videojuegos</h1>
            <p className="lead mb-4">
              Catalogo interactivo con filtros, administracion de juegos, persistencia local y formulario de contacto validado.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a className="btn btn-brand btn-lg" href="#catalogo">Ver catalogo</a>
              <a className="btn btn-outline-brand btn-lg" href="#administrar">Agregar videojuego</a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-visual" aria-hidden="true">
              <div className="console-screen">
                <span className="screen-pill">Catalogo interactivo</span>
                <strong>PlayVerse</strong>
                <span>Catalogo dinamico</span>
              </div>
              <div className="hero-game-card hero-card-one">Aventura</div>
              <div className="hero-game-card hero-card-two">Accion</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
