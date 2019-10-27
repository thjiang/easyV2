const chalk = require('chalk');

module.exports = () => {
    console.log(chalk.black('black'));
    console.log(chalk.red('red'));
    console.log(chalk.green('green'));
    console.log(chalk.yellow('yellow'));
    console.log(chalk.blue('blue'));
    console.log(chalk.magenta('magenta'));
    console.log(chalk.cyan('cyan'));
    console.log(chalk.whiteBright('whiteBright'));
    console.log(chalk.gray('gray'));
    console.log(chalk.redBright('redBright'));
    console.log(chalk.greenBright('greenBright'));
    console.log(chalk.yellowBright('yellowBright'));
    console.log(chalk.blueBright('blueBright'));
    console.log(chalk.magentaBright('magentaBright'));
    console.log(chalk.cyanBright('cyanBright'));
    console.log(chalk.whiteBright('whiteBright'));
    console.log(chalk.hex('#85a5ff')('#85a5ff'));
    console.log(chalk.hex('#b37feb').bold('#b37feb'));

    process.exit(1);
};
