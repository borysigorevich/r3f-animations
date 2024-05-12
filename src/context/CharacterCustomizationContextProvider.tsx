import React, { PropsWithChildren, useState } from 'react';

export enum CameraModes {
	FREE = 'FREE',
	HEAD = 'HEAD',
	TOP = 'TOP',
	BOTTOM = 'BOTTOM',
}

const CharacterCustomizationContext = React.createContext({
	cameraMode: CameraModes.FREE,
	setCameraMode: (cameraMode: CameraModes) => {},
	hairColor: '#faf',
	setHairColor: (hairColor: string) => {},
	eyesColor: '#ffa',
	setEyesColor: (eyesColor: string) => {},
	mouthColor: '#f00',
	setMouthColor: (mouthColor: string) => {},
	glassesColor: '#00f',
	setGlassesColor: (glassesColor: string) => {},
	shirtColor: '#0f0',
	setShirtColor: (shirtColor: string) => {},
	pantsColor: '#0ff',
	setPantsColor: (pantsColor: string) => {},
	shoesColor: '#ff0',
	setShoesColor: (shoesColor: string) => {},
	skinColor: '#ff0',
	setSkinColor: (skinColor: string) => {},
	lacesColor: '#ff0',
	setLacesColor: (lacesColor: string) => {},
	soleColor: '#ff0',
	setSoleColor: (soleColor: string) => {},
});

export const CharacterCustomizationContextProvider = ({
	children,
}: PropsWithChildren) => {
	const [cameraMode, setCameraMode] = useState(CameraModes.FREE);
	const [hairColor, setHairColor] = useState('#ffaaff');
	const [eyesColor, setEyesColor] = useState('#ffffaa');
	const [mouthColor, setMouthColor] = useState('#ff0000');
	const [glassesColor, setGlassesColor] = useState('#0000ff');
	const [shirtColor, setShirtColor] = useState('#00ff00');
	const [pantsColor, setPantsColor] = useState('#00fffa');
	const [shoesColor, setShoesColor] = useState('#f0fafa');
	const [skinColor, setSkinColor] = useState('#ffeeaa');
	const [lacesColor, setLacesColor] = useState('#aabbff');
	const [soleColor, setSoleColor] = useState('#ffff00');

	return (
		<CharacterCustomizationContext.Provider
			value={{
				cameraMode,
				setCameraMode,
				hairColor,
				setHairColor,
				eyesColor,
				setEyesColor,
				mouthColor,
				setMouthColor,
				glassesColor,
				setGlassesColor,
				shirtColor,
				setShirtColor,
				pantsColor,
				setPantsColor,
				shoesColor,
				setShoesColor,
				skinColor,
				setSkinColor,
				lacesColor,
				setLacesColor,
				soleColor,
				setSoleColor,
			}}
		>
			{children}
		</CharacterCustomizationContext.Provider>
	);
};

export const useCharacterCustomization = () => {
	return React.useContext(CharacterCustomizationContext);
};
