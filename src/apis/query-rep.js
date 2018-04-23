// 查询repository

import fetchAsync from '../utils/fetch';

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

const queryRep = async(number) => {
  
  return await fetchAsync({
    method: 'POST',
    body: {
      query: queryReps(number)
    }
  })
  
}


export default queryRep;
