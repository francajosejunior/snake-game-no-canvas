import React, { memo, useEffect } from 'react'
import { connect } from 'react-redux'

const Area = props => {
  const { pause, gameover } = props.general

  let className = 'area'
  if (pause) {
    className += ' pause'
  }
  if (gameover) {
    className += ' gameover'
  }
  return <div className={className}>{props.children}</div>
}

export default connect(state => ({ general: state.general }))(memo(Area))
