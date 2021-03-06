module.exports = {
  root: true,
  extends: '@clark/ember-typescript/test',
  rules: {
    '@typescript-eslint/ban-types': 'warn',

    // https://github.com/ember-cli/eslint-plugin-ember/issues/905
    'ember/no-new-mixins': 'off',
    'ember/no-attrs-in-components': 'off',
    'ember/no-get': 'off'
  }
};
