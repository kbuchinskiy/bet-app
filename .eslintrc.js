module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': 0,
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }], 
    'no-underscore-dangle': ['error', { allow: ['_id'] }]
  }
};
