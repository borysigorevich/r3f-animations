import React, { ComponentRef, useLayoutEffect, useRef } from 'react';

const CURSOR_SPEED = 0.08;

let mouseX = 0;
let mouseY = 0;
let outlineX = 0;
let outlineY = 0;

export const CustomCursor = () => {
	const cursorRef = useRef<ComponentRef<'div'>>(null);
	const outlineCursorRef = useRef<ComponentRef<'div'>>(null);

	const animate = () => {
		if (!cursorRef.current || !outlineCursorRef.current) return;

		const distX = mouseX - outlineX;
		const distY = mouseY - outlineY;

		outlineX += distX * CURSOR_SPEED;
		outlineY += distY * CURSOR_SPEED;

		cursorRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
		outlineCursorRef.current.style.transform = `translate(${outlineX}px, ${outlineY}px)`;

		requestAnimationFrame(animate);
	};

	useLayoutEffect(() => {
		const listener = (event: MouseEvent) => {
			mouseX = event.clientX;
			mouseY = event.clientY;
		};

		document.addEventListener('mousemove', listener);
		const animateFrame = requestAnimationFrame(animate);

		return () => {
			document.removeEventListener('mousemove', listener);
			cancelAnimationFrame(animateFrame);
		};
	}, []);

	return (
		<>
			<div
				ref={cursorRef}
				className={
					'fixed left-0 top-0 w-4 h-4 bg-black rounded-full pointer-events-none'
				}
			/>

			<div
				ref={outlineCursorRef}
				className={
					'fixed left-0 top-0 w-8 h-8 bg-transparent border-2 border-black rounded-full pointer-events-none'
				}
			/>
		</>
	);
};
