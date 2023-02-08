import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTime } from '../redux/slices/boardReducer'
import { setTurn } from '../redux/slices/playerSlice'

export const useCounter = () => {
  const { board: { time }, player } = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    if (player.currentWinner) return
    if (time >= 0) {
      const interval = setInterval(() => {
        dispatch(setTime({ time: time - 1 }))
      }, 1000)
      return () => clearInterval(interval)
    } else {
      dispatch(setTime({ time: 15 }))
      dispatch(setTurn())
    }
  }, [time])

  return time
}
