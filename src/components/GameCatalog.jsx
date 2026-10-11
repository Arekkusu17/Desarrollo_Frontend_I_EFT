import CategoryFilter from './CategoryFilter.jsx'
import GameCard from './GameCard.jsx'

function GameCatalog({
  games,
  visibleGames,
  category,
  search,
  message,
  onCategoryChange,
  onSearchChange,
  onClearSearch,
  onDeleteGame,
}) {
  const categoryText = category === 'Todos' ? 'todas las categorias' : category
  const searchText = search ? ` con busqueda "${search}"` : ''

  return (
    <section id="catalogo" className="py-5">
      <div className="container">
        <div className="row align-items-end g-3 mb-4">
          <div className="col-lg-7">
            <p className="text-uppercase section-label mb-2">Catalogo</p>
            <h2 className="h1 fw-bold mb-0">Videojuegos disponibles</h2>
          </div>
          <div className="col-lg-5">
            <p className="catalog-summary mb-0" aria-live="polite">
              {visibleGames.length} de {games.length} videojuegos visibles en {categoryText}{searchText}.
            </p>
          </div>
        </div>
        <div className="catalog-toolbar mb-4">
          <form className="search-form" role="search" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="gameSearch" className="form-label fw-semibold">Buscar videojuegos</label>
            <div className="input-group">
              <input
                className="form-control"
                id="gameSearch"
                name="gameSearch"
                type="search"
                value={search}
                onChange={(event) => onSearchChange(event.target.value)}
                placeholder="Ejemplo: accion, carreras, minecraft"
              />
              <button className="btn btn-outline-brand" type="button" onClick={onClearSearch}>
                Limpiar
              </button>
            </div>
          </form>
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3">
            <CategoryFilter activeCategory={category} onCategoryChange={onCategoryChange} />
            <p className="status-message mb-0" aria-live="polite">{message}</p>
          </div>
        </div>
        {visibleGames.length === 0 ? (
          <div className="alert alert-warning" role="status">
            No hay videojuegos que coincidan con la busqueda o categoria seleccionada.
          </div>
        ) : (
          <div className="row g-4">
            {visibleGames.map((game) => (
              <GameCard key={game.id} game={game} onDeleteGame={onDeleteGame} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default GameCatalog
