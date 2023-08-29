import { useEffect, useCallback, useState, useRef } from 'react'
import Link from 'next/link'
import app from '../../app.config'
import { useRouter } from 'next/router'

import Logo from '../Common/Logo'
import { motion } from 'framer-motion'

const NavBar = () => {
  const router = useRouter()
  const [showMenu, setShowMenu] = useState(false)

  let activeMenu = ''
  if (router.query.slug) {
    activeMenu = '/' + router.query.slug
  } else {
    activeMenu = router.pathname
  }

  const links = [
    {
      id: 0,
      name: 'Home',
      to: app.path || '/',
      show: true
    },
    {
      id: 1,
      name: 'admin',
      to: '/newsletter',
      show:  true
    }
  ]
  return (
    <motion.div className='flex'>
      {/* Desktop Menu */}
      <ul className='hidden md:flex md:gap-1'>
        {links.map(
          (link) =>
            link.show && (
              <Link passHref href={link.to} key={link.id} scroll={false}>
                <li
                  className={`${activeMenu === link.to ? 'bg-gray-200 dark:bg-neutral-800' : ''
                    } hover:bg-gray-200 dark:hover:bg-neutral-800 cursor-pointer rounded-lg block py-1 px-2 nav`}
                >
                  <div className='font-light'>
                    
                    <span className='inline-block m-1'>{link.name}</span>
                  </div>
                </li>
              </Link>

            )
        )}
      </ul>

      {/*<div className='nav-func-btn block'>
        <ThemeSwitcher />
        <LangSwitcher />
                  </div>*/}

      {/* Mobile Phone Menu */}
      <div className='md:hidden mr-2 block '>
        <button
          type='button' aria-label='Menu'
          onClick={() => setShowMenu((showMenu) => !showMenu)}
          className='hover:bg-gray-200 dark:hover:bg-neutral-800 cursor-pointer rounded-lg block p-2 -mr-3 md:pb-3'
        >
          Menu
        </button>
        {showMenu && (
          <div className='z-1 absolute right-0 w-40 mr-4 mt-2 bg-white dark:bg-neutral-800 divide-y divide-gray-200 dark:divide-gray-600 rounded-md shadow-lg outline-none'>
            <div className='py-1'>
              {links.map(
                (link) =>
                  link.show && (
                    <Link passHref key={link.id} href={link.to} scroll={false}>
                      <button
                        onClick={() => setShowMenu((showMenu) => !showMenu)}
                        className='text-left hover:bg-gray-100 dark:hover:bg-gray-600 font-light block justify-between w-full px-4 py-2 leading-5'
                      >
                        {link.icon}
                        <span className='m-1'>{link.name}</span>
                      </button>
                    </Link>
                  )
              )}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

const Header = ({ navBarTitle, fullWidth }) => {
  const [showTitle, setShowTitle] = useState(true)
  const useSticky = !app.autoCollapsedNavBar
  const navRef = useRef(/** @type {HTMLDivElement} */ undefined)
  const sentinelRef = useRef(/** @type {HTMLDivElement} */ undefined)
  const handler = useCallback(([entry]) => {
    if (useSticky && navRef.current) {
      navRef.current?.classList.toggle('sticky-nav-full', !entry.isIntersecting)
    } else {
      navRef.current?.classList.add('remove-sticky')
    }
  }, [useSticky])

  useEffect(() => {
    const sentinelEl = sentinelRef.current
    const observer = new window.IntersectionObserver(handler)
    observer.observe(sentinelEl)

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 400) {
        setShowTitle(true)
      } else {
        setShowTitle(false)
      }
    })
    return () => {
      sentinelEl && observer.unobserve(sentinelEl)
    }
  }, [handler, sentinelRef])
  return (
    <>
      <div className='observer-element h-4 md:h-10' ref={sentinelRef}></div>
      <div
        className={`sticky-nav m-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-12 py-8 bg-opacity-60 ${!fullWidth ? 'max-w-3xl px-4' : 'px-4 md:px-24'
          }`}
        id='sticky-nav'
        ref={navRef}
      >
        <div className='flex items-center'>
          <Link passHref href='/' scroll={true} aria-label={app.title}>
            <motion.div>
              <Logo className='h-6 hover:text-blue-500 dark:hover:text-blue-500 fill-current' />
            </motion.div>
          </Link>
          {navBarTitle ? (
            <p
              className={`ml-2 font-medium ${!showTitle ? 'show' : 'hidden xl:block'
                }`}
            >
              {navBarTitle}
            </p>
          ) : (
            <p
              className={`ml-2 font-medium ${!showTitle ? 'hidden' : 'hidden xl:block'
                }`}
            >
              {app.title},{' '}
              <span className='font-normal'>{app.desc}</span>
            </p>
          )}
        </div>
        <NavBar />
      </div>
    </>
  )
}

export default Header