/**
 * liuhui
 * 2018年04月20日15:25:46
 * 统一处理请求相关数据
 */
import Oauth from '../settings';

const accessToken = localStorage.getItem('pwaToken');

const verifyResult = async(re) => {
  console.log(re)
  const response  = await re.json();
  // console.log(response)
  let result;
  if (re && re.ok ) {
    // console.log(re.ok)
    result = {
      code: 200,
      data: response.data,
      message: 'success'
    }
  } else {
    result = {
      code: 0,
      data: null,
      message: 'fail'
    }
  }
  return result;
}


const fetchAsync = async ({ 
  url = '',
  method = 'POST', 
  headers = {
    Authorization: `token ${accessToken}`
  }, 
  body = {}
}) => {
  // console.log(method)
  // console.log(headers)
  // console.log(body)
  // 调用原生fetch api
  try {
    return await fetch(Oauth.clinet_graphql + url, {
      method: method,
      headers: headers,
      body: JSON.stringify(body)
    }).then( re => {
      return verifyResult(re)
    })
  } catch (error) {
    return {
      code: 0,
      data: null,
      message: error
    }
  }
}




export default fetchAsync;
