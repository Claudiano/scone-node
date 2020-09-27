var express = require('express')
const https = require("https")
const fs = require("fs")

console.log("Example tls app start!")
console.log("Read the secret: "+process.env.GREETING)

const keyFilePath = "/tls/key.pem"
const certFilePath = "/tls/cert.pem"

var privateKey = fs.readFileSync(keyFilePath, "utf8")
var certificate = fs.readFileSync(certFilePath, "utf8")

var credentials = {key: privateKey, cert: certificate}

var app = express()
var httpServer = https.createServer(credentials, app)

app.get("/", function(req, res) {
    console.log("scone mode is: "+process.env.GREETING)
    res.send("Hello world!" + process.env.GREETING)
})

httpServer.listen(443, () => {
    console.log("Example tls app listening ob port 443!")
    console.log("Scone mode is: " + process.env.GREETING)
    console.log("OK.")
})

