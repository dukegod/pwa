
const GRAPHQL_URL = 'https://api.github.com/graphql';
const accessToken = '8eb6b02612d0e76aa442f925e3d758826c34681e';

const queryReps = (number)=> `
  query {
    search(first:${number}, query: "pwa", type: REPOSITORY ) {
      edges {
        node {
          ... on Repository {
            name 
            description
            homepageUrl
            owner {
              login
            }
          }
        }
      }
    }
  }
`

const fetchDate = async(number) => {
  const payload = JSON.stringify({
    query: queryReps(number),
  })
  let response;
  response = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: {
      Authorization: `token ${accessToken}`,
    },
    body: payload,
  })
  let body;
  body = await response.json();
  return {
    status: response.status,
    ok: response.ok,
    body: body.data,
  };
}

export default fetchDate;
