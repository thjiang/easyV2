const chalk = require('chalk');
const ora = require('ora');
const dayjs = require('dayjs');
const axios = require('../utils/request');
const table = require('../utils/table');

const loading = ora('loading ...');

module.exports = (post_id) => {
    console.log(post_id);

    loading.start();

    axios({
        url: '/api/topics/show.json',
        method: 'get',
        params: { id: post_id }
    })
        .then((res) => {
            loading.succeed();

            console.log('node: ' + chalk.magenta(res[0].node.name));
            console.log('author: ' + chalk.magenta(res[0].member.username));
            console.log('time: ' + chalk.yellow(dayjs(res[0].created * 1000).format('YYYY/MM/DD HH:mm')));
            console.log('title: ' + chalk.bold.cyan(res[0].title));
            console.log('content: ' + chalk.white(res[0].content));

            process.exit(1);
        })
        .catch((err) => {
            loading.fail();

            console.log('ERR:' + err);
        });
};
