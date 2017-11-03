"use strict"

const jsYaml = require("js-yaml")
const fs = require("fs")
const nconf = require("nconf")
const path = require("path")
const APP_ENV = process.env.NODE_ENV

nconf
    .file({
        file: path.join(__dirname, "../settings.yml"),
        format: {
            stringify: (obj, options) => (
                yaml.safeDump(obj, options)
            ),
            parse: (obj, options) => (
                yaml.safeLoad(obj, options)
            )
        }
    })
    .env()
    .defaults(APP_ENV)

module.exports = nconf.get(APP_ENV)
