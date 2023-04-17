export interface VisibleDirectiveProps extends IntersectionObserverInit {
	class?: string;
}

export function visible(node: Element, props: VisibleDirectiveProps = {}) {
	if (typeof window === 'undefined') return;

	const { class: className = 'visible', ...options } = props;

	const observer = new IntersectionObserver((entries) => {
		const { isIntersecting, target } = entries[0];
		if (isIntersecting && target) {
			target.classList.add(className);
			observer.disconnect();
		}
	}, options);

	observer.observe(node);

	return {
		destroy: () => observer.disconnect(),
	};
}
