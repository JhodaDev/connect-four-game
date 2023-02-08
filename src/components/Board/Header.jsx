import { useDispatch, useSelector } from 'react-redux'
import logo from '../../assets/logo.svg'
import playerone from '../../assets/player-one.svg'
import playertwo from '../../assets/player-two.svg'
import { restartBoard } from '../../redux/slices/boardReducer'

export const Header = () => {
  const winners = useSelector((state) => state.player.winners)
  const dispatch = useDispatch()

  const handleRestart = () => {
    dispatch(restartBoard())
  }

  return (
    <>
      <header className='flex justify-between items-center gap-x-3'>
        <button className='bg-dark-purple text-xs text-white px-7 py-3 rounded-3xl'>MENU</button>
        <div className='w-12'>
          <img className='w-full' src={logo} alt='logo' />
        </div>
        <button className='bg-dark-purple text-xs text-white px-7 py-3 rounded-3xl' onClick={handleRestart}>
          RESTART
        </button>
      </header>
      <div className='flex justify-between text-center mt-10'>
        <div className='bg-white shadow-black px-10 rounded-2xl border-black border-x-2 border-t-2 py-3 relative'>
          <img className='absolute -left-6 top-2/4 -translate-y-2/4 w-14' src={playerone} alt='player-one' />
          <h3 className='text-xs font-bold'>PLAYER 1</h3>
          <strong className='text-[32px]'>{winners.player1}</strong>
        </div>
        <div className='bg-white shadow-black px-10 rounded-2xl border-black border-x-2 border-t-2 py-3 relative'>
          <img className='absolute w-14 -right-6 top-2/4 -translate-y-2/4' src={playertwo} alt='player-two' />
          <h3 className='text-xs font-bold'>PLAYER 2</h3>
          <strong className='text-[32px]'>{winners.player2}</strong>
        </div>
      </div>
    </>
  )
}
