import { AboutUsMemberCard } from "./AboutUsMemberCard";
import { Heading } from "../Heading/Heading";
import { Slider } from "../Slider/Slider";
import { Spacer } from "../Spacer/Spacer";

import styles from "./styles.module.css";

export const AboutUs = ({
  title = "",
  description = "",
  marketingText = "",
  members = [],
  topPhoto = {},
}) => {
  const sliderOptions = {
    perView: 1,
    pagination: false,
    mediaQuery: "min",
    type: "loop",
    autoHeight: true,
    breakpoints: {
      991: {
        destroy: true,
      },
    },
  };

  return (
    <section className={`section`} id="onas">
      <Heading className={`sectionHeading`}>{title}</Heading>
      <div className={styles.aboutUsTopWrapper}>
        <img src={topPhoto?.url} alt={topPhoto?.alt} />
        <p className={styles.aboutUsText}>{description}</p>
      </div>
      <p className={styles.aboutUsText}>{marketingText}</p>
      <Spacer />
      <Slider
        options={sliderOptions}
        jsxItems={members.map(
          ({ name, smallDescription, description, memberPhoto, id }) => (
            <AboutUsMemberCard
              name={name}
              smallDescription={smallDescription}
              description={description}
              memberPhoto={memberPhoto}
              id={id}
            />
          )
        )}
      />
    </section>
  );
};
