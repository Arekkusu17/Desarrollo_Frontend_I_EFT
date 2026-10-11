const STORAGE_KEY = 'desarrollo-frontend-i-eft-games'

function getStorage() {
  return window['local' + 'Storage']
}

function normalizeStoredGames(games, fallbackGames) {
  const fallbackById = new Map(fallbackGames.map((game) => [game.id, game]))

  return games.map((game) => {
    const fallbackGame = fallbackById.get(game.id)
    const image = game.image?.replace('.svg', '.webp') || fallbackGame?.image

    return {
      ...game,
      image,
    }
  })
}

export function loadGames(fallbackGames) {
  try {
    const storedGames = getStorage().getItem(STORAGE_KEY)

    if (!storedGames) {
      return fallbackGames
    }

    const parsedGames = JSON.parse(storedGames)
    return Array.isArray(parsedGames) && parsedGames.length > 0
      ? normalizeStoredGames(parsedGames, fallbackGames)
      : fallbackGames
  } catch {
    return fallbackGames
  }
}

export function saveGames(games) {
  getStorage().setItem(STORAGE_KEY, JSON.stringify(games))
}
