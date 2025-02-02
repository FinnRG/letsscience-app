import { Link } from 'preact-router/match'
import style from './style.css'

const Header = () => (
  <header className={style.header}>
    <h1>React App</h1>
    <nav>
      <Link activeClassName={style.active} href='/'>Home</Link>
      <Link activeClassName={style.active} href='/profile'>Me</Link>
      <Link activeClassName={style.active} href='/quiz'>Quiz</Link>
    </nav>
  </header>
)

export default Header
