var http = require('http');
var fs=require('fs');

function send404Response(response){
response.writeHead(404,{"Content-Type": "text/plain"});
response.write("Error 404:page not found!");
response.end();
}
function onRequest(request,response){
if(request.method=='GET'&& request.url== '/'){
response.writeHead(200,{"Content-Type": "text/html"}); fs.createReadStream("./Lab1.html").pipe(response); }

else {
send404Response(response);
}
};
var server = http.createServer(onRequest);
server.listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');