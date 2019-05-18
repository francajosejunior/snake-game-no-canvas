import React from 'react'
import { connect } from 'react-redux'

const Food = props => {
  const [left, top] = props.foodCords
  return <div className="food" style={{ top, left }} />
}

export default connect(state => ({ foodCords: state.food }))(Food)
