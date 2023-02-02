import React from 'react'
import { Container } from '../components/Container'
import { Layout } from '../layout/Layout'
import iconcheck from '../assets/icon-check.svg'
import { Link } from 'react-router-dom'

export const Rules = () => {
  return (
    <Layout className='flex justify-center items-center'>
      <Container>
        <div className="bg-white w-full rounded-2xl py-3 px-4 pb-14 shadow-black border-black border-x-[3px] border-t-[3px] relative">
          <h1 className="text-l text-center">RULES</h1>
          <div className="text-left mt-4">
            <h3 className="text-s text-purple font-bold mb-2">OBJECTIVE</h3>
            <p>Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).</p>
          </div>
          <div className="text-left mt-5">
            <h3 className="text-s text-purple font-bold mb-2">HOW TO PLAY</h3>
            <ol className='list-decimal ml-5'>
              <li className='mb-4'>Red goes first in the first game.</li>
              <li className='mb-4'>Players must alternate turns, and only one disc can be dropped in each turn. </li>
              <li className='mb-4'>The game ends when there is a 4-in-a-row or a stalemate.</li>
              <li>The starter of the previous game goes second on the next game.</li>
            </ol>
          </div>
          <Link to='/' className='absolute left-2/4 -translate-x-2/4 -bottom-10'>
            <img src={iconcheck} />
          </Link>
        </div>
      </Container>
    </Layout>
  )
}
