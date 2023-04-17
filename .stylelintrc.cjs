module.exports = {
	plugins: ['stylelint-declaration-block-no-ignored-properties'],
	extends: [
		'stylelint-config-recommended-scss',
		'stylelint-config-recess-order',
		'stylelint-config-html',
	],
	rules: {
		'plugin/declaration-block-no-ignored-properties': true,
		'scss/selector-no-union-class-name': true,
		'unit-no-unknown': [
			true,
			{
				ignoreUnits: ['/rpx/'],
			},
		],
		'selector-pseudo-class-no-unknown': [
			true,
			{
				ignorePseudoClasses: ['/global/'],
			},
		],
	},
};
