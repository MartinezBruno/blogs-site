'use client'

import { getProviders, signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Hamburger from './Icons/Hamburger'
import MobileNav from './MobileNav'

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('navbar').style.backdropFilter = 'blur(8px)'
  } else {
    document.getElementById('navbar').style.backdropFilter = 'blur(0px)'
  }
}

const Nav = () => {
  const { data: session } = useSession()

  const [providers, setProviders] = useState(null)
  const [toggleDropdown, setToggleDropdown] = useState(false)
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false)

  const handleToggleMobileMenu = () => {
    setToggleMobileMenu(prev => !prev)
  }

  useEffect(() => {
    const setProvidersData = async () => {
      const providers = await getProviders()
      setProviders(providers)
    }
    setProvidersData()
    window.onscroll = function () {
      scrollFunction()
    }
  }, [])

  return (
    <nav
      className='flex justify-between w-full transition-all fixed top-0 z-50'
      id='navbar'>
      {/* Desktop nav */}
      <div className='sm:flex w-full justify-between items-center hidden c-container'>
        <Link href='/'>
          <span className='text-2xl text-yellow font-bold font-pt_serif'>InstaBlogs</span>
        </Link>
        <div className='flex justify-end items-center w w-full gap-10 relative'>
          <Link
            href='#about-us'
            className='text-white font-semibold'>
            About Us
          </Link>
          <Link
            href='#support'
            className='text-white font-semibold'>
            Support
          </Link>
          <Link
            href='/blog'
            className='text-white font-semibold'>
            Blog
          </Link>
          {session?.user ? (
            <div className=''>
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className='rounded-full'
                alt='profile icon'
                onClick={() => setToggleDropdown(prev => !prev)}
              />
              {toggleDropdown && (
                <div className='absolute right-4 top-5 border border-gray-500 bg-white p-3 flex flex-col'>
                  <Link
                    href='/profile'
                    className='dropdown_link'
                    onClick={() => setToggleDropdown(false)}>
                    My profile
                  </Link>
                  <Link
                    href='/create-blog'
                    className='dropdown_link'
                    onClick={() => setToggleDropdown(false)}>
                    Create Blog
                  </Link>
                  <button
                    type='button'
                    onClick={() => {
                      setToggleDropdown(false)
                      signOut()
                    }}
                    className='mt-5 text-start'>
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              {providers &&
                Object.values(providers).map(provider => (
                  <button
                    type='button'
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className='text-base font-bold leading-[150%] text-white bg-[rgba(255,255,255,0.15)] rounded-[5px] py-2 px-3 hover:bg-yellow transition-[background-color] ease-in-out'>
                    Get access
                  </button>
                ))}
            </>
          )}
        </div>
      </div>

      {/* Mobile Nav */}
      <div className='sm:hidden w-full flex justify-between relative p-3'>
        <div className='basis-[108px] my-auto'>
          <Hamburger toggleMenu={handleToggleMobileMenu} />
        </div>
        <Link href='/'>
          <span className='text-2xl text-yellow font-bold font-pt_serif'>InstaBlogs</span>
        </Link>
        {session?.user ? (
          <div className='flex max-h-[37px]'>
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className='rounded-full'
              alt='profile icon'
              onClick={() => setToggleDropdown(prev => !prev)}
            />
            {toggleDropdown && (
              <div className='absolute right-4 top-5 border border-gray-500 bg-white p-3 flex flex-col'>
                <Link
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}>
                  My profile
                </Link>
                <Link
                  href='/create-blog'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}>
                  Create Blog
                </Link>
                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false)
                    signOut()
                  }}
                  className='mt-5 text-start'>
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map(provider => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className='text-base font-bold leading-[150%] text-white bg-[rgba(255,255,255,0.15)] rounded-[5px] py-2 px-3 hover:bg-yellow transition-[background-color] ease-in-out'>
                  Get access
                </button>
              ))}
          </>
        )}
        <MobileNav
          isActive={toggleMobileMenu}
          handleClose={handleToggleMobileMenu}
        />
      </div>
    </nav>
  )
}

export default Nav
