import React from 'react'
import s from './header.module.scss'

const Header = () => {
  return (
    <header className={s.header}>
      <div className="conteiner">
        <h1 className={s.title}>Learn JS</h1>
      </div>
    </header>
  )
}

export default Header