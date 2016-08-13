const coap  = require('coap')
const req   = coap.request({host:'localhost', pathname:'time', method:'GET'})

req.on('response', function(res) {
  // res.pipe(process.stdout)
  console.log('response code: ' + res.code)
  console.log('response payload: ' + res.payload)
})

req.end()
