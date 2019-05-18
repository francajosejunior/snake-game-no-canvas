import { pixelSize, area } from '../../constants'
import { changeFoodCords } from '../ducks/food'
import { ARROWRIGHT, ARROWDOWN, ARROWLEFT, ARROWUP } from '../ducks/direction'
import { gameOver, KEYR } from '../ducks/general'
import { FASTER, faster } from '../ducks/interval'
import { move, MOVE } from '../ducks/position'
import { RUN } from '../ducks/run'
import { INCREASE } from '../ducks/size'

let objInteral
const moveMdl = ({ dispatch, getState }) => next => action => {
  next(action)
  const state1 = getState()
  const { interval } = state1
  if (action.type === RUN) {
    objInteral = setInterval(() => {
      const state = getState()
      const { general, size, direction } = state

      if (!general.pause && !general.gameover) {
        const payload = {
          size,
          direction
        }
        dispatch(move(payload))
      }
    }, interval)
  }
}

const fasterMdl = ({ dispatch, getState }) => next => action => {
  next(action)
  const state1 = getState()
  const { interval } = state1
  if (action.type === FASTER) {
    clearInterval(objInteral)
    dispatch({
      type: RUN
    })
  }
}

const restart = ({ dispatch, getState }) => next => action => {
  next(action)
  if (action.type === KEYR) {
    clearInterval(objInteral)
    dispatch({
      type: RUN
    })
  }
}

const collision = ({ dispatch, getState }) => next => action => {
  next(action)
  if (action.type === MOVE) {
    const state = getState()
    const [areaX, areaY] = area
    const { position } = state
    const [x, y] = position[position.length - 1]
    if (x < 0 || y < 0 || x > areaX - pixelSize || y > areaY - pixelSize) {
      dispatch(gameOver())
    }
  }
}

const selfCollision = ({ dispatch, getState }) => next => action => {
  next(action)
  if (action.type === MOVE) {
    const state = getState()
    const { position } = state
    const last = position.length - 1
    const [x, y] = position[last]

    let i = 0
    for (; i < last - 1; i++) {
      const [a, b] = position[i]
      if (x === a && y === b) {
        dispatch(gameOver())
      }
    }
  }
}

const eat = ({ dispatch, getState }) => next => action => {
  next(action)
  if (action.type === MOVE) {
    const state = getState()
    const [areaX, areaY] = area
    const { food: foodCords, position } = state
    const [x, y] = position[position.length - 1]
    const [foodX, foodY] = foodCords

    if (x === foodX && y === foodY) {
      dispatch({
        type: INCREASE
      })
      dispatch(faster())
      dispatch(
        changeFoodCords([
          randomIntFromInterval(0, areaX - pixelSize),
          randomIntFromInterval(0, areaY - pixelSize)
        ])
      )
    }
  }
}

let block = false
const blockDirection = ({ dispatch, getState }) => next => action => {
  const condition = [ARROWRIGHT, ARROWDOWN, ARROWLEFT, ARROWUP].includes(
    action.type
  )

  if (!condition || !block) {
    next(action)
  }

  if (condition) {
    block = true
  }

  if (action.type === MOVE) {
    block = false
  }
}

const between = function(point, start, end) {
  return point > start && point < end
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default [
  moveMdl,
  collision,
  selfCollision,
  eat,
  fasterMdl,
  restart,
  blockDirection
]
