#!/usr/bin/env node
const pkgJSON = require('./package.json')
const welcome = require('cli-welcome')
const chalk = require('chalk')
const log = console.log
const gray = chalk.gray
const linkedinClr = chalk.hex('#0a66c2').bold.inverse
const youtubeClr = chalk.hex('#ff0000').bold.inverse
const githubClr = chalk.hex('#6cc644').bold.inverse

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

log(`${chalk.bgBlue.bold(` Hi there I am Muhammad Umair `)}

Full Stack Developer from Pakisan

${linkedinClr(` LinkedIn `)} ${gray(`https://www.linkedin.com/in/muhammad-umair-a6792b199`)}
${youtubeClr(` Youtube `)}  ${gray(`https://www.youtube.com/c/UmairtipsStudio/`)}
${githubClr(` Github `)}   ${gray(`https://github.com/MuhammadUmair1019/`)}
`)