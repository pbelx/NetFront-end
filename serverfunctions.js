var os = require("child_process")

function onlinetest(req, res) {

    // console.log()
    os.exec("ping goo -c 2", (err, out, sderr) => {
        // res.send(out)
        if (err) {
            res.send("fail")
        } else {
            var jj = JSON.stringify("ok")
            res.json(jj)
        }
    })
}
function ubiq(req, res) {

    res.send("it is starting")
    // console.log()
    os.exec("./uu ", (err, out, sderr) => {
        console.log("starting")

    })
}
function lan(req, res) {

    // console.log()
    os.exec("./lan ", (err, out, sderr) => {
        res.send("Lan time check it")

    })
}
function ip(req, res) {

    // console.log()
    os.exec("./ip ", (err, out, sderr) => {
        if (err) {
            res.send(err)
        } else {
            res.send(out)
        }

    })
}

function addip(req, res) {
    // console.log(req.body)
    res.send("oki")
}
function shark(req, res) {
    res.send("oki")
    os.exec("wireshark")
}

function dhcp(req, res) {
    os.exec("dhclient enp1s0", (err, out, stderr) => {
        if (err) {
            res.send("fail")
        } else {
            res.send("ok")
        }
    })
}

function wifi(req, res) {

    var cmd = "ping 10.7.62.1 -c 1 | awk \'BEGIN {FS=\"[=]|ms\"} {print $4}\'"
    os.exec(cmd, (err, out, serr) => {
        if (err) {
            console.log(err)
            res.send(0)
        } else {
            var t = out.trim()
            // console.log(t)
            
            res.send(t)
        }
    })
}
module.exports = {
    onlinetest, ubiq, lan, ip, addip, shark, dhcp,wifi
}
