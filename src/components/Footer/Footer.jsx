import { Link } from "react-router-dom";
import styles from "./styles.module.css";

import LogoFb from "../../assets/logoFb.png";
import LogoInsta from "../../assets/logoInsta.png";
import LogoWeseleZKlasa from "../../assets/logoWeseleZKlasa.png";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <Link to="tel:505676393" className={styles.contact}>
          <span className={`material-symbols-rounded ${styles.icon}`}>
            call
          </span>
          <span>505-676-393</span>
        </Link>
        <Link to="mailto:kontakt@weselimy.pl​" className={styles.contact}>
          <span className={`material-symbols-rounded ${styles.icon}`}>
            mail
          </span>
          <span>kontakt@weselimy.pl​</span>
        </Link>
        <Link to={`/polityka-prywatnosci`} className={styles.contact}>
          <span className={`material-symbols-rounded ${styles.icon}`}>
            description
          </span>
          <span>Polityka prywatności​</span>
        </Link>
      </div>
      <div className={styles.footerRight}>
        <Link
          className={styles.icon}
          to="https://www.facebook.com/djweselimy"
          target="_blank"
        >
          <img src={LogoFb} alt="Facebook" />
        </Link>
        <Link
          className={styles.icon}
          to="https://www.instagram.com/mj.events.official"
          target="_blank"
        >
          <img src={LogoInsta} alt="Instagram" />
        </Link>
        <Link
          className={styles.icon}
          to="https://www.weselezklasa.pl/ogloszenia-weselne/weselimy-wodzirej-i-dj,55965"
          target="_blank"
        >
          <img src={LogoWeseleZKlasa} alt="Wesele z klasą" />
        </Link>
      </div>
    </footer>
  );
};
