import { Link } from 'react-router-dom'

const typesButtons = {
  primary: 'bg-pink text-white',
  secondary: 'bg-yellow text-white',
  tertiary: 'bg-white text-black',
  global: 'w-full px-6 shadow-black py-4 rounded-2xl uppercase font-bold text-s relative border-black border-x-[3px] border-t-[3px]'
}

export const Button = ({ children, type, color, to = '', className = '' }) => {
  return (
    <>
      {type === 'link' ? (
        <Link to={to} className={`${typesButtons.global} ${typesButtons[color]} ${className}`}>
          {children}
        </Link>
      ) : (
        <button to={to} className={`${typesButtons.global} ${typesButtons[color]} ${className}`}>
          {children}
        </button>
      )}
    </>
  )
}
