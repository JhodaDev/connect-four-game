import { memo } from 'react'
import { motion } from 'framer-motion'

import { useWidth } from '../hooks/useWidth'
import { getCoors } from '../helpers/positions'
import { getImage } from '../helpers/getImages'

export const CounterSmall = memo(function CounterSmall({ row, lastIndex, defaultImage }) {
  const width = useWidth()

  return (
    <motion.div
      animate={{ y: [getCoors(width, row, lastIndex).top, getCoors(width, row, lastIndex).y] }}
      transition={{ ease: 'backInOut', duration: 0.3 }}
      className='absolute w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full z-[16]'
      style={{ left: getCoors(width, row, lastIndex).x }}
    >
      {<img src={getImage(width, defaultImage)} alt='counter' className='w-full h-full rounded-full' />}
    </motion.div>
  )
})
