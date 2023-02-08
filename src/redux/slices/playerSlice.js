import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  turn: 1,
  winners: {
    player1: 0,
    player2: 0
  },
  currentWinner: null
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setTurn: (state) => {
      state.turn = state.turn === 1 ? 2 : 1
    },
    setWinners: (state, action) => {
      state.winners[action.payload] += 1
      state.currentWinner = action.payload
    },
    resetPlayer: (state) => {
      state.turn = 1
      state.currentWinner = null
    }
  }
})

export const { setTurn, setWinners, resetPlayer } = playerSlice.actions
export default playerSlice.reducer
