import Close from '@/components/Icons/Close'
import Link from 'next/link'

const MobileNav = ({ isActive, handleClose }) => {
  return (
    <div
      id='mobile-nav'
      className={`
      absolute top-0 left-0 transition-all duration-500 shadow-2xl shadow-black
        ${
          isActive
            ? 'p-4 w-1/3 h-screen bg-white z-10 translate-x-0'
            : '-translate-x-96 h-screen'
        }
      `}>
      <Close handleClose={handleClose} />
      <div className='flex flex-col mt-5 w-full relative'>
        <Link
          href={'#about-us'}
          className='nav-link'>
          About us
        </Link>
        <Link
          href={'#support'}
          className='nav-link'>
          Support
        </Link>
        <Link
          href={'/blogs'}
          className='nav-link'>
          Blog
        </Link>
      </div>
    </div>
  )
}

export default MobileNav
