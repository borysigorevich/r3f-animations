import { useThree } from '@react-three/fiber';
import React, { Suspense, useEffect } from 'react';
import { useCharacterCustomization } from '../context/CharacterCustomizationContextProvider.tsx';
import { CameraControls } from './CameraControls.tsx';
import { Woman } from './Woman.tsx';

export const Experience = () => {
	const { takeScreenshot, setTakeScreenshot } = useCharacterCustomization();

	const canvas = useThree((state) => state.gl.domElement);

	const screenshot = () => {
		const image = canvas
			.toDataURL('image/png')
			.replace('image/png', 'image/octet-stream');
		const a = document.createElement('a');
		a.href = image;
		a.download = 'screenshot.png';
		a.click();
		setTakeScreenshot(false);
	};

	useEffect(() => {
		if (takeScreenshot) {
			screenshot();
		}
	}, [takeScreenshot]);

	return (
		<>
			<CameraControls />
			<group position={[0, -1, 0]}>
				<Suspense fallback={null}>
					<Woman />
				</Suspense>
			</group>
			<mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1, 0]} receiveShadow>
				<planeGeometry args={[10, 10, 1, 1]} />
				<shadowMaterial transparent opacity={0.2} />
			</mesh>
			<ambientLight />
			<directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize={1024} />
		</>
	);
};
