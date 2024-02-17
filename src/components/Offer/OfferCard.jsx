import { Heading } from '../Heading/Heading'
import styles from './offerCardStyles.module.css'

export const OfferCard = ({
  title,
  description,
  photo
}) => {
  return (
    <div className={styles.offerCardWrapper}>
      <div className={styles.offerCardContent}>
        <div className={styles.offerCardImageWrapper}>
          <img
            className={styles.offerCardImage}
            src={photo.url}
            alt={photo.alt}
          />
        </div>
      </div>
      <div className={styles.offerCardContent}>
        <Heading variant='h2' className={styles.offerCardHeading}>{title}</Heading>
        <p
                      className={styles.offerCardDescription}
                      dangerouslySetInnerHTML={{
                        __html: description,
                      }}
                    ></p>
      </div>
    </div>
  )
}