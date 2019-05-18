import { combineReducers } from 'redux'

const modules = {}
const context = require.context('./ducks/', true, /\.js$/) // carrega reducers de todos os componentes

context.keys().forEach(filename => {
  const arr = filename.split('/')
  const key = arr[arr.length - 1]
  const ctx = context(filename)
  if (ctx.default) {
    modules[key.replace('.js', '')] = ctx.default
  }
})

export default combineReducers({
  ...modules
})
