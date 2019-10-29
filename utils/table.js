const Table = require('cli-table3');
const chalk = require('chalk');

function table(head, colWidths) {
  const myTable = new Table({
    head: head,
    colWidths: colWidths,
    chars: {
      top: chalk.bold.white('═'),
      'top-mid': chalk.bold.white('╤'),
      'top-left': chalk.bold.white('╔'),
      'top-right': chalk.bold.white('╗'),
      bottom: chalk.bold.white('═'),
      'bottom-mid': chalk.bold.white('╧'),
      'bottom-left': chalk.bold.white('╚'),
      'bottom-right': chalk.bold.white('╝'),
      left: chalk.bold.white('║'),
      'left-mid': chalk.bold.white('╟'),
      mid: chalk.bold.white('─'),
      'mid-mid': chalk.bold.white('┼'),
      right: chalk.bold.white('║'),
      'right-mid': chalk.bold.white('╢'),
      middle: chalk.bold.white('│')
    }
  });

  return myTable;
}

module.exports = table;
