import React from 'react';
import { useCharacterCustomization } from '../context/CharacterCustomizationContextProvider.tsx';
import { ColorPicker } from './ColorPicker.tsx';

export const HeadConfigurator = () => {
	const {
		hairColor,
		setHairColor,
		eyesColor,
		setEyesColor,
		mouthColor,
		setMouthColor,
		glassesColor,
		setGlassesColor,
	} = useCharacterCustomization();

	const handleHairColorChange = (color) => {
		setHairColor(color);
	};

	const handleEyesColorChange = (color) => {
		setEyesColor(color);
	};

	const handleMouthColorChange = (color) => {
		setMouthColor(color);
	};

	const handleGlassesColorChange = (color) => {
		setGlassesColor(color);
	};

	return (
		<>
			<p className={'font-bold text-lg uppercase'}>Head Configurator</p>
			<div className={'grid  gap-2 mt-2'}>
				<ColorPicker
					value={hairColor}
					onChange={handleHairColorChange}
					label={'Hair Color'}
				/>

				<ColorPicker
					value={eyesColor}
					onChange={handleEyesColorChange}
					label={'Eyes Color'}
				/>

				<ColorPicker
					value={mouthColor}
					onChange={handleMouthColorChange}
					label={'Mouth Color'}
				/>

				<ColorPicker
					value={glassesColor}
					onChange={handleGlassesColorChange}
					label={'Glasses Color'}
				/>
			</div>
		</>
	);
};
