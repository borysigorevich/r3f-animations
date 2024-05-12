import React from 'react';
import { useCharacterCustomization } from '../context/CharacterCustomizationContextProvider.tsx';
import { ColorPicker } from './ColorPicker.tsx';

export const BottomConfigurator = () => {
	const {
		pantsColor,
		setPantsColor,
		shoesColor,
		setShoesColor,
		lacesColor,
		setLacesColor,
		soleColor,
		setSoleColor,
	} = useCharacterCustomization();

	const handlePantsColorChange = (color) => {
		setPantsColor(color);
	};

	const handleShoesColorChange = (color) => {
		setShoesColor(color);
	};

	const handleLacesColorChange = (color) => {
		setLacesColor(color);
	};

	const handleSoleColorChange = (color) => {
		setSoleColor(color);
	};

	return (
		<>
			<p className={'font-bold text-lg uppercase'}>Bottom Configurator</p>
			<div className={'grid  gap-2 mt-2'}>
				<ColorPicker
					value={pantsColor}
					onChange={handlePantsColorChange}
					label={'Pants Color'}
				/>

				<ColorPicker
					value={shoesColor}
					onChange={handleShoesColorChange}
					label={'Shoes Color'}
				/>

				<ColorPicker
					value={lacesColor}
					onChange={handleLacesColorChange}
					label={'Laces Color'}
				/>

				<ColorPicker
					value={soleColor}
					onChange={handleSoleColorChange}
					label={'Sole Color'}
				/>
			</div>
		</>
	);
};
