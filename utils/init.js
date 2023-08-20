
const checkNode = require('cli-check-node')
const unhandled = require('cli-handle-unhandled')
const pkgJSON = require('./../package.json')
const welcome = require('cli-welcome')

module.exports = () => {
  unhandled()

  welcome({
    title: pkgJSON.name,
    tagLine: `Howdy, ncie to meet ya!`,
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: `#0a66c2`,
    color: `#000000`,
    bold: true,
    clear: true,
  })

  checkNode('14')
}