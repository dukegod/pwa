const fetchAsync = require('../utils/fetch')

test('method', () => {
  fetchAsync({
    method: 'post',
    headers: '22',
    body: '33'
  })
})