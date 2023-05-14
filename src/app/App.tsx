import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/Router'

import './styles/index.scss'

export const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to='/'>Main</Link>
      <Link to='/about'>About</Link>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <AppRouter />
    </div>
  )
}
