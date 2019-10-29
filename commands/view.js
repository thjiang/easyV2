const chalk = require('chalk');
const ora = require('ora');
const dayjs = require('dayjs');
const axios = require('../utils/request');
const loading = ora('loading ...');

module.exports = (post_id) => {
  loading.start();

  axios({
    url: '/api/topics/show.json',
    method: 'get',
    params: { id: post_id }
  })
    .then((res) => {
      console.log();
      console.log();
      console.log(
        'node: ' +
          chalk.hex('#8c8c8c')(res[0].node.name) +
          '  author: ' +
          chalk.hex('#8c8c8c').italic(res[0].member.username) +
          '  created: ' +
          chalk.hex('#8c8c8c')(dayjs(res[0].created * 1000).format('YYYY/MM/DD HH:mm'))
      );
      console.log();
      console.log('title: ' + chalk.hex('#8c8c8c').bold(res[0].title));
      console.log();
      console.log('url: ' + chalk.hex('#8c8c8c').underline(res[0].url));
      console.log();
      console.log('content: ' + chalk.cyan(res[0].content));
      console.log();

      loading.text = 'Loading replies ...';

      axios({
        url: '/api/replies/show.json',
        method: 'get',
        params: { topic_id: post_id }
      })
        .then((replies) => {
          loading.text = 'Succeed';
          loading.clear();
          console.log();

          for (let i = 0; i < replies.length; i++) {
            const index = `${i + 1}L:`;
            const member = replies[i].member.username;
            const created = dayjs(replies[i].created * 1000).format('YYYY/MM/DD HH:mm');
            const content = replies[i].content;

            console.log(
              `${chalk.hex('#8c8c8c')(index)} ${chalk.hex('#8c8c8c').italic(member)} ${chalk.hex('#8c8c8c')(
                `[${created}]`
              )}\n${chalk.cyan(content)}`
            );
            console.log();
          }

          process.exit(1);
        })
        .catch((err) => {
          loading.fail();

          console.log('ERR:' + err);

          process.exit(1);
        });
    })
    .catch((err) => {
      loading.fail();

      console.log('ERR:' + err);

      process.exit(1);
    });
};
