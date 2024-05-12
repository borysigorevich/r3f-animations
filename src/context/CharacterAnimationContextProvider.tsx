import React, { PropsWithChildren, useState } from 'react';

export enum Animations {
	GuitarPlaying = 'GuitarPlaying',
	Idle = 'Idle',
	Running = 'Running',
	SalsaDancing = 'SalsaDancing',
	TPose = 'TPose',
}

const CharacterAnimationContext = React.createContext({
	animation: Animations.Idle,
	setAnimation: (animation: Animations) => {},
	animationIndex: 0,
	setAnimationIndex: (index: number) => {},
	animations: [],
	setAnimations: (animations: string[]) => {},
});

export const CharacterAnimationContextProvider = ({ children }: PropsWithChildren) => {
	const [animation, setAnimation] = useState(Animations.Idle);
	const [animationIndex, setAnimationIndex] = useState(0);
	const [animations, setAnimations] = useState([]);

	return (
		<CharacterAnimationContext.Provider
			value={{
				animation,
				setAnimation,
				animationIndex,
				setAnimationIndex,
				animations,
				setAnimations,
			}}
		>
			{children}
		</CharacterAnimationContext.Provider>
	);
};

export const useCharacterAnimation = () => {
	return React.useContext(CharacterAnimationContext);
};
