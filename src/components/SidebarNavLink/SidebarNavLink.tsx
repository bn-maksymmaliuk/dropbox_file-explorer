import { FC } from "react";
import { NavLink } from "react-router-dom";
import style from './SidebarNavLink.module.scss'
import classnames from 'classnames'
interface Props {
  to: string
  title: string;
}

export const SidebarNavLink: FC<Props> = ({ to, title }) => {
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => classnames(
        style.link, 
        { [style.active]: isActive }
      )}
    >
      {title}
    </NavLink>
  )
}