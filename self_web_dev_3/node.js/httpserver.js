// const { console } = require('console');
const fs = require('fs')
const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url)

    if(req.url == '/'){
        res.statusCode =200;
    res.end('<h1> This is vicky </h1> <p> hey how are u ! </p>');
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
    res.end('<h1> About Vicky </h1> <p> hahahah </p>');
}
    else if(req.url == '/hello'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html')
    res.end(data.toString());

}
else{
    res.statusCode = 404;
    res.end('<h1> Not Found </h1> <p> Hey This page was not found on this </p>');
    }

})
server.listen(port, () =>{
    console.log(`server is listening on port  ${port}`);
})    