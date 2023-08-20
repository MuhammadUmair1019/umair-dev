const alert = require('alerta-cli')

module.exports = (isDebug, cli) => {
  if (!isDebug) return

  alert({ type: 'warning', msg: `DEBUGING INFO ↓` });
  console.log(`input `, cli.input)
  console.log(`flags `, cli.flags)
  console.log()
}