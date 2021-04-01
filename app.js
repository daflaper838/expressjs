// const http = require('http')

// const server = http.createServer((req,res)=>{
//     if(req.url === '/'){
//         res.end('Home Page')
//     }
//     else if(req.url === '/about'){
//         //blocking code 
//         for (let i = 0; i<1000; i++){
//             for (let j = 0; j<1000; j++){
//                 console.log(`${i} ${j}`)
//             }
//         }
//         res.end('About Page')
//     }else{
//     res.end('error page')
//     }
// })

// server.listen(8000,()=>{
//     console.log('server is listening on port 8000...')
// })
const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt',{highWaterMark:9000,encoding:'utf8'});

stream.on('data',(result)=>{
    console.log(result)
})
stream.on('error',(error)=>{
    console.log(error)
})
