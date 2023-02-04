import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  turn: 1,
  winners: {
    player1: 0,
    player2: 0
  }
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setTurn: (state) => {
      state.turn = state.turn === 1 ? 2 : 1
    }
  }
})

export const { setTurn } = playerSlice.actions
export default playerSlice.reducer
