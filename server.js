var http=require('http');
const hostname ="127.0.0.1";
const port ="300";

var server = http.createServer(  (req , res) => {
  res.statusCode='200';
  res.setHeader='text/plain';
  res.end("hello world");
}
);

server.listen(port,hostname,()=>{
  console.log(`server is running at http://${hostname}:${port}/port`);
});
