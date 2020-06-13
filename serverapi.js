var rest = require("restify")
var cors = require('cors')
var fnc = require("./serverfunctions")
var os = require("child_process")
var app = rest.createServer()
app.use(cors())
app.use(rest.plugins.bodyParser())

app.get("/on", (req, res) => {
    fnc.onlinetest(req, res)
})

app.get("/ubi", (req, res) => {
    fnc.ubiq(req, res)
})
app.get("/lan", (req, res) => {
    fnc.lan(req, res)
})
app.get("/ip", (req, res) => {
    fnc.ip(req, res)
})
app.get("/shark", (req, res) => {
    fnc.shark(req, res)
})
app.get("/dhcp", (req, res) => {
    fnc.dhcp(req, res)
})
app.get("/wifi", (req, res) => {
    fnc.wifi(req, res)
})
app.post("/saveip", (req, res) => {
    // fnc.ip(req,res)
    // console.log(req.body)
    fnc.addip(req, res)
    // res.json("name of bro")
})




console.log("app up")
app.listen(5000)
