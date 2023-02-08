import { memo, useState } from 'react'
import { motion } from 'framer-motion'
import counterYellowSmall from '../assets/counter-yellow-small.svg'
import counterRedSmall from '../assets/counter-red-small.svg'
import counterYellowLarge from '../assets/counter-yellow-large.svg'
import counterRedLarge from '../assets/counter-red-large.svg'
import { useWidth } from '../hooks/useWidth'

const coors = [8, 52, 97, 141, 186, 230, 275]
const coorsLarge = [6, 60, 113, 167, 220, 273, 326]
const coorsLarge2 = [8, 70, 132, 195, 257, 319, 382]

export const CounterSmall = memo(function CounterSmall({ row, lastIndex, defaultImage }) {
  const width = useWidth()
  const [coords] = useState({
    x: width < 640 ? coors[row] : coorsLarge[row],
    y: {
      xs: lastIndex * 44 + 12,
      sm: lastIndex * 53 + 2,
      md: lastIndex * 66 + 2
    }
  })

  const getCoors = () => {
    if (width < 640) {
      return {
        x: coors[row],
        y: lastIndex * 44 + 12 - 295,
        top: -301
      }
    }

    if (width >= 640 && width < 768) {
      return {
        x: coorsLarge[row],
        y: lastIndex * 53 + 2 - 345,
        top: -360
      }
    }

    if (width >= 768) {
      return {
        x: coorsLarge2[row],
        y: lastIndex * 62 + 4 - 408,
        top: -420
      }
    }
  }

  const getImage = () => {
    if (width < 640) {
      return defaultImage === 'yellow' ? counterYellowSmall : counterRedSmall
    } else {
      return defaultImage === 'yellow' ? counterYellowLarge : counterRedLarge
    }
  }

  return (
    <motion.div
      animate={{ y: [getCoors().top, getCoors().y] }}
      transition={{ ease: 'backInOut', duration: 0.3 }}
      className='absolute w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full z-[16]'
      style={{ left: getCoors().x }}
    >
      {<img src={getImage()} alt='counter' className='w-full h-full rounded-full' />}
    </motion.div>
  )
})
