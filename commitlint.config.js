module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern: /^(.*\w*): (.*)$/,
      headerCorrespondence: ['type', 'subject']
    }
  },
  rules: {
    'body-leading-blank': [1, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 72],
    'scope-case': [2, 'always', 'lower-case'], // ?
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-empty': [2, 'never'],
    'type-case': [2, 'always', 'lower-case'],
    'type-enum': [
      2,
      'always',
      [
        '✨ feat',
        '📦 new',
        '👌 improve',
        '🐛 fix',
        '🚀 release',
        '🦄 release',
        '📝 docs',
        '✅ test',
        '🔨 refactor',
        '💩 bad',
        '🎉 init',
        '🔥 remove',
        '🎨 format'
      ]
    ]
  }
};
