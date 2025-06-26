'use client';

import React, { FC, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import useOnScreen from '@/hooks/useOnScreen';

interface ITypingText {
	text: string;
	classname: string;
}

const TypingText: FC<ITypingText> = ({ text, classname }) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const isOnScreen = useOnScreen(containerRef);

	useEffect(() => {
		const currentContainer = containerRef.current;

		if (!currentContainer || !isOnScreen) return;

		const letters = text.split('');
		const spanElements = letters
			.map((letter) => `<span style="opacity:0">${letter}</span>`)
			.join('');

		currentContainer.innerHTML = spanElements;

		const spans = currentContainer.querySelectorAll('span');

		gsap.to(spans, {
			opacity: 1,
			duration: 0.05,
			stagger: 0.05,
			ease: 'none',
		});

		return () => {
			gsap.killTweensOf(spans);
		};
	}, [text, isOnScreen]);

	return (
		<div
			ref={containerRef}
			className={classname}
			style={{ display: 'inline-block', width: '100%' }}
		/>
	);
};

export default TypingText;
