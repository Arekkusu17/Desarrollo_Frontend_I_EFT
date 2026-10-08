import CategoryFilter from './CategoryFilter.jsx'
import GameCard from './GameCard.jsx'

function GameCatalog({ games, visibleGames, category, message, onCategoryChange, onDeleteGame }) {
  const categoryText = category === 'Todos' ? 'todas las categorias' : category

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
              {visibleGames.length} de {games.length} videojuegos visibles en {categoryText}.
            </p>
          </div>
        </div>
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3 mb-4">
          <CategoryFilter activeCategory={category} onCategoryChange={onCategoryChange} />
          <p className="status-message mb-0" aria-live="polite">{message}</p>
        </div>
        {visibleGames.length === 0 ? (
          <div className="alert alert-warning" role="status">
            No hay videojuegos disponibles para la categoria seleccionada.
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
