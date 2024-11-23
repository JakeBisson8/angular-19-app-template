module.exports = {
  'src/**/*.{ts,html,css}': ['prettier --write --ignore-unknown'],
  'src/**/*.{ts,html}': ['eslint --fix'],
};
