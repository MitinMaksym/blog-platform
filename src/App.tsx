import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Suspense } from 'react'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'

import './styles/index.scss'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'

export const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to='/'>Main</Link>
      <Link to='/about'>About</Link>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path='/' element={<MainPageAsync />} />
          <Route path='/about' element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}
