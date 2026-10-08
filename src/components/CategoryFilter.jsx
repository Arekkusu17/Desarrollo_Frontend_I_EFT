const categories = ['Todos', 'Accion', 'Aventura', 'Carreras', 'Creativo', 'Deportes']

function CategoryFilter({ activeCategory, onCategoryChange }) {
  return (
    <div className="btn-group flex-wrap" role="group" aria-label="Filtrar videojuegos por categoria">
      {categories.map((category) => (
        <button
          key={category}
          className={`btn btn-outline-brand ${activeCategory === category ? 'active' : ''}`}
          type="button"
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
