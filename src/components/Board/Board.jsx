import React, { useEffect } from 'react'

// components
import { CounterSmall } from '../CounterSmall'
import { BoardSmallWhite } from './BoardSmallWhite'
import { BoardSmallBlack } from './BoardSmallBlack'
// hooks
import { useWidth } from '../../hooks/useWidth'
import { useBoard } from '../../hooks/useBoard'
import { useSelector } from 'react-redux'
// images
import markeryellow from '../../assets/marker-yellow.svg'
import markerred from '../../assets/marker-red.svg'

export const Board = () => {
  const { board, left, marker, handleActiveColumn, handleDropDisc, lastIndex } = useBoard()
  const { turn } = useSelector((state) => state.player)
  const width = useWidth()

  return (
    <div className={` relative ${width >= 500 ? 'mt-20' : 'mt-12'}`}>
      {left !== 0 && width >= 500 && (
        <div className="absolute -top-10 transitiowdn-all" style={{ left }}>
          <img src={turn === 1 ? markeryellow : markerred} alt="marker-yellow" />
        </div>
      )}
      <div className="absolute max-w-xs w-full z-20">
        <div className="relative z-50">
          <BoardSmallWhite />
        </div>
        {marker?.map(({ lastRow, col, defaultImage }, index) => (
          <React.Fragment key={index}>
            <CounterSmall lastIndex={lastRow} row={col} defaultImage={defaultImage} />
          </React.Fragment>
        ))}
        <div className="absolute top-[-1px] w-full z-10">
          <BoardSmallBlack />
        </div>
      </div>

      <div className="grid grid-cols-7 relative top-3 z-50 opacity-0">
        {board?.map((col, indexCol) => (
          <div key={indexCol} className="flex flex-col items-center gap-2">
            {col.map((_, indexRow) => (
              <div
                key={indexRow}
                onMouseEnter={handleActiveColumn}
                onClick={(e) => handleDropDisc(indexCol, indexRow, e)}
                className="w-9 h-9 bg-white rounded-full cursor-pointer"
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
