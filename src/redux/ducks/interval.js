// Action Types
export const FASTER = 'FASTER'

// Reducer
const INITIAL_STATE = 70

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FASTER:
      return Math.ceil(state - state * 0.1)
    default:
      return state
  }
}

// Action Creators
export const faster = () => {
  return {
    type: FASTER
  }
}
