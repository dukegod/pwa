/**
 * liuhui
 * 2018年04月20日15:25:46
 * 统一处理请求相关数据
 */

const fetchAsync = async ({ 
  url = '',
  method = 'GET', 
  headers = {}, 
  body = {}
}) => {
  console.log(method)
  console.log(headers)
  console.log(body)
  // 调用原生fetch api
  await fetch


}


export default fetchAsync;
