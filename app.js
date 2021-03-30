const http = require('http')

const server = http.createServer((req,res)=>{
    if (req.url === '/'){
        res.write('was poppin')
    res.end()
    } 
   
    res.end('<h1>the page does not exist</h1> <p>go back</p>')
    
    console.log(req)
    
})

server.listen(8000)