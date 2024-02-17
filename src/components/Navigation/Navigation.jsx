import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

import Logo from "../../assets/logo.png";

export const Navigation = ({ navItems = [], position = "fixed" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavActive, setIsNavActive] = useState(false);

  const handleScrollTo = (path) => {
    const hash = path.slice(1);
    setIsNavActive(false);

    if (window?.innerWidth < 991) {
      setIsOpen(!isOpen);
    }

    if (!!hash) {
      const scrollElement = document?.querySelector(hash)?.offsetTop;
      window.scrollTo({
        top: scrollElement - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`${styles.nav} ${isNavActive ? styles.activeNav : ""}`}
      style={{ position: position }}
      onMouseEnter={() => setIsNavActive(true)}
      onMouseLeave={() => setIsNavActive(false)}
    >
      <div className={styles.itemsWrapper}>
        <div className="logo">
          <Link to="/">
            <img className={`${styles.logo}`} src={Logo} alt="Weselimy.pl" />
          </Link>
        </div>
        <div
          className={`${styles.mobileMenuIcon}`}
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
            setIsNavActive(false);
          }}
        >
          <span className="material-symbols-rounded">menu</span>
        </div>
        <div className={`${styles.navigationItems} ${isOpen && styles.active}`}>
          {navItems.map(({ name, navSlug, icon, showBorder }) => (
            <Link
              to={`${navSlug}`}
              className={`${styles.navigationItem} ${
                showBorder && styles.showBorder
              }`}
              key={`${navSlug}-${name}`}
              onClick={() => handleScrollTo("/" + navSlug)}
            >
              <span>{name}</span>
              {!!icon ? (
                <span className="material-symbols-rounded">{icon}</span>
              ) : null}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
