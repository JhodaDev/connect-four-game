import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMarker, setTime, updateBoard } from '../redux/slices/boardReducer'
import { setTurn } from '../redux/slices/playerSlice'

export const useBoard = () => {
  const disptatch = useDispatch()

  const { board, player } = useSelector((state) => state)
  const [left, setLeft] = useState(0)
  const handleActiveColumn = (e) => setLeft(e.target.offsetLeft)
  const [lastIndex, setLastIndex] = useState(0)

  const handleDropDisc = (col) => {
    const defaultImage = player.turn === 1 ? 'yellow' : 'red'
    const newBoard = board.board.map((row) => [...row])
    const isEmpty = newBoard[col].every((row) => row === 0)
    let lastRow = 0
    if (isEmpty) lastRow = 5
    else {
      const row = newBoard[col].findIndex((row) => row === 1 || row === 2)
      lastRow = row - 1
    }
    newBoard[col][lastRow] = player.turn
    disptatch(updateBoard({ newBoard }))
    disptatch(setMarker({ lastRow, col, defaultImage }))
    disptatch(setTurn())
    disptatch(setTime({ time: 15 }))
    setLastIndex(lastRow)
  }

  return { handleActiveColumn, handleDropDisc, marker: board.marker, left, board: board.board, lastIndex }
}
