import { Heading } from "../Heading/Heading";
import { Slider } from "../Slider/Slider";
import { OfferCard } from "./OfferCard";

export const Offer = ({ title = "", description = "", offersTypes = [] }) => {
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
    <section id="oferta" className={`section`}>
      <Heading className={`sectionHeading`}>{title}</Heading>
      <Slider
        options={sliderOptions}
        jsxItems={offersTypes.map(({ title, id, photo, description }) => (
          <OfferCard
            title={title}
            photo={photo}
            description={description}
            id={id}
          />
        ))}
      />
      <div
        dangerouslySetInnerHTML={{ __html: description }}
        className={`datoHtmlText`}
      />
    </section>
  );
};
