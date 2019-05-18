export const INCREASE = 'INCREASE'

const INITIAL_STATE = 10

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case INCREASE:
      return state + 10
    default:
      return state
  }
}

// Action Creators
export const increase = () => {
  return {
    type: INCREASE
  }
}
