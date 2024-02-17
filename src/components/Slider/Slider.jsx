import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

import styles from "./styles.module.css";

export const Slider = ({ options, jsxItems = [], disableAutoHeight }) => {
  return (
    <div className={`${styles.sliderWrapper}`}>
      <Splide
        options={options}
        hasTrack={false}
        aria-label="..."
        onMove={(splide) => {
          if (window.innerWidth <= 991) {
            const slideHeight = splide.Components.Slides.getAt(splide.index)
              .slide.firstChild.offsetHeight;
            splide.root.style.height = `${slideHeight}px`;
          }
        }}
        onActive={(splide) => {
          if (window.innerWidth <= 991) {
            const slideHeight = splide.Components.Slides.getAt(splide.index)
              ?.slide.firstChild.offsetHeight;
            splide.root.style.height = `${slideHeight}px`;
          }
        }}
      >
        <SplideTrack>
          {jsxItems?.map((item, index) => (
            <SplideSlide className={styles.sliderListItem} key={index}>
              <div className={`${styles.sliderItemWrapper}`}>{item}</div>
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </div>
  );
};
