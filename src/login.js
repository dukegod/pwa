import { Buffer } from 'buffer';


const getBasicAuth = ({
  username,
  password,
}) => {
  const authBuffer = Buffer.from(`${username}:${password}`);
  return `Basic ${authBuffer.toString('base64')}`;
};

const fetchDate = async(number) => {
  const payload = JSON.stringify({
    client_secret:'014a481cade513c92feb1ec88eaea83c6c0d29a2',
    scopes: [
    'user',
    'repo',
    'delete_repo',
    'notifications',
    'gist',
    'admin:repo_hook',
    'admin:org_hook',
    'admin:org',
    'admin:public_key',
    'admin:gpg_key',
    ],
    note: `PWA`,
  });
  let response;
  response = await fetch('https://api.github.com/authorizations/clients/1', {
    method: 'PUT',
    headers: {
      Authorization: getBasicAuth({
        name: 'dukegod',
        password: 'ahxx123456',
      }),
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

fetchDate(2)