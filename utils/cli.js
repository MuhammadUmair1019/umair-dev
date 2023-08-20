const meow = require('meow');
const { green, yellow, cyan, dim } = require('chalk')

const helpText = `
  Usage
    ${green(`npx umair_dev`)} ${yellow(`[options]`)} ${cyan(`<commands>`)}
  
  Options
    ${yellow(`--bio`)}               Print the bio info ${dim(`(DEFAULT: true)`)}
    ${yellow(`--no-bio`)}            Don't print the bio info
    ${yellow(`--social`)}            Print the social info ${dim(`(DEFAULT: true)`)}
    ${yellow(`--no-social`)}         Don't print the social info
    ${yellow(`--ad`)}                Print the ad info ${dim(`(DEFAULT: true)`)}
    ${yellow(`--no-ad`)}             Don't print the ad info
    ${yellow(`--clear`)}             Clear the console ${dim(`(DEFAULT: true)`)}
    ${yellow(`--no-clear`)}          Don't clear the console
    ${yellow(`-m`)}                  Print minimal info
    ${yellow(`-d`)}, ${yellow(`--debug`)}         Print debug info 
    ${yellow(`-v`)}, ${yellow(`--version`)}        Print version info
  
  Commands
    ${cyan(`help`)}                 Print CLI help info
  
  Examples
    ${green(`npx umair_dev`)} ${yellow(`--no-social`)}
    ${green(`npx umair_dev`)} ${yellow(`--no-ad`)}
`;

const options = {
  infterType: true,
  hardRejection: false,
  flags: {
    minimal: {
      type: 'boolean',
      alias: 'm',
    },
    clear: {
      type: 'boolean',
      default: true,
    },
    bio: {
      type: 'boolean',
      default: true,
    },
    social: {
      type: 'boolean',
      default: true,
    },
    ad: {
      type: 'boolean',
      default: true,
    },
    debug: {
      type: 'boolean',
      default: false,
      alias: 'd',
    },
    version: {
      type: 'boolean',
      default: false,
      alias: 'v',
    },
  },
};

module.exports = meow(helpText, options)
