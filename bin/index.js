const chalk = require('chalk');
const inquirer = require('inquirer');
const program = require('commander');
const packageInfo = require('../package.json');

program.version(packageInfo.version, '-v, --version').on('--help', () => {
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
  .alias('h')
  .action(() => {
    require('../commands/hot.js')();
  });

program
  .command('latest')
  .description('show latest topics')
  .alias('l')
  .action(() => {
    require('../commands/latest.js')();
  });

program
  .command('test')
  .description('test')
  .alias('t')
  .action(() => {
    require('../commands/test.js')();
  });

program
  .command('view')
  .description('view a post')
  .alias('v')
  .usage('<post_id> [post id]')
  .action(() => {
    if (!isNaN(Number(program.args[0]))) {
      require('../commands/view.js')(program.args[0]);
    } else {
      inquirer
        .prompt([
          {
            name: 'post_id',
            message: 'Please input post_id(number):'
          }
        ])
        .then((answers) => {
          require('../commands/view.js')(answers.post_id);
        });
    }
  });

program.parse(process.argv);
