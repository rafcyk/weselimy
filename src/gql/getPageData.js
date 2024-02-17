export const GET_PAGE_DATA = `
  query {
      allPages {
        id
        name
        slug
        title
        pageNavigation {
          id
          title
          navigationItems {
            icon
            id
            name
            navSlug
            showBorder
          }
        }
        main {
          __typename
          ... on AboutRecord {
            id
            description
            marketingText
            title
            topAboutUsPhoto {
              url
              alt
            }
            members {
              id
              name
              memberPhoto {
                url
                alt
              }
              description
              smallDescription
            }
          }
          ... on ContactFormRecord {
            id
            description
            title
          }
          ... on GalleryRecord {
            id
            photos {
              alt
              url
            }
            title
          }
          ... on HeaderRecord {
            id
            mainButtonText
            mainText
            mainButtonHref
            headerBackgroundImage {
              alt
              url
            }
          }
          ... on OfferRecord {
            id
            description
            offerType {
              description
              id
              title
              photo {
                url
                alt
              }
            }
            title
          }
          ... on OpinionRecord {
            id
            title
            opinionsLimit
            facebookAppPageToken
            opinionsDescription
          }
          ... on HtmlInsertTextRecord {
            id
            title
            htmlText
          }
          ... on PrivacyPolicyRecord {
            id
            title
            privacyPolicyText
          }
        }
      }
  }
`