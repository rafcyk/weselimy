import { useNavigate, useParams } from "react-router-dom";

import { Heading } from "../Heading/Heading";
import { Button } from "../Button/Button";

import styles from "./styles.module.css";

export const Header = ({
  headerBackgroundImage = {},
  mainText = "",
  mainButtonText = "",
  mainButtonHref = "",
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${mainButtonHref}`);
    const scrollElement = document.querySelector(mainButtonHref)?.offsetTop;
    window.scrollTo({
      top: scrollElement - 100,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={styles.header}
      style={{ backgroundImage: `url(${headerBackgroundImage?.url})` }}
    >
      <Heading className={styles.headerHeading} variant="h1">
        <span style={{ color: "#CBA859", textTransform: "uppercase" }}>
          {mainText}
        </span>
      </Heading>
      <Button onClick={handleClick}>{mainButtonText}</Button>
    </header>
  );
};
