import { Container } from '../components/Container'
import { Layout } from '../layout/Layout'
import logo from '../assets/logo.svg'
import playerone from '../assets/player-one.svg'
import playertwo from '../assets/player-two.svg'
import { BoardSmallWhite } from '../components/BoardSmallWhite'
import { BoardSmallBlack } from '../components/BoardSmallBlack'

export const Game = () => {
  return (
    <Layout className="py-10">
      <Container>
        <header className="flex justify-between items-center gap-x-3">
          <button className="bg-dark-purple text-xs text-white px-7 py-3 rounded-3xl">MENU</button>
          <div className="w-12">
            <img className="w-full" src={logo} alt="logo" />
          </div>
          <button className="bg-dark-purple text-xs text-white px-7 py-3 rounded-3xl">RESTART</button>
        </header>
        <div className="flex justify-between text-center mt-10">
          <div className="bg-white shadow-black px-10 rounded-2xl border-black border-x-2 border-t-2 py-3 relative">
            <img className="absolute -left-6 top-2/4 -translate-y-2/4 w-14" src={playerone} alt="player-one" />
            <h3 className="text-xs font-bold">PLAYER 1</h3>
            <strong className="text-[32px]">12</strong>
          </div>
          <div className="bg-white shadow-black px-10 rounded-2xl border-black border-x-2 border-t-2 py-3 relative">
            <img className="absolute w-14 -right-6 top-2/4 -translate-y-2/4" src={playertwo} alt="player-two" />
            <h3 className="text-xs font-bold">PLAYER 2</h3>
            <strong className="text-[32px]">23</strong>
          </div>
        </div>
        <div className="mt-12">
          <div className="relative">
            <div className='relative z-50'>
              <BoardSmallWhite />
            </div>
            <div className="absolute top-[-1px]">
              <BoardSmallBlack />
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
