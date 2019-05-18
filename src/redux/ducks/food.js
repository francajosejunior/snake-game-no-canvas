// Action Types
export const CHANGE_FOOD_CORDS = 'CHANGE_FOOD_CORDS'

// Reducer
const INITIAL_STATE = [10, 10]

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CHANGE_FOOD_CORDS:
      return payload
    default:
      return state
  }
}

// Action Creators
export const changeFoodCords = payload => {
  return {
    type: CHANGE_FOOD_CORDS,
    payload
  }
}
