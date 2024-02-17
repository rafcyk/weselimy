import { Heading } from "../Heading/Heading";
import styles from "./memberCardStyles.module.css";

export const AboutUsMemberCard = ({
  name,
  description,
  memberPhoto,
  smallDescription,
  id,
}) => {
  return (
    <div className={`${styles.memberCardWrapper}`}>
      <div className={styles.memberCardContent}>
        <div className={styles.memberCardImageWrapper}>
          <img
            className={styles.memberCardImage}
            src={memberPhoto?.url}
            alt={memberPhoto?.alt}
          />
        </div>
      </div>
      <div className={styles.memberCardContent}>
        <Heading variant="h2" className={styles.memberCardHeading}>
          {name}
        </Heading>
        <div className={styles.memberCardDescription}>{description}</div>
        <div className={styles.memberCardDescription}>{smallDescription}</div>
      </div>
    </div>
  );
};
