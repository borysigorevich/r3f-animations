import React from 'react';
import { useCharacterAnimation } from '../context/CharacterAnimationContextProvider.tsx';
import { cn } from '../utils/cn.ts';

export const Interface = () => {
	const { animations, setAnimationIndex, animationIndex } = useCharacterAnimation();

	return (
		<div className={'fixed bottom-10 right-10'}>
			<span className="isolate inline-flex rounded-md shadow-sm">
				{animations.map((animation, index) => (
					<button
						key={index}
						className={cn(
							'relative -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 transition duration-300',
							{
								'bg-gray-200 hover:bg-gray-200 hover:opacity-80':
									index === animationIndex,
							}
						)}
						onClick={() => setAnimationIndex(index)}
					>
						{animation}
					</button>
				))}
			</span>
		</div>
	);
};
