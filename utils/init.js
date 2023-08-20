const checkNode = require('cli-check-node')
const unhandled = require('cli-handle-unhandled')
const pkgJSON = require('./../package.json')
const welcome = require('cli-welcome')
const boxen = require('boxen')

module.exports = (minimal, clear) => {
  unhandled()

  !minimal &&
    welcome({
      title: 'Muhammad Umair',
      tagLine: `Howdy, ncie to meet ya!`,
      description: pkgJSON.description,
      version: pkgJSON.version,
      bgColor: `#0a66c2`,
      color: `#000000`,
      bold: true,
      clear,
    })

  minimal && console.log(boxen(`Muhammad Umair`, { padding: 1, dimBorder: true, borderStyle: 'classic' }))

  checkNode('14')
}