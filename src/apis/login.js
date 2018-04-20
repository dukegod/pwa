import { Buffer } from 'buffer';
import Oauth from '../settings';

const getBasicAuth = ({ username, password }) => {
  // console.log(username, password);
  const authBuffer = Buffer.from(`${username}:${password}`);
  return `Basic ${authBuffer.toString('base64')}`;
};

const LoginOauth = async (username, password) => {
  const payload = JSON.stringify({
    client_secret: Oauth.client_secret,
    client_id: Oauth.client_id,
    scopes: ['user', 'repo'],
    note: `PWA`
  });
  let response;
  response = await fetch(Oauth.client_authorizations, {
    method: 'POST',
    headers: {
      Authorization: getBasicAuth({
        username,
        password
      })
    },
    body: payload
  });
  let body;
  body = await response.json();

  return {
    status: response.status,
    ok: response.ok,
    body: body
  };
};

export default LoginOauth;
