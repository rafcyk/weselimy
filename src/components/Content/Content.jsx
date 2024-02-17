import { PrivacyPolicySection } from "../PrivacyPolicySection/PrivacyPolicySection";
import { AboutUs } from "../AboutUs/AboutUs";
import { Contact } from "../Contact/Contact";
import { Gallery } from "../Gallery/Gallery";
import { Header } from "../Header/Header";
import { Offer } from "../Offer/Offer";
import { Opinions } from "../Opinions/Opinions";
import { HtmlInserText } from "../HtmlInsertText/HtmlInserText";

export const Content = ({ pageData = [] }) => {
  return (
    <>
      {pageData?.map((item) => {
        switch (item?.__typename) {
          case "GalleryRecord":
            return (
              <Gallery
                photos={item?.photos}
                title={item?.title}
                key={item?.id}
              />
            );

          case "HeaderRecord":
            return (
              <Header
                headerBackgroundImage={item?.headerBackgroundImage}
                mainText={item?.mainText}
                mainButtonText={item?.mainButtonText}
                mainButtonHref={item?.mainButtonHref}
                key={item?.id}
              />
            );

          case "AboutRecord":
            return (
              <AboutUs
                title={item?.title}
                description={item?.description}
                marketingText={item?.marketingText}
                members={item?.members}
                topPhoto={item?.topAboutUsPhoto}
                key={item?.id}
              />
            );

          case "OfferRecord":
            return (
              <Offer
                title={item?.title}
                description={item?.description}
                offersTypes={item?.offerType}
                key={item?.id}
              />
            );

          case "ContactFormRecord":
            return (
              <Contact
                title={item?.title}
                description={item?.description}
                key={item?.id}
              />
            );

          case "PrivacyPolicyRecord":
            return (
              <PrivacyPolicySection
                title={item?.title}
                privacyPolicyText={item?.privacyPolicyText}
                key={item?.id}
              />
            );
          case "OpinionRecord":
            return (
              <Opinions
                title={item?.title}
                key={item?.id}
                facebookAppPageToken={item?.facebookAppPageToken}
                description={item?.opinionsDescription}
              />
            );
          case "HtmlInsertTextRecord":
            return (
              <HtmlInserText
                title={item?.title}
                key={item?.id}
                htmlText={item?.htmlText}
              />
            );
        }
      })}
    </>
  );
};
