const http = require('http')
http.createServer((req,res)=>{
    res.write("Home")
    console.log("Successfully Created server")
})
