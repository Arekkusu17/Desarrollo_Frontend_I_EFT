import { formatoCLP } from '../utils/format.js'

function GameCard({ game, onDeleteGame }) {
  return (
    <article className="col-md-6 col-xl-4">
      <div className="card game-card h-100">
        <img src={game.image} className="card-img-top" alt={`Portada de ${game.name}`} />
        <div className="card-body d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start gap-2 mb-3">
            <span className="badge category-badge">{game.category}</span>
            <strong className="price-tag">{formatoCLP.format(Number(game.price))}</strong>
          </div>
          <h3 className="h5 card-title">{game.name}</h3>
          <p className="card-text">{game.description}</p>
          <button className="btn btn-outline-danger mt-auto" type="button" onClick={() => onDeleteGame(game.id)}>
            Eliminar
          </button>
        </div>
      </div>
    </article>
  )
}

export default GameCard
