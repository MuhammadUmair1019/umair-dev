#!/usr/bin/env node
const pkgJSON = require('./package.json')
const welcome = require('cli-welcome')

welcome({
  title: pkgJSON.name,
  tagLine: `Howdy, ncie to meet ya!`,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: true,
})

console.log(`
Hi there I am Muhammad Umair , Full Stack Developer from Pakisan 🇵🇰

✔️ Full Stack Developer

Github => 🔗 https://github.com/MuhammadUmair1019/
LinkedIn: => 🔗 https://www.linkedin.com/in/muhammad-umair-a6792b199
Youtube: => 🔗 https://www.youtube.com/c/UmairtipsStudio/
`)