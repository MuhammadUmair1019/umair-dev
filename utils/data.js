const chalk = require('chalk');

const italic = chalk.italic;
const gray = chalk.gray;
const linkedinClr = chalk.hex('#0a66c2').bold.inverse;
const youtubeClr = chalk.hex('#ff0000').bold.inverse;
const githubClr = chalk.hex('#6cc644').bold.inverse;
const twitterClr = chalk.hex('#1da1f2').bold.inverse; 

const bio = `${italic(
  `Full stack developer from Pakistan. Specializing in building exceptional digital experiences and a passion for developing complex applications.`
)}
`;

const social = `
${linkedinClr(` LinkedIn `)} ${gray(`https://www.linkedin.com/in/muhammad-umair-a6792b199`)}
${twitterClr(` Twitter `)}   ${gray(`https://twitter.com/MrUmairAfzal/`)}
${youtubeClr(` Youtube `)}  ${gray(`https://www.youtube.com/c/UmairtipsStudio/`)}
${githubClr(` Github `)}   ${gray(`https://github.com/MuhammadUmair1019/`)}
`;

const ad = `Check out my Portfolio: https://portfolio-umair.vercel.app/`;

module.exports = {
  bio,
  social,
  ad
};
