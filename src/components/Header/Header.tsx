import { FC } from 'react';
import style from './Header.module.scss';
import logo from '../../assets/Dropbox_icon.png';
import { Link } from 'react-router-dom';

export const Header: FC = () => {
  return (
    <header className={style.header}>
      <Link className={style.header__logoContainer} to={'https://www.dropbox.com/home'}>
        <img 
          src={logo} 
          className={style.logoContainer__image} 
          width="100%" 
          height="100%" 
        />
        </Link>
        <span className={style.header__title}>
          File explorer
        </span>
    </header>
  )
}