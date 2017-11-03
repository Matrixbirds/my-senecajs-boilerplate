"use strict"

module.exports = function({Seneca, orm}) {
    console.log(JSON.stringify(arguments))
    //Seneca.add("role:user,cmd:login", login)
    //Seneca.add("role:user,cmd:profiles", profile)
    //Seneca.add("role:user,cmd:verify", verify)

    function login (msg, done) {
        msg.response$.body = "2333"
        msg.response$.status = 200
        done(null)
    }

    function profiles (msg, done) {
        msg.response$.body = "2333"
        msg.response$.status = 200
        done(null)
    }

    function verify (msg, done) {
        msg.response$.body = "2333"
        msg.response$.status = 200
        done(null)
    }
}
