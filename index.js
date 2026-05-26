const http=require('http');
const server=http.createServer((req,res)=>{

    if(req.url == '/'){
        res.end(`
            <h1>Welcome To Sharpener</h1>
        `)
    }
})
server.listen(3000,()=>{
    console.log('Server is up and running on port 3000! Ready to handle requests.');
})