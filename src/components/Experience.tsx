import React, { Suspense } from 'react';
import { Woman } from './Woman.tsx';

export const Experience = () => {
	return (
		<>
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
