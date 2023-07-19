import { Link } from 'react-router-dom'


import './Nav.css'

const Nav = () => {
  return (
    <>
      <nav className='nav'>
        <div className='logo'>
          <Link
            className='link'
            to={'/'}
          >
            <div className="img">
            <img src="./orzeł.png" alt="" />
            </div>
            <h1>Wybory 2023</h1>
          </Link>
        </div>

        <ul className='wrapper'>
          <Link
            className='link'
            to={'/'}
          >
           Panel Głosowania
          </Link>
          
        </ul>
      </nav>
    </>
  )
}

export default Nav
