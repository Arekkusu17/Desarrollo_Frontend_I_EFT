import { useEffect, useMemo, useState } from 'react'
import ContactForm from './components/ContactForm.jsx'
import Footer from './components/Footer.jsx'
import GameCatalog from './components/GameCatalog.jsx'
import GameManager from './components/GameManager.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import { initialGames } from './data/initialGames.js'
import { loadGames, saveGames } from './utils/storage.js'
import { normalizeText } from './utils/format.js'

function App() {
  const [games, setGames] = useState(() => loadGames(initialGames))
  const [category, setCategory] = useState('Todos')
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('Catalogo listo para explorar.')

  useEffect(() => {
    saveGames(games)
  }, [games])

  const visibleProducts = useMemo(() => {
    const normalizedSearch = normalizeText(search)

    return games.filter((game) => {
      const matchesCategory = category === 'Todos' || game.category === category
      const searchableText = normalizeText(`${game.name} ${game.category} ${game.description}`)
      const matchesSearch = !normalizedSearch || searchableText.includes(normalizedSearch)

      return matchesCategory && matchesSearch
    })
  }, [category, games, search])

  function handleCategoryChange(nextCategory) {
    setCategory(nextCategory)
    setMessage(`Filtro aplicado: ${nextCategory}.`)
  }

  function handleSearchChange(nextSearch) {
    setSearch(nextSearch)
    setMessage(nextSearch ? `Busqueda aplicada: ${nextSearch}.` : 'Busqueda limpiada.')
  }

  function handleClearSearch() {
    setSearch('')
    setMessage('Busqueda limpiada.')
  }

  function handleAddGame(game) {
    setGames((currentGames) => [...currentGames, game])
    setCategory('Todos')
    setSearch('')
    setMessage(`${game.name} fue agregado al catalogo.`)
  }

  function handleDeleteGame(gameId) {
    const deletedGame = games.find((game) => game.id === gameId)
    setGames((currentGames) => currentGames.filter((game) => game.id !== gameId))
    setMessage(deletedGame ? `${deletedGame.name} fue eliminado del catalogo.` : 'Videojuego eliminado.')
  }

  function handleResetGames() {
    setGames(initialGames)
    setCategory('Todos')
    setSearch('')
    setMessage('Catalogo restaurado con los videojuegos iniciales.')
  }

  return (
    <>
      <Header gamesCount={games.length} />
      <Hero />
      <main>
        <GameCatalog
          games={games}
          visibleGames={visibleProducts}
          category={category}
          search={search}
          message={message}
          onCategoryChange={handleCategoryChange}
          onSearchChange={handleSearchChange}
          onClearSearch={handleClearSearch}
          onDeleteGame={handleDeleteGame}
        />
        <GameManager onAddGame={handleAddGame} onResetGames={handleResetGames} />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}

export default App
