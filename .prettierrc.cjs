module.exports = {
	pluginSearchDirs: ['.'],
	plugins: [
		'prettier-plugin-organize-attributes',
		'prettier-plugin-jsdoc',
		'prettier-plugin-svelte',
	],
	overrides: [
		{
			files: '*.svelte',
			options: { parser: 'svelte' },
		},
	],

	/** @see https://prettier.io/docs/en/options */
	useTabs: true,
	singleQuote: true,
	trailingComma: 'all',
	printWidth: 80,

	/** @see https://github.com/sveltejs/prettier-plugin-svelte#options */

	/** @see https://www.npmjs.com/package/prettier-plugin-jsdoc#options */
	tsdoc: true,
	jsdocCapitalizeDescription: false,
	jsdocKeepUnParseAbleExampleIndent: true,
	jsdocPreferCodeFences: true,
	jsdocVerticalAlignment: true,

	/** @see https://www.npmjs.com/package/prettier-plugin-organize-attributes */
};
