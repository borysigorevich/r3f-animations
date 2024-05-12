import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import { Vector3 } from 'three'; // @ts-ignore
import { OrbitControls as OrbitControlsType } from 'three/examples/jsm/controls/OrbitControls';
import {
	CameraModes,
	useCharacterCustomization,
} from '../context/CharacterCustomizationContextProvider.tsx';

const CameraPositions = {
	[CameraModes.HEAD]: {
		position: new Vector3(0, 0.5, 1),
		target: new Vector3(0, 0.5, 0),
	},
	[CameraModes.TOP]: {
		position: new Vector3(-0.5, 0.2, 1.5),
		target: new Vector3(0, 0.2, 0),
	},
	[CameraModes.BOTTOM]: {
		position: new Vector3(0, -0.5, 2.5),
		target: new Vector3(0, -0.5, 0),
	},
};

export const CameraControls = () => {
	const { setCameraMode, cameraMode } = useCharacterCustomization();
	const orbitControlsRef = useRef<OrbitControlsType>(null);

	useFrame((state, delta) => {
		const camera = state.camera;

		if (!orbitControlsRef.current) return;

		if (cameraMode === 'FREE') {
			return;
		}

		camera.position.lerp(CameraPositions[cameraMode].position, 3 * delta);
		orbitControlsRef.current.target.lerp(
			CameraPositions[cameraMode].target,
			3 * delta
		);
	});

	return (
		<>
			<OrbitControls
				ref={orbitControlsRef}
				onStart={() => {
					setCameraMode(CameraModes.FREE);
				}}
			/>
		</>
	);
};
