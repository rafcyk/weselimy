import styles from "./singleOpinionStyles.module.css";
import LogoFb from "../../assets/logoFb.png";

export const SingleOpinion = ({ createdTime, message, reviewer }) => {
  const shortCreatedTime = createdTime.slice(0, 10);

  return (
    <div className={styles.singleOpinionWrapper}>
      {!!reviewer ? (
        <div className={styles.singleOpinionReviewer}>
          <span className={`material-symbols-rounded`}>account_circle</span>{" "}
          Rafał Dobrowolski
        </div>
      ) : null}
      <p className={styles.singleOpinionDescription}>{message}</p>
      <div className={styles.singleOpinionFbIconWrapper}>
        <a href="https://www.facebook.com/djweselimy/reviews" target="_blank">
        <img
          src={LogoFb}
          alt="Facebook"
          className={styles.singleOpinionFbImage}
        />
        </a>
      </div>
    </div>
  );
};
