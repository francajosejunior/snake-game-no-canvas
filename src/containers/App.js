import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from '../redux'
import Area from './../components/Area'
import './../scss/main.scss'
import Snake from '../components/Snake'
import Food from '../components/Food'
import useCommands from '../hooks/useCommands'
import Score from '../components/Score'
import Help from '../components/Help'
import { run } from '../redux/ducks/run'

const App = props => {
  const { dispatch } = store
  useCommands(dispatch)

  useEffect(() => {
    dispatch(run({ snake: 1, size: 1 }))
  }, [])

  return (
    <div className="app">
      <Area>
        <Snake />
        <Food />
        <Score />
        <Help />
      </Area>
    </div>
  )
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)
