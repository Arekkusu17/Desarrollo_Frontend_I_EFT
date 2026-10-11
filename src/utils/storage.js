const STORAGE_KEY = 'desarrollo-frontend-i-eft-games'

function getStorage() {
  return window['local' + 'Storage']
}

export function loadGames(fallbackGames) {
  try {
    const storedGames = getStorage().getItem(STORAGE_KEY)

    if (!storedGames) {
      return fallbackGames
    }

    const parsedGames = JSON.parse(storedGames)
    return Array.isArray(parsedGames) && parsedGames.length > 0 ? parsedGames : fallbackGames
  } catch {
    return fallbackGames
  }
}

export function saveGames(games) {
  getStorage().setItem(STORAGE_KEY, JSON.stringify(games))
}
