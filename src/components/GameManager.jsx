import { useState } from 'react'
import { assetPath } from '../utils/assets.js'

const imageOptions = [
  { label: 'Aventura', value: assetPath('assets/games/zelda-echoes.webp') },
  { label: 'Accion', value: assetPath('assets/games/spider-man-2.webp') },
  { label: 'Carreras', value: assetPath('assets/games/mario-kart-world.webp') },
  { label: 'Creativo', value: assetPath('assets/games/minecraft-deluxe.webp') },
  { label: 'Deportes', value: assetPath('assets/games/fc-26.webp') },
]

function GameManager({ onAddGame, onResetGames }) {
  const [formError, setFormError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = form.get('name').trim()
    const category = form.get('category')
    const price = Number(form.get('price'))
    const description = form.get('description').trim()
    const image = form.get('image')

    if (!name || !category || !price || !description || !image) {
      setFormError('Completa todos los campos para agregar el videojuego.')
      return
    }

    if (price < 1000) {
      setFormError('El precio debe ser mayor o igual a $1.000.')
      return
    }

    onAddGame({
      id: `game-${Date.now()}`,
      name,
      category,
      price,
      description,
      image,
    })

    setFormError('')
    event.currentTarget.reset()
  }

  return (
    <section id="administrar" className="section-soft py-5">
      <div className="container">
        <div className="row g-4 align-items-start">
          <div className="col-lg-5">
            <p className="text-uppercase section-label mb-2">Administracion</p>
            <h2 className="h1 fw-bold">Agregar videojuegos</h2>
            <p className="text-muted-custom">
              Los cambios se mantienen aunque recargues la pagina.
            </p>
            <button className="btn btn-outline-brand" type="button" onClick={onResetGames}>
              Restaurar catalogo inicial
            </button>
          </div>
          <div className="col-lg-7">
            <form className="manager-form" autoComplete="off" noValidate onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label" htmlFor="name">Nombre</label>
                  <input className="form-control" id="name" name="name" type="text" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label" htmlFor="category">Categoria</label>
                  <select className="form-select" id="category" name="category" required>
                    <option value="">Selecciona</option>
                    <option value="Accion">Accion</option>
                    <option value="Aventura">Aventura</option>
                    <option value="Carreras">Carreras</option>
                    <option value="Creativo">Creativo</option>
                    <option value="Deportes">Deportes</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label" htmlFor="price">Precio</label>
                  <input className="form-control" id="price" name="price" type="number" min="1000" step="1000" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label" htmlFor="image">Imagen</label>
                  <select className="form-select" id="image" name="image" required>
                    <option value="">Selecciona portada</option>
                    {imageOptions.map((option) => (
                      <option key={option.label} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
                <div className="col-12">
                  <label className="form-label" htmlFor="description">Descripcion</label>
                  <textarea className="form-control" id="description" name="description" rows="3" required></textarea>
                </div>
                <div className="col-12 d-flex flex-column flex-sm-row align-items-sm-center gap-3">
                  <button className="btn btn-brand btn-lg" type="submit">Agregar videojuego</button>
                  {formError && <span className="form-error" role="alert">{formError}</span>}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GameManager
