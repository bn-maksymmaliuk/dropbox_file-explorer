import { FC, useState, useEffect } from "react";
import classNames from "classnames";
import style from './Sidebar.module.scss';
import { SidebarNavLink } from '../SidebarNavLink';

export const Sidebar: FC = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowSidebar(window.innerWidth >= 590);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sidebarClasses = classNames(style.navigation, {
    [style.hidden]: !showSidebar,
  });

  return (
    <nav className={sidebarClasses}>
      <ul className={style.navigation__list}>
        {/* <li className={style.navigation__item}>
          <SidebarNavLink to="/" title="Home Page" />
        </li> */}

        <li className={style.navigation__item}>
          <SidebarNavLink to="all" title="All Files" />
        </li>

        <li className={style.navigation__item}>
          <SidebarNavLink to="deleted" title="Deleted Files" />
        </li>

        <li className={style.navigation__item}>
          <SidebarNavLink to="recent" title="Recent Files" />
        </li>
      </ul>
    </nav>
  );
};
