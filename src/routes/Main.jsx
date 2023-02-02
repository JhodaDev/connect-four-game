import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Game } from '../pages/Game'
import { Rules } from '../pages/Rules'
import { StartGame } from '../pages/StartGame'

export const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StartGame />} />
        <Route path='/rules' element={<Rules />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </BrowserRouter>
  )
}
