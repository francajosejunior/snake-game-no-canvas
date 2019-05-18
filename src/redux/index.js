import { createStore, applyMiddleware, compose } from 'redux'
import middl from './middlewares/middleware'
import rootReducer from './rootReducer'
import { KEYR } from './ducks/general'
// import rootSaga from './rootSaga'

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middlewares = applyMiddleware(...middl)

const interceptReducer = (state, action) => {
  if (action.type === KEYR) {
    return rootReducer(undefined, action)
  }
  return rootReducer(state, action)
}

export const store = createStore(
  interceptReducer,
  composeEnhancers(middlewares)
)
