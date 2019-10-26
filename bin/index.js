'use strict';

const chalk = require('chalk');
const program = require('commander');
const packageInfo = require('../package.json');

program
    .version(packageInfo.version, '-v, --version')
    .on('--help', () => {
        console.log();
        console.log(`    If you have any problems, do not hesitate to file an issue:`);
        console.log(`      ${chalk.cyan('https://github.com/thjiang/easyV2/issues')}`);
        console.log();
    });

program
    .command('status')
    .description('show v2ex status')
    .alias('s')
    .action(() => {
        require('../commands/status.js')();
    });

program
    .command('hot')
    .description('show top 10 topics')
    .alias('ht')
    .action(() => {
        require('../commands/hot.js')();
    });

program.parse(process.argv);
