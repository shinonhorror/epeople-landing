import { useState, useEffect, useRef } from 'react';

const useOnScreen = (ref: React.RefObject<HTMLElement | null>) => {
	const [isIntersecting, setIntersecting] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIntersecting(true);
					observer.disconnect();
				}
			},
			{
				rootMargin: '0px',
				threshold: 0.1,
			},
		);

		const currentRef = ref.current;
		if (currentRef) {
			observer.observe(currentRef);
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
		};
	}, [ref]);

	return isIntersecting;
};

export default useOnScreen;
