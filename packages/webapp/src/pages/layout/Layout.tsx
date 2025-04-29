import { Outlet, NavLink, Link } from 'react-router-dom';

import github from '../../assets/github.svg';

import styles from './Layout.module.css';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Link to="/" className={styles.headerTitleContainer}>
            <h3 className={styles.headerTitle}>Specter AI | Game Development Assistant</h3>
          </Link>
          <nav>
            <ul className={styles.headerNavList}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}
                >
                  Chat
                </NavLink>
              </li>
              <li className={styles.headerNavLeftMargin}>
                <NavLink
                  to="/qa"
                  className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}
                >
                  Ask a question
                </NavLink>
              </li>
              <li className={styles.headerNavLeftMargin}>
                <a
                  href="https://github.com/your-org/specter"
                  target={'_blank'}
                  title="Github repository link"
                  rel="noreferrer"
                >
                  <img
                    src={github}
                    alt="Github logo"
                    aria-label="Specter Github repository link"
                    width="20px"
                    height="20px"
                    className={styles.githubLogo}
                  />
                </a>
              </li>
            </ul>
          </nav>
          <h4 className={styles.headerRightText}>Specter Backend Services</h4>
        </div>
      </header>

      <Outlet />
    </div>
  );
};

export default Layout;
