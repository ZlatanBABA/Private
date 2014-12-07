var http=require("http");

http.createServer(function(req,res){
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Who the hell you are!");
    res.end();
}).listen(8888);