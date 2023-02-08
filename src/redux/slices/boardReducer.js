import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  board: Array(7).fill(Array(6).fill(0)),
  turn: null,
  marker: [],
  time: 15
}

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    updateBoard: (state, action) => {
      const { newBoard } = action.payload
      state.board = newBoard
    },
    restartBoard: (state) => {
      state.board = Array(7).fill(Array(6).fill(0))
      state.marker = []
      state.turn = null
    },
    setMarker: (state, action) => {
      const { lastRow, col, defaultImage } = action.payload
      state.marker.push({ lastRow, col, defaultImage })
    },
    setTime: (state, action) => {
      const { time } = action.payload
      state.time = time
    }
  }
})

export const { updateBoard, restartBoard, setMarker, setTime } = boardSlice.actions
export default boardSlice.reducer
