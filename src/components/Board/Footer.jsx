import { useSelector } from 'react-redux'
import { useCounter } from '../../hooks/useCounter'
import turnBackgroundYellow from '../../assets/turn-background-yellow.svg'
import turnBackgroundRed from '../../assets/turn-background-red.svg'

export const Footer = () => {
  const { turn } = useSelector((state) => state.player)
  const time = useCounter()

  const getBackground = () => {
    if (turn === 1) return turnBackgroundYellow
    else return turnBackgroundRed
  }

  return (
    <div className='h-full w-screen relative before:absolute before:left-0 before:top-9 before:w-full before:bg-dark-purple before:h-full before:rounded-tl-[80px] before:rounded-tr-[80px]'>
      <div
        className='h-48 w-full bg-no-repeat bg-center relative z-50 top-3 flex flex-col justify-center items-center pt-6'
        style={{ backgroundImage: `url(${getBackground()})` }}
      >
        <span className='font-bold text-xs'>PLAYER {turn}’S TURN</span>
        <strong className='text-l'>{time}s</strong>
      </div>
    </div>
  )
}
