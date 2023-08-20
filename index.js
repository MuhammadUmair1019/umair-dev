#!/usr/bin/env node
const chalk = require('chalk');
const alert = require('alerta-cli');

const init = require('./utils/init');

const log = console.log;
const italic = chalk.italic
const gray = chalk.gray;
const linkedinClr = chalk.hex('#0a66c2').bold.inverse;
const youtubeClr = chalk.hex('#ff0000').bold.inverse;
const githubClr = chalk.hex('#6cc644').bold.inverse;

(() => {
  init();

  log(`${chalk.bgBlue.bold(` Hi there I am Muhammad Umair `)}
  
${italic(`Full stack developer from Pakistan. Specializing in building exceptional digital experiences and passion for building complex applications.`)}
  
${linkedinClr(` LinkedIn `)} ${gray(`https://www.linkedin.com/in/muhammad-umair-a6792b199`)}
${youtubeClr(` Youtube `)}  ${gray(`https://www.youtube.com/c/UmairtipsStudio/`)}
${githubClr(` Github `)}   ${gray(`https://github.com/MuhammadUmair1019/`)}
  `);

  alert({ type: 'info', msg: `Check out my Portfolio: https://portfolio-umair.vercel.app/` });
})();
