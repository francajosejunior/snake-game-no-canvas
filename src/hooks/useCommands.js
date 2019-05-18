import { useEffect } from 'react'

const useCommands = dispatch => {
  useEffect(() => {
    const keydown = event => {
      dispatch({ type: 'KEYCODE/' + event.code })
    }
    window.addEventListener('keydown', keydown)
    return () => {
      window.removeEventListener('keydown', keydown)
    }
  }, [dispatch])
}
export default useCommands
