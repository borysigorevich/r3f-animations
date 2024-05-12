import React from 'react';
import { useCharacterCustomization } from '../context/CharacterCustomizationContextProvider.tsx';
import { ColorPicker } from './ColorPicker.tsx';

export const TopConfigurator = () => {
	const { shirtColor, setShirtColor, skinColor, setSkinColor } =
		useCharacterCustomization();

	const handleShirtColorChange = (color) => {
		setShirtColor(color);
	};

	const handleSkinColorChange = (color) => {
		setSkinColor(color);
	};

	return (
		<>
			<p className={'font-bold text-lg uppercase'}>Top Configurator</p>
			<div className={'grid  gap-2 mt-2'}>
				<ColorPicker
					value={skinColor}
					onChange={handleSkinColorChange}
					label={'Skin Color'}
				/>

				<ColorPicker
					value={shirtColor}
					onChange={handleShirtColorChange}
					label={'Shirt Color'}
				/>
			</div>
		</>
	);
};
