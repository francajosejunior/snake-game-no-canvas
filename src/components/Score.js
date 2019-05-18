import React, { memo } from 'react'
import { connect } from 'react-redux'

const Score = props => <div className="score">{props.size - 10}</div>

export default connect(state => ({
  size: state.size
}))(memo(Score))
