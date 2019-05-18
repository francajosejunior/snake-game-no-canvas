import React from 'react'
import { connect } from 'react-redux'

const Snake = props => {
  return props.position.map((p, i) => {
    const [x, y] = p
    return (
      <div
        key={i}
        className="snake"
        style={{
          left: `${x}px`,
          top: `${y}px`
        }}
      />
    )
  })
}

export default connect(state => ({ position: state.position }))(Snake)
