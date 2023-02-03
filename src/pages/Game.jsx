import { Container } from '../components/Container'
import { Layout } from '../layout/Layout'
import logo from '../assets/logo.svg'
import playerone from '../assets/player-one.svg'
import playertwo from '../assets/player-two.svg'
import { BoardSmallWhite } from '../components/BoardSmallWhite'
import { BoardSmallBlack } from '../components/BoardSmallBlack'
import markeryellow from '../assets/marker-yellow.svg'
import { useState } from 'react'

export const Game = () => {
  const [gridBoard, setGridBoard] = useState(Array(7).fill(Array(6).fill(0)))
  const [left, setLeft] = useState(0)

  const handleActiveColumn = (e) => setLeft(e.target.offsetLeft)

  const handleDropDisc = (col, row) => {

  }

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
        <div className="mt-24 relative">
          {left !== 0 && (
            <div className="absolute -top-10 transition-all" style={{ left }}>
              <img src={markeryellow} alt="marker-yellow" />
            </div>
          )}
          <div className="absolute max-w-xs w-full">
            <div className="relative z-50">
              <BoardSmallWhite />
            </div>
            <div className="absolute top-[-1px] w-full">
              <BoardSmallBlack />
            </div>
          </div>

          <div className="grid grid-cols-7 relative top-3 z-50 opacity-0">
            {gridBoard.map((col, indexCol) => (
              <div key={indexCol} className="flex flex-col items-center gap-2">
                {col.map((_, indexRow) => (
                  <div key={indexRow} onMouseEnter={handleActiveColumn} onClick={(e) => handleDropDisc(indexCol, indexRow, e)} className="w-9 h-9 bg-white rounded-full cursor-pointer"></div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Layout>
  )
}
