import s from './Navbar.module.scss'

const NavBar: React.FC = () => {
  return (
    <div className={s.navbar}>
      <h1 className={s.logo}>Blog</h1>
    </div>
  )
}

export default NavBar
