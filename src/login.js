import { Buffer } from 'buffer';


const getBasicAuth = ({
  username,
  password,
}) => {
  console.log(username, password)
  const authBuffer = Buffer.from(`${username}:${password}`);
  return `Basic ${authBuffer.toString('base64')}`;
};

const fetchDate = async(username, password) => {
  const payload = JSON.stringify({
    client_secret:'014a481cade513c92feb1ec88eaea83c6c0d29a2',
    scopes: [
    'user',
    'repo',
    ],
    note: `PWA`,
    fingerprint: 'heroapp'
  });
  let response;
  response = await fetch('https://api.github.com/authorizations/clients/1c72eade967e3396cae4', {
    method: 'PUT',
    headers: {
      Authorization: getBasicAuth({
        username,
        password,
      }),
    },
    body: payload,
  })
  let body;
  body = await response.json();
  console.log(body)
  localStorage.setItem('pwaToken', body.token)
  return {
    status: response.status,
    ok: response.ok,
    body: body,
  };
}

export default fetchDate;
