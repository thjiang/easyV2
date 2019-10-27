const chalk = require('chalk');
const ora = require('ora');
const dayjs = require('dayjs');
const axios = require('../utils/request');
const table = require('../utils/table');

const loading = ora('loading ...');

module.exports = () => {
    loading.text = 'Succeed';
    loading.start();

    axios({
        url: '/api/topics/hot.json',
        method: 'get'
    })
        .then((res) => {
            loading.succeed();

            const head = [
                chalk.bold.cyan('post_id'),
                chalk.bold.cyan('title'),
                chalk.bold.cyan('created'),
                chalk.bold.cyan('replies')
            ];
            const colWidths = [10, 40, 18, 9];

            const data = table(head, colWidths);

            for (let i = 0; i < res.length; i++) {
                data.push([
                    chalk.yellow(res[i].id),
                    chalk.yellow(res[i].title),
                    chalk.yellow(dayjs(res[i].created * 1000).format('YYYY/MM/DD HH:mm')),
                    chalk.yellow(res[i].replies)
                ]);
            }

            console.log(data.toString());
        })
        .catch((err) => {
            loading.fail();

            console.log('ERR:' + err);
        });
};
