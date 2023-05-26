import { FC } from "react"
import { NavLink } from "react-router-dom"
import style from './Sidebar.module.scss'

export const Sidebar: FC = () => {
  return (
    <nav className={style.navigation}>
      <ul className={style.navigation__list}>
        <li className={style.navigation__item}>
          <NavLink to={"/"}>
            Home Page
          </NavLink>
        </li>

        <li className={style.navigation__item}>
          <NavLink to={"all-files"}>
            All files
          </NavLink>
        </li>

        <li className={style.navigation__item}>
          <NavLink to={"deleted-files"}>
            Deleted files
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}