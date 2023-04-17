declare type $EnvKeys = [
	'PROTOCOL',
	'FQDN',
	'BASE_PATH',
	'URL',
	'MICROCMS_SERVICE_DOMAIN',
	'MICROCMS_API_KEY',
];

declare type $EnvKey = $EnvKeys[number];
declare type $EnvValue = string;

declare type $Env = Record<$EnvKey, $EnvValue>;

declare const $env: $Env;
