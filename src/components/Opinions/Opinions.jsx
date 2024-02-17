import { useEffect, useState } from "react";

import { SingleOpinion } from "./SingleOpinion";
import { Heading } from "../Heading/Heading";
import { Slider } from "../Slider/Slider";

import styles from "./styles.module.css";

export const Opinions = ({
  title = "",
  opinionsLimit = 4,
  facebookAppPageToken,
  description,
}) => {
  const [opinions, setOpinions] = useState([]);

  const sliderOptions = {
    perPage: 1,
    perMove: 1,
    pagination: false,
    mediaQuery: "min",
    type: "loop",
    autoplay:"playing",
    breakpoints: {
      991: {
        perPage: 2,
      },
    },
  };

  useEffect(() => {
    const getPageRating = () => {
      FB.api(
        `/146686498522186/ratings`,
        "GET",
        {
          access_token: facebookAppPageToken,
          fields: "created_time,review_text,reviewer",
          limit: opinionsLimit,
          recommendation_type: "positive",
        },
        function (res) {
          setOpinions(res.data);
        }
      );
    };

    getPageRating();
  }, [facebookAppPageToken]);

  return (
    <section id="opinie" className={`section`}>
      {!!opinions?.length ? (
        <>
          <Heading className={`sectionHeading`}>{title}</Heading>
          <p className={`${styles.opinionsDescription}`}>{description}</p>
          <Slider
            disableAutoHeight
            options={sliderOptions}
            jsxItems={opinions?.map((item) => (
              <SingleOpinion
                createdTime={item?.created_time}
                message={item?.review_text}
                reviewer={item?.reviewer}
              />
            ))}
          />
        </>
      ) : null}
    </section>
  );
};
