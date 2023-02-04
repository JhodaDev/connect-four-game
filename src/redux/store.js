import boardSlice from './slices/boardReducer'
import { configureStore } from '@reduxjs/toolkit'
import playerSlice from './slices/playerSlice'

const reducer = {
  board: boardSlice,
  player: playerSlice
}

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production'
})
