"use strict"

const EagerLoader = require("eager-loader")

const D = {
    Seneca: require("seneca")(),
    orm: {}
}

console.log("D", D)
exports = module.exports = EagerLoader({
    deps: [D],
    format: ".rb.js"
})

exports.__dict__ = {}
exports.__dict__.mixin = Object.assign
exports.env = require("./env")

const app = new (require("koa"))()

//app.use(exports.services

exports.server = app
