export interface InternalRoute {
	path: string | ((param: string) => string);
	href?: never;
	name: string | ((param: string) => string);
	ariaLabel: string | ((param: string) => string);
}
export interface ExternalRoute {
	path?: never;
	href: string;
	name: string;
	ariaLabel: string;
}
export type Route = InternalRoute | ExternalRoute;

const BASE_PATH = $env.BASE_PATH || '';

export const ROUTE = (<const>{
	top: {
		path: `${BASE_PATH}/`,
		name: 'Top',
		ariaLabel: 'トップページへ遷移',
	},

	about: {
		path: `${BASE_PATH}/about`,
		name: 'About',
		ariaLabel: '会社概要ページへ遷移',
	},

	services: {
		path: `${BASE_PATH}/services`,
		name: 'Service',
		ariaLabel: 'サービス一覧ページへ遷移',
	},

	service: {
		path: (id: string) => `${BASE_PATH}/services/${id}`,
		name: 'Service',
		ariaLabel: 'サービス詳細ページへ遷移',
	},

	member: {
		path: `${BASE_PATH}/member`,
		name: 'Member',
		ariaLabel: 'メンバー紹介ページへ遷移',
	},

	blogs: {
		path: `${BASE_PATH}/blogs`,
		name: 'News&Reports',
		ariaLabel: 'お知らせ & レポートページへ遷移',
	},

	blog: {
		path: (id: string) => `${BASE_PATH}/blogs/${id}`,
		name: 'News&Report',
		ariaLabel: (title: string) => `${title}の記事へ遷移`,
	},

	contact: {
		// path: `${BASE_PATH}/contact`,
		href: 'https://forms.gle/fB1XMDEJjVGGBGX76',
		name: 'Contact',
		ariaLabel: 'お問い合わせページへ遷移',
	},

	privacy: {
		path: `${BASE_PATH}/privacy`,
		name: 'Privacy',
		ariaLabel: 'プライバシーポリシーページへ遷移',
	},

	terms: {
		path: `${BASE_PATH}/terms`,
		name: 'Terms',
		ariaLabel: '利用規約ページへ遷移',
	},

	recruit: {
		href: 'https://recruit.itnav.co.jp',
		name: 'Recruit',
		ariaLabel: 'イトナブのリクルートサイトを開く',
	},

	recruitInfo: {
		href: 'https://recruit.itnav.co.jp/information',
		name: 'Recruit Info',
		ariaLabel: 'イトナブの採用情報に関するサイトを開く',
	},
}) satisfies Record<string, Route>;
