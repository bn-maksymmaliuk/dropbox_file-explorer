import { FC } from "react"
import { NavLink } from "react-router-dom"
import style from './Sidebar.module.scss'

export const Sidebar: FC = () => {
  return (
    <article className={style.sidebar}>
      <NavLink to={"all-files"} className={style.sidebar__title}>All files</NavLink>

      <NavLink to={"deleted-files"} className={style.sidebar__title} >Deleted files</NavLink>
    </article>
  )
}