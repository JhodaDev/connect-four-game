import { memo, useState } from 'react'
import { motion } from 'framer-motion'
import counterYellowSmall from '../assets/counter-yellow-small.svg'
import counterRedSmall from '../assets/counter-red-small.svg'

const coors = [8, 52, 97, 141, 186, 230, 275]

export const CounterSmall = memo(function CounterSmall({ row, lastIndex, defaultImage }) {
  const [coords] = useState({ x: coors[row], y: lastIndex * 44 + 12 })

  return (
    <motion.div
      animate={{ y: [-301, coords.y - 295] }}
      transition={{ ease: 'backInOut', duration: 0.3 }}
      className='absolute w-9 h-9 rounded-full z-[16]'
      style={{ left: coords.x }}
    >
      {<img src={defaultImage === 'yellow' ? counterYellowSmall : counterRedSmall} alt='counter' className='w-full h-full rounded-full' />}
    </motion.div>
  )
})
