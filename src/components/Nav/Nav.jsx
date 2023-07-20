import { useState } from 'react'
import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import './Nav.css'

const Nav = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <nav className='nav'>
      <div className='logo'>
        <Link
          className='link link-logo'
          to={'/'}
        >
          <div className='img'>
            <img
              src='./orzeł.png'
              alt=''
            />
          </div>
          <h1>Wybory 2023</h1>
        </Link>
      </div>
      <ul className={!isOpen ? 'wrapper' : 'wrapper navbar-none'}>
        <Link
          className='link link-text'
          to={'/'}
        >
          Panel Głosowania
        </Link>

        <Link
          className='link link-text'
          to={'/wyniki'}
        >
          Wyniki
        </Link>
      </ul>
      <div className='hamburger'>
        <Hamburger
          size={30}
          duration={0.3}
          distance='md'
          color={isOpen ? '#ff3f34' : '#1e272e'}
          easing='ease-in'
          rounded
          label='Show menu'
          onToggle={(toggled) => {
            setOpen(true)
            if (toggled) {
              // open a menu
            } else {
              setOpen(false)
            }
          }}
        />
      </div>
    </nav>
  )
}

export default Nav
