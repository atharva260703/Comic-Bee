const https = require("https");
const fs = require("fs");
const options = {
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem")
};
const Comic_Bee = https.createServer(options,(req, res)=>{
    const securityHeader = {
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "DENY",
        "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
        "Content-Security-Policy": "define-src 'self'"
    }
    if(req.url === "/" && req.method === "GET")
    {
        res.writeHead(200, {"Content-Type": "text/html", ...securityHeader});
        res.end("<h1>Welcome to Comic Bee</h1>");
    }
    else if(req.url === "/comics" && req.method === "GET")
    {
        res.writeHead(200, {"Content-Type" : "text/html", ...securityHeader});
        res.end("<h2>List of Comics</h2>");
    }
    else 
    {
        res.writeHead(404,{"Content-Type": "text/plain", ...securityHeader});
        res.end("Page not found");
    }
});
Comic_Bee.listen(3000,() =>{
    console.log("Server is running on port 3000");
});