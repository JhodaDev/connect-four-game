import React, { useEffect } from 'react'

// components
import { CounterSmall } from '../CounterSmall'
import { BoardSmallWhite } from './BoardSmallWhite'
import { BoardSmallBlack } from './BoardSmallBlack'

// hooks
import { useWidth } from '../../hooks/useWidth'
import { useBoard } from '../../hooks/useBoard'
import { useSelector, useDispatch } from 'react-redux'
import { setWinners } from '../../redux/slices/playerSlice'

// images
import markeryellow from '../../assets/marker-yellow.svg'
import markerred from '../../assets/marker-red.svg'
import { useWinner } from '../../hooks/useWinner'
import { BoardWhiteLarge } from './BoardWhiteLarge'
import { BoardBlackLarge } from './BoardBlackLarge'
import { Container } from '../Container'

export const Board = () => {
  const { board, left, marker, handleActiveColumn, handleDropDisc } = useBoard()
  const { turn } = useSelector((state) => state.player)
  const { checkWinner } = useWinner()
  const width = useWidth()
  const dispatch = useDispatch()

  useEffect(() => {
    const winner = checkWinner(board)
    if (winner) {
      console.log(winner)
      dispatch(setWinners(winner === 1 ? 'player1' : 'player2'))
    }
  }, [board])

  return (
    <div className={`relative ${width >= 500 ? 'mt-20' : 'mt-12'}`}>
      {left !== 0 && width >= 500 && (
        <div className='absolute -top-10 transition-all' style={{ left }}>
          <img src={turn === 1 ? markeryellow : markerred} alt='marker-yellow' />
        </div>
      )}
      <Container>
        <div className='absolute w-full z-20'>
          <div className='relative z-50'>{width < 640 ? <BoardSmallWhite /> : <BoardWhiteLarge />}</div>
          {marker?.map(({ lastRow, col, defaultImage }, index) => (
            <React.Fragment key={index}>
              <CounterSmall lastIndex={lastRow} row={col} defaultImage={defaultImage} />
            </React.Fragment>
          ))}
          <div className='absolute top-[-1px] w-full z-10'>{width < 640 ? <BoardSmallBlack /> : <BoardBlackLarge />}</div>
        </div>
      </Container>

      <div className='grid grid-cols-7 relative top-3 z-50 opacity-0'>
        {board?.map((col, indexCol) => (
          <div key={indexCol} className='flex flex-col items-center gap-2 sm:gap-[4.6px]'>
            {col.map((_, indexRow) => (
              <div
                key={indexRow}
                onMouseEnter={handleActiveColumn}
                onClick={(e) => handleDropDisc(indexCol, indexRow, e)}
                className='w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white rounded-full cursor-pointer'
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
