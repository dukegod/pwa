
import axios  from 'axios';
const V3_URL = 'https://github.com/login/oauth/authorize?client_id=1c72eade967e3396cae4';

let token = localStorage.getItem('pwaToken');



const login = async(code) => {
  return axios('https://github.com/login/oauth/access_token', {
    method: 'get',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'content-type': 'application/json'
    },
    // credentials: 'same-origin',
    // mode: 'no-cors',
    data: JSON.stringify({
      code: code,
      client_id: '1c72eade967e3396cae4',
      client_secret: '014a481cade513c92feb1ec88eaea83c6c0d29a2',
    })
  })
}
// login()


const oauth = async() => {
  // 获取code
  if (!token) {
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=1c72eade967e3396cae4&redirect_uri=http://localhost:3000/';
    window.localStorage.setItem('pwaToken', 9)
  }

  const code = window.location.search.substring(1).split('=')[1];
  if (code) {
    console.log(code);
    login(code)
    // window.location.href = `https://github.com/login/oauth/access_token?code=${code}&client_id=1c72eade967e3396cae4&client_secret=014a481cade513c92feb1ec88eaea83c6c0d29a2&redirect_uri=http://localhost:3000/`;
    // return await {
    //   code: code
    // }
  }
}

oauth()