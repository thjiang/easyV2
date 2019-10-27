const chalk = require('chalk');
const ora = require('ora');
const axios = require('../utils/request');
const table = require('../utils/table');

const loading = ora('loading ...');

module.exports = () => {
    loading.start();
    
    axios({
        url: '/api/site/stats.json',
        method: 'get'
    })
        .then((res) => {
            loading.text = 'Succeed';
            loading.succeed();

            const head = [chalk.bold.cyan('topic_max'), chalk.bold.cyan('member_max')];
            const colWidths = [16, 16];

            const data = table(head, colWidths);
        
            data.push([chalk.yellow(res.topic_max), chalk.yellow(res.member_max)]);
        
            console.log(data.toString());
        })
        .catch((err) => {
            loading.text = 'Error';
            loading.fail();

            console.log('ERR:' + err);
        });
};
