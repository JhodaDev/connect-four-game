import { useSelector, useDispatch } from 'react-redux'
import { useCounter } from '../../hooks/useCounter'
import turnBackgroundYellow from '../../assets/turn-background-yellow.svg'
import turnBackgroundRed from '../../assets/turn-background-red.svg'
import { resetPlayer } from '../../redux/slices/playerSlice'
import { restartBoard } from '../../redux/slices/boardReducer'

export const Footer = () => {
  const { turn, currentWinner } = useSelector((state) => state.player)
  const time = useCounter()
  const dispatch = useDispatch()
  const getBackground = () => {
    if (turn === 1) return turnBackgroundYellow
    else return turnBackgroundRed
  }

  const resetWinner = () => {
    dispatch(resetPlayer())
    dispatch(restartBoard())
  }

  return (
    <div
      className={`h-full w-screen relative before:absolute before:left-0 before:top-9 before:w-full  before:h-full before:rounded-tl-[80px] before:rounded-tr-[80px] ${
        currentWinner === null ? 'before:bg-dark-purple' : currentWinner === 'player1' ? 'before:bg-yellow' : 'before:bg-pink'
      } }`}
    >
      {currentWinner === null ? (
        <div
          className='h-48 w-full bg-no-repeat bg-center relative z-50 top-3 flex flex-col justify-center items-center pt-6'
          style={{ backgroundImage: `url(${getBackground()})` }}
        >
          <span className='font-bold text-xs'>PLAYER {turn}’S TURN</span>
          <strong className='text-l'>{time}s</strong>
        </div>
      ) : (
        <div className='bg-white absolute left-2/4 -translate-x-2/4 z-50 px-12 py-2 text-center shadow-black rounded-xl top-6 border-black border-x-2 border-t-2'>
          <span className='font-bold text-xs'>PLAYER {currentWinner === 'player1' ? 1 : 2}</span>
          <h3 className='text-l'>WINS</h3>
          <button className='bg-dark-purple text-xs px-3 py-2 text-white rounded-3xl' onClick={resetWinner}>
            PLAY AGAIN
          </button>
        </div>
      )}
    </div>
  )
}
