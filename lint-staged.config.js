module.exports = {
  'src/**/*.{ts,tsx}': ['eslint --fix'],
  '**/*.{js,jsx}': ['eslint --fix'],
  '**/*.json': ['prettier  --write'],
  '**/*.yml': ['prettier  --write']
};
