<svelte:options immutable={true} />

<script lang="ts">
	import ItnavLogoSvg from '$lib/svg/ItnavLogoSvg.svelte';
	import { ROUTE } from '@/router';
	import PhoneInTalkIconSvg from './icons/PhoneInTalkIconSvg.svelte';
	import AmatarStudy3LogoPath from './images/amatar-study3-logo.svg';
	import NabukatuLabLogoPath from './images/nabukatu-lab-logo.png';
	import NabukatuLabSeedsLogoPath from './images/nabukatu-lab-seeds-logo.svg';
	import NabukatuPath from './images/nabukatu-logo.svg';
	import YumeAcademyLogoPath from './images/yume-academy-logo.png';
</script>

<footer class="footer">
	<a
		class="link"
		href={ROUTE.contact.href}
		aria-label={ROUTE.contact.ariaLabel}
		target="_blank"
		rel="noopener noreferrer"
		><div class="contact app-mono app-section-padding-x">
			<strong class="heading">CONTACT</strong>
			<div class="arrow" />
		</div>
	</a>

	<div class="footer-content app-section-padding-x">
		<div class="project app-mono">
			<strong class="heading">PROJECT</strong>
			<div class="img-flame-container">
				<div class="img-wrapper-1">
					<a
						class="link"
						href="https://amatar.jp/"
						target="_blank"
						rel="noopener noreferrer"
						><img
							src={AmatarStudy3LogoPath}
							alt="Amatar study 3"
							loading="lazy"
						/></a
					>
					<a
						class="link"
						href="https://yumeaka.jp/"
						target="_blank"
						rel="noopener noreferrer"
						><img
							src={YumeAcademyLogoPath}
							alt="夢アカデミー"
							loading="lazy"
						/></a
					>
				</div>

				<div class="img-wrapper-2">
					<div class="img-content-2">
						<a
							class="link"
							href="https://labweb.jp/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div class="red-flame img-flame-2">
								<img
									class="img-2"
									src={NabukatuLabLogoPath}
									alt="ナブかつLAB"
									loading="lazy"
								/>
							</div>
						</a>

						<a
							class="link"
							href="https://labseeds.jp/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div class="green-flame img-flame-2">
								<img
									class="img-2"
									src={NabukatuLabSeedsLogoPath}
									alt="ナブかつLAB Seeds"
									loading="lazy"
								/>
							</div>
						</a>

						<a
							class="link"
							href="https://nabukatsu.jp/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div class="blue-flame img-flame-2">
								<img
									class="img-2"
									src={NabukatuPath}
									alt="ナブかつ"
									loading="lazy"
								/>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>

		<div class="info">
			<div class="itnav-link">
				<a class="itnav-logo" href={ROUTE.top.path}>
					<ItnavLogoSvg />
				</a>
			</div>

			<div>
				<strong class="address-strong">石巻オフィス</strong>
				<p class="address-p">
					<span>宮城県石巻市大街道北1-1-16 かじやビル2階</span><br />
					<span class="address-span">
						<PhoneInTalkIconSvg />
						<span> 0225-90-4282</span>
					</span>
				</p>

				<strong class="address-strong">東松島オフィス（ 駄菓子屋 ）</strong>
				<p class="address-p">宮城県東松島市矢本河戸14</p>

				<strong class="address-strong">横須賀LAB</strong>
				<p class="address-p">神奈川県横須賀市安浦町2丁目11</p>
			</div>

			<nav class="sitemap app-mono">
				<div>
					<a
						class="site-link"
						href={ROUTE.top.path}
						aria-label={ROUTE.top.ariaLabel}
					>
						{ROUTE.top.name}
					</a>
					<a
						class="site-link"
						href={ROUTE.about.path}
						aria-label={ROUTE.about.ariaLabel}
					>
						{ROUTE.about.name}
					</a>
					<a
						class="site-link"
						href={ROUTE.services.path}
						aria-label={ROUTE.service.ariaLabel}
					>
						{ROUTE.service.name}
					</a>
				</div>

				<div>
					<a
						class="site-link"
						href={ROUTE.member.path}
						aria-label={ROUTE.member.ariaLabel}
					>
						{ROUTE.member.name}
					</a>

					<a
						class="site-link"
						href={ROUTE.blogs.path}
						aria-label={ROUTE.blogs.ariaLabel}
					>
						{ROUTE.blogs.name}
					</a>

					<a
						class="site-link"
						href={ROUTE.recruit.href}
						aria-label={ROUTE.recruit.ariaLabel}
						target="_blank"
						rel="noopener noreferrer"
					>
						{ROUTE.recruit.name}
					</a>

					<a
						class="site-link"
						href={ROUTE.contact.href}
						aria-label={ROUTE.contact.ariaLabel}
					>
						{ROUTE.contact.name}
					</a>
				</div>
			</nav>
		</div>

		<nav class="sub app-en">
			<a href={ROUTE.privacy.path} aria-label={ROUTE.privacy.ariaLabel}>
				Privacy Policy
			</a>
			<br />
			<span>© 2023 ITNAV</span>
		</nav>
	</div>
</footer>

<style scoped lang="scss">
	@use '../../../styles/scss' as *;

	.footer {
		width: 100%;
		margin-top: auto;
		color: $white;
		background-color: $black;
	}

	.heading {
		z-index: 1;
		font-size: 24px;
		letter-spacing: 2.4px;
	}

	.contact {
		position: relative;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 64px;
		padding-bottom: 64px;
		margin-bottom: 24px;
		overflow: hidden;
		&::before {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			content: '';
		}

		&:hover::before {
			background-color: #3e9f78;
			transform: scale(1, 1);
			transform-origin: left;
			animation-name: bg-contact-left-to-right-anime;
			animation-duration: 0.6s;
			animation-fill-mode: forwards;
		}
	}

	.project .link {
		display: contents;
	}

	@keyframes bg-contact-left-to-right-anime {
		0% {
			transform: scaleX(0);
			transform-origin: left;
		}
		50% {
			transform: scaleX(1);
			transform-origin: left;
		}
		50.001% {
			transform-origin: right;
		}
		100% {
			transform: scaleX(0);
			transform-origin: right;
		}
	}

	.arrow {
		width: 120px;
		height: 8px;
		border-right: 4px solid $white;
		border-bottom: 2px solid $white;
		transform: skew(60deg) translateY(-25%);
	}

	.project {
		margin-bottom: 88px;
	}

	.img-flame-container {
		position: relative;
		box-sizing: border-box;
		display: flex;
		gap: 24px;
		align-items: stretch;
		padding: 16px;
	}
	.img-wrapper-1 {
		display: grid;
		grid-template-rows: 1fr 1fr;
		gap: 16px;
		width: 64%;
	}
	.img-wrapper-2 {
		position: relative;
		flex-grow: 1;
	}
	.img-content-2 {
		position: absolute;
		top: 0;
		left: 0;
		display: grid;
		grid-template-rows: 1fr 1fr 1fr;
		grid-template-columns: 1fr;
		gap: 16px;
		align-items: stretch;
		width: 100%;
		height: 100%;
	}
	.img-flame-2 {
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		background-color: $white;
	}
	.img-2 {
		max-width: 80%;
		max-height: 80%;
		object-fit: contain;
	}
	.red-flame {
		border: 6px solid #ec1c24;
	}
	.green-flame {
		border: 6px solid #9ac137;
	}
	.blue-flame {
		border: 6px solid #009fc9;
	}

	.itnav-link {
		display: flex;
		width: 100%;
	}
	.itnav-logo {
		width: 90px;
		margin-bottom: 32px;
	}
	.address-strong {
		font-size: 16px;
		font-weight: 500;
		line-height: 2.4;
		letter-spacing: 2px;
	}
	.address-p {
		margin-bottom: 24px;
		font-size: 14px;
		color: rgba($white, 0.8);
		letter-spacing: 2px;
	}
	.address-span {
		display: flex;
		gap: 8px;
		align-items: center;
	}

	.sitemap {
		margin-bottom: 16px;
	}
	.site-link {
		box-sizing: border-box;
		display: block;
		padding: 12px 0;
		font-size: 24px;
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 2.4px;
		transition: all 0.2s linear;
		&:hover {
			color: $primary;
		}
	}

	.sub {
		margin-bottom: 48px;
		font-size: 14px;
		line-height: 2;
		color: $white-grey;
		text-decoration: none;
	}

	@include pc {
		.heading {
			font-size: 40px;
		}

		.contact {
			padding-top: 96px;
			padding-bottom: 96px;
			margin-bottom: 40px;
		}
		.arrow {
			width: 180px;
			height: 20px;
			border-right: 4px solid $white;
			border-bottom: 2px solid $white;
		}

		.project {
			display: flex;
			justify-content: space-between;
		}
		.img-flame-container {
			flex-direction: column;
			max-width: 50%;
			padding: 0;
			margin-left: 184px;
		}
		.img-wrapper-1 {
			grid-template-rows: 1fr;
			grid-template-columns: 1fr 1fr;
			width: 100%;
		}
		.img-content-2 {
			position: static;
			grid-template-rows: 1fr;
			grid-template-columns: 1fr 1fr 1fr;
		}

		.info {
			box-sizing: border-box;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
		}

		.itnav-logo {
			width: 144px;
		}
		.address-strong {
			font-size: 18px;
		}
		.address-p {
			font-size: 16px;
		}

		.sitemap {
			display: flex;
			gap: 0 80px;
		}

		.sub {
			margin-bottom: 24px;
		}
	}
</style>
