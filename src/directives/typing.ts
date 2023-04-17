export interface VisibleDirectiveProps extends IntersectionObserverInit {
	class?: string;
}

export function typing(node: Element) {
	// IntersectionObserverを作成し、そのコールバック関数に渡されるentries配列から最初のentryがページ内に入っているかどうかを確認
	const observer = new IntersectionObserver((entries) => {
		if (entries[0].isIntersecting) {
			const targetNode = node.cloneNode(false) as Element;

			node.setAttribute('style', 'position: relative; visibility: hidden');
			targetNode.setAttribute(
				'style',
				'position: absolute; visibility: initial; top: 0; left: 0;',
			);

			let targetContent = new Text();

			targetNode.appendChild(targetContent);

			const children = node.childNodes;
			const childLength = children.length;

			node.appendChild(targetNode);

			(async () => {
				for (let index = 0; index < childLength; index++) {
					const child = children.item(index);
					if (child.nodeName === 'BR') {
						const br = child.cloneNode(true);
						targetNode.appendChild(br);
						targetContent = new Text();
						targetNode.appendChild(targetContent);
						continue;
					}

					const textContent = child.textContent;

					// textContentがないときにループをスキップする
					if (!textContent) continue;

					const chars = textContent.trim().split('');
					const charLength = chars.length;

					for (let i = 0; i < charLength; i++) {
						targetContent.textContent += chars[i];
						await new Promise<void>((resolve) =>
							setTimeout(() => resolve(), 10),
						);
					}
				}
			})();
			observer.disconnect();
		}
	});
	observer.observe(node);
}
