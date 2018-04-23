/**
 * by liuhui
 * 2018年04月23日17:35:12
 * 获取用户信息
 */

import fetchAsync from '../utils/fetch';

const queryUser = () => `
  query { 
    viewer { 
      login,
      name,
      avatarUrl,
      websiteUrl,
      createdAt,
      followers {
        totalCount
      }
      following {
        totalCount
      } 
      repositories(first: 20, orderBy: {
        direction: DESC,
        field: CREATED_AT
      }, isFork: false) {
        edges {
          node {
            createdAt
            name
            id
            description
            primaryLanguage {
              name
            }
          }
        }
      }
    }
  }
`;

export default async () => {
  return await fetchAsync({
    method: 'POST',
    body: {
      query: queryUser()
    }
  });
};


