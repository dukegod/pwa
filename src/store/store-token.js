/**
 * token
 */
let PWATOKEN = false;



// function setToken(params) {
//   if (localStorage.getItem(PWATOKEN)) {
//     return;
//   } 

//   localStorage.setItem(PWATOKEN, params);
// }

// function getToken() {
//   return localStorage.getItem(PWATOKEN)
// }

if (localStorage.getItem('pwaToken')) {
  PWATOKEN =  true;
} else {
  window.location.hash = '#/login'
}

export default PWATOKEN;


// export { setToken, getToken};
