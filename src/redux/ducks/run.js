// Action Types
export const RUN = 'RUN'

// Action Creators
export const run = payload => {
  return {
    type: RUN,
    payload
  }
}
