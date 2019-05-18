import { pixelSize } from '../../constants'

// Action Types
export const MOVE = 'MOVE'

// Reducer
const INITIAL_STATE = [[1, 1]]

const getArray = (array, size) => {
  if (array.length < size) {
    return array
  }
  return array.slice(array.length - size)
}

export default (state = INITIAL_STATE, { type, payload = {} }) => {
  const { size, direction } = payload
  const [x, y] = state[state.length - 1]
  let a
  switch (type) {
    case MOVE: {
      switch (direction) {
        case 0:
          return getArray([...state, [x, y - pixelSize]], size)
        case 1:
          return getArray([...state, [x + pixelSize, y]], size)
        case 2:
          return getArray([...state, [x, y + pixelSize]], size)
        case 3:
          return getArray([...state, [x - pixelSize, y]], size)
        default:
          return state
      }
    }
    default:
      return state
  }
}

// Action Creators
export const move = payload => ({
  type: MOVE,
  payload
})
