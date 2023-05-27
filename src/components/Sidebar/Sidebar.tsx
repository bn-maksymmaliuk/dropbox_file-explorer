import { FC } from "react"
import style from './Sidebar.module.scss'
import { SidebarNavLink } from '../SidebarNavLink';

export const Sidebar: FC = () => {
  return (
    <nav className={style.navigation}>
      <ul className={style.navigation__list}>
        <li className={style.navigation__item}>
          <SidebarNavLink to='/' title='Home Page' />
        </li>

        <li className={style.navigation__item}>
          <SidebarNavLink to='all-files' title='All Files' />
        </li>

        <li className={style.navigation__item}>
          <SidebarNavLink to='deleted-files' title='Deleted Files' />
        </li>
      </ul>
    </nav>
  )
}