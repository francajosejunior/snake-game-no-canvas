// Action Types
export const PAUSE = 'PAUSE'
export const GAMEOVER = 'GAMEOVER'
export const KEYP = 'KEYCODE/KeyP'
export const KEYR = 'KEYCODE/KeyR'

// Reducer
const INITIAL_STATE = {
  pause: false,
  gameover: false
}

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case PAUSE:
      return {
        ...state,
        pause: payload
      }
    case GAMEOVER:
      return {
        ...state,
        gameover: true
      }
    case KEYP:
      return {
        ...state,
        pause: !state.pause
      }
    default:
      return state
  }
}

// Action Creators
export const pause = payload => {
  return {
    type: PAUSE,
    payload
  }
}

export const gameOver = () => {
  return {
    type: GAMEOVER
  }
}
