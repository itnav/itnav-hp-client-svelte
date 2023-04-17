import * as fs from 'fs';
import { fileURLToPath } from 'url';
import { createSitemap } from 'svelte-sitemap/src';
import type { PluginOption } from 'vite';

export type SitemapConfig = {
	host?: string;
	mode?: string;
} & Parameters<typeof createSitemap>[1];

/** @see https://github.com/bartholomej/svelte-sitemap */
export default function sitemap(config: SitemapConfig = {}) {
	if (config.mode === 'development') return {} as PluginOption;

	return {
		closeBundle() {
			const outputDir = fileURLToPath(new URL('./build', import.meta.url));

			// ビルドされたファイルが存在しない場合は、sitemap を生成しない
			if (!fs.existsSync(outputDir)) return;

			createSitemap(config.host || '', config);
		},
	} as PluginOption;
}
