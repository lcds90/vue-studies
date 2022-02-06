const fs = require('fs');
// Override Docute settings
module.exports = {
  include: ['src/**/*.vue'],
//   exclude: ['**/error.vue'],
  outDir: 'documentation',
  markdownDir: 'components',
  babelParserPlugins: {
    jsx: false,
  },
};
setTimeout(() => {
  const filePath = 'documentation/index.html';
  let source = fs.readFileSync(filePath, 'utf-8');
  source = source.replace(
    'new Docute({',
    `new Docute({
			nav: [
				{
				title: 'Home',
				link: '/'
				},
				{
				title: 'Somewhere else',
				link: 'http://www.example.com'
				}
			],
		`
  );
  fs.writeFileSync(filePath, source);
}, 2000);
