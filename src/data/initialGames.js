import { assetPath } from '../utils/assets.js'

export const initialGames = [
  {
    id: 'game-zelda-echoes',
    name: 'Zelda Echoes of Wisdom',
    category: 'Aventura',
    price: 59990,
    description: 'Aventura de exploracion y puzzles para jugadores que disfrutan descubrir secretos.',
    image: assetPath('assets/games/zelda-echoes.svg'),
  },
  {
    id: 'game-fc-26',
    name: 'FC 26',
    category: 'Deportes',
    price: 54990,
    description: 'Simulador deportivo con modos competitivos, ligas y torneos para jugar en linea.',
    image: assetPath('assets/games/fc-26.svg'),
  },
  {
    id: 'game-spider-man-2',
    name: 'Spider Man 2',
    category: 'Accion',
    price: 64990,
    description: 'Juego de accion con combate agil, mundo abierto y misiones cinematograficas.',
    image: assetPath('assets/games/spider-man-2.svg'),
  },
  {
    id: 'game-mario-kart-world',
    name: 'Mario Kart World',
    category: 'Carreras',
    price: 49990,
    description: 'Carreras arcade para competir en pistas coloridas con objetos y multijugador local.',
    image: assetPath('assets/games/mario-kart-world.svg'),
  },
  {
    id: 'game-minecraft',
    name: 'Minecraft Deluxe',
    category: 'Creativo',
    price: 29990,
    description: 'Construccion, exploracion y supervivencia en mundos generados para crear sin limites.',
    image: assetPath('assets/games/minecraft-deluxe.svg'),
  },
  {
    id: 'game-hades-ii',
    name: 'Hades II',
    category: 'Accion',
    price: 34990,
    description: 'Roguelike de accion con progresion, mitologia y combates rapidos de alta precision.',
    image: assetPath('assets/games/hades-ii.svg'),
  },
]
