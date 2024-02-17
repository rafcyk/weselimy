import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useQuery } from "graphql-hooks";

import { GET_PAGE_DATA } from "../../gql/getPageData";

import { Navigation } from "../../components/Navigation/Navigation";
import { Content } from "../../components/Content/Content";
import { Footer } from "../../components/Footer/Footer";

const PrivacyPolicy = () => {
  const [pageData, setPageData] = useState();
  const { loading: pageLoading } = useQuery(GET_PAGE_DATA, {
    onSuccess: (res) => {
      res.data.allPages.forEach((item) => {
        if (item?.name === "polityka-prywatnosci") {
          setPageData(item);
        }
      });
    },
  });

  return (
    <>
      <Helmet>
        <title>{pageData?.title}</title>
        <meta
          name="description"
          content="Weselimy - Zapewnij niezapomnianą oprawę swojego wydarzenia z naszym doświadczonym wodzirejem i utalentowanym DJ-em! Oferujemy profesjonalne prowadzenie imprez oraz doskonałą selekcję muzyczną, dostosowaną do każdego gustu. Skontaktuj się z nami, aby sprawić, że Twoje wydarzenie stanie się wyjątkowe i pełne energii!"
        />
      </Helmet>
      {pageLoading ? (
        <div className="loadingScreen">
          <div className="loadingIcon"></div>
        </div>
      ) : (
        <>
          <Navigation position="sticky" navItems={pageData?.pageNavigation?.navigationItems}/>
          <Content pageData={pageData?.main} />
          <Footer />
        </>
      )}
    </>
  );
};

export default PrivacyPolicy;
