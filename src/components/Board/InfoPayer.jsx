const classPosition = {
  left: '-left-6',
  right: '-right-6'
}

export const InfoPayer = ({ count, player, img, position }) => {
  return (
    <div className='bg-white shadow-black px-10 rounded-2xl border-black border-x-2 border-t-2 py-3 md:py-1 relative w-full md:flex items-center md:justify-between'>
      <img className={`absolute w-14 md:w-12 ${classPosition[position]}`} src={img} alt='player-one' />
      <h3 className='text-xs font-bold md:text-s'>{player}</h3>
      <strong className='text-[32px] md:text-l'>{count}</strong>
    </div>
  )
}
