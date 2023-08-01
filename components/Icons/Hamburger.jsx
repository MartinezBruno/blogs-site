const HamburgerIcon = ({ toggleMenu }) => {
  return (
    <svg
      className='w-6 h-6 text-gray-800 dark:text-white cursor-pointer'
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='12'
      fill='none'
      viewBox='0 0 16 12'
      onClick={toggleMenu}>
      <path
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M1 1h14M1 6h14M1 11h7'
      />
    </svg>
  )
}

export default HamburgerIcon
