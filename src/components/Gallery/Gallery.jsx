import { useState } from "react";

import { Heading } from "../Heading/Heading";

import styles from "./styles.module.css";

export const Gallery = ({ title = "", photos = [] }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickPhoto = (index) => {
    setPhotoIndex(index);
    setIsModalOpen(true);
  };

  const handleClickNext = (e) => {
    e.stopPropagation();
    if (photoIndex === photos.length - 1) {
      setPhotoIndex(0);
    } else {
      setPhotoIndex(photoIndex + 1);
    }
  };

  const handleClickPrev = (e) => {
    e.stopPropagation();
    if (photoIndex === 0) {
      setPhotoIndex(photos.length - 1);
    } else {
      setPhotoIndex(photoIndex - 1);
    }
  };

  return (
    <section id="galeria" className="section">
      <Heading className={`sectionHeading`}>{title}</Heading>
      <div className={styles.galleryWrapper}>
        {photos?.map((item, index) => (
          <div
            key={`${item?.url}-${index}`}
            className={styles.galleryImageWrapper}
            onClick={() => handleClickPhoto(index)}
          >
            <img
              src={item?.url}
              alt={item?.alt}
              className={styles.galleryImage}
            />
          </div>
        ))}

        <div
          className={`${styles.galleryModal} ${
            isModalOpen ? styles.active : ""
          }`}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className={styles.galleryModalClose}
            onClick={() => setIsModalOpen(false)}
          >
            <span className={`material-symbols-rounded ${styles.iconClose}`}>
              close
            </span>
          </div>
          <img
            src={`${photos[photoIndex]?.url}`}
            alt={photos[photoIndex]?.alt}
            className={styles.galleryModalImage}
            onClick={(e) => e.stopPropagation()}
          />
          <div
            className={`${styles.galleryModalArrow} ${styles.galleryModalArrowLeft}`}
            onClick={handleClickPrev}
          >
            <span className={`material-symbols-rounded ${styles.icon}`}>
              keyboard_arrow_left
            </span>
          </div>
          <div
            className={`${styles.galleryModalArrow} ${styles.galleryModalArrowRight}`}
            onClick={handleClickNext}
          >
            <span className={`material-symbols-rounded ${styles.icon}`}>
              keyboard_arrow_right
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
