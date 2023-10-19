"use strict"
const http = require('http')
const path = require('path')
const greenlockExpress = require("greenlock-express")
const maintainerEmail = require("./greenlock.d/consts.js").maintainerEmail

const app = require("./app.js")

const port = 8080
const packageRoot = path.resolve(__dirname, '..')
console.log(packageRoot)

const greenlock = greenlockExpress.init({
  packageRoot: packageRoot,
  configDir: "./greenlock.d",
  maintainerEmail: maintainerEmail,
  cluster: false,
})

const server = http.createServer(app)

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})

greenlock.serve(app, {
})
