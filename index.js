const http = require('http')
const server = http.createServer((req,res)=>{
    res.write("Home")
    console.log("Successfully Created server")
})
http.get('/',)
server.listen(3000,()=>{
    console.log('srever created at port 3000..')
})
