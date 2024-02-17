import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { Heading } from "../../components/Heading/Heading";
import { Button } from "../../components/Button/Button";

import Logo from "../../assets/logo.png";
import styles from "./styles.module.css";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
    <Helmet>
      <title>Nie znaleziono strony</title>
    </Helmet>
    <div className={`${styles.notFoundWrapper}`}>
      <img src={Logo} alt="Weselimy.pl" style={{ maxWidth: "200px" }} />
      <Heading variant={"h3"} className={`${styles.heading}`}>
        Ops... Wygląda na to że taka strona nie istnieje{" "}
        <span className="material-symbols-rounded">sentiment_dissatisfied</span>
      </Heading>
      <Button onClick={() => navigate("/")}>Wróć na stronę główną</Button>
    </div>
    </>
  );
};

export default NotFoundPage;
