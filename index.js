const http = require("http");

const Comic_Bee = http.createServer((req, res)=>{
    if(req.url === "/" && req.method === "GET")
    {
        res.writeHead(200, {"Content-Type": "text/html" });
        res.end("<h1>Welcome to Comic Bee</h1>");
    }
    else if(req.url === "/comics" && req.method === "GET")
    {
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.end("<h2>List of Comics</h2>");
    }
    else 
    {
        res.writeHead(404,{"Content-Type": "text/plain"});
        res.end("Page not found");
    }
});
Comic_Bee.listen(3000,() =>{
    console.log("Server is running on port 3000");
})