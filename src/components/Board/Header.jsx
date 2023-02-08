import { useDispatch, useSelector } from 'react-redux'
import logo from '../../assets/logo.svg'
import playerone from '../../assets/player-one.svg'
import playertwo from '../../assets/player-two.svg'
import { restartBoard } from '../../redux/slices/boardReducer'
import { InfoPayer } from './InfoPayer'

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
      <div className='flex justify-between gap-x-3 sm:gap-x-8 text-center mt-10'>
        <InfoPayer count={winners.player1} player='Player 1' img={playerone} position='left' />
        <InfoPayer count={winners.player2} player='Player 2' img={playertwo} position='right' />
      </div>
    </>
  )
}
