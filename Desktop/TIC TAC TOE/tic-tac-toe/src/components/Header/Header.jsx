import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import { DarkModeIcon, HeadWrapper, LightModeIcon } from './Header.styled'
import { ReactComponent as Logo } from '../../assets/svgs/tic-tac-toe.svg'
import { Link } from 'react-router-dom/cjs/react-router-dom'

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <HeadWrapper>
      <Link to='/'>
      <Logo className='logo'/>
      </Link>    
      <span  onClick={() => toggleTheme()}>{theme === "dark" ? <LightModeIcon/> : <DarkModeIcon/>}</span>
    </HeadWrapper>
  )
}

export default Header
