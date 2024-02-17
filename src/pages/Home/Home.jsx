import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useQuery } from "graphql-hooks";

import { GET_PAGE_DATA } from "../../gql/getPageData";

import { Navigation } from "../../components/Navigation/Navigation";
import { Content } from "../../components/Content/Content";
import { Footer } from "../../components/Footer/Footer";

// PAGE ID = 146686498522186

const facebookPageAccessToken =
  "EAAEvFZB7xuWsBO7aQlwEginwalM6FnoHc9N8avOz3OX9GZAxkhTALUTWmz2iMHHE1y3jtUMXc7ueVKKFFJjxIF48ENgqKPsKuE2ZBJHcd6A6KbMG2XolpR179RnnNPqwcIGjMWChufXE1Qd8bFhR0OY2MUU4ZBelzAHTKZCZApNM2ZBwq5zE6TTKg6efwR5PuUTvOYyJtBxLx95M43Sqh16hnsZD";
//page access token
const facebookApiUrl = "https://graph.facebook.com/v18.0";

const Home = () => {
  const [pageData, setPageData] = useState();
  const { loading: pageLoading } = useQuery(GET_PAGE_DATA, {
    onSuccess: (res) => {
      res.data.allPages.forEach((item) => {
        if (item?.name === "") {
          setPageData(item);
        }
      });
    },
  });

  useEffect(() => {
    const hash = window?.location?.hash;
    if (!!hash && !pageLoading) {
      const scrollElement = document?.querySelector(hash)?.offsetTop;
      window.scrollTo({
        top: scrollElement - 100,
        behavior: "smooth",
      });
    }
  }, [pageLoading]);

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
          <Navigation navItems={pageData?.pageNavigation?.navigationItems} />
          <Content pageData={pageData?.main} />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
