// Action Types
export const ARROWRIGHT = 'KEYCODE/ArrowRight'
export const ARROWDOWN = 'KEYCODE/ArrowDown'
export const ARROWLEFT = 'KEYCODE/ArrowLeft'
export const ARROWUP = 'KEYCODE/ArrowUp'

// Reducer

const INITIAL_STATE = 1

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ARROWRIGHT:
      if (state === 3) {
        return state
      }
      return 1
    case ARROWDOWN:
      if (state === 0) {
        return state
      }
      return 2
    case ARROWLEFT:
      if (state === 1) {
        return state
      }
      return 3
    case ARROWUP:
      if (state === 2) {
        return state
      }
      return 0
    default:
      return state
  }
}

// Action Creators
// ...
