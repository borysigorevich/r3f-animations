import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Experience } from './components/Experience.tsx';

function App() {
	return (
		<div className={'h-full'}>
			<Canvas
				shadows
				camera={{
					position: [0, 2, 7],
					fov: 45,
				}}
			>
				<fog attach="fog" args={['#101010', 10, 20]} />

				<Experience />
				<color attach={'background'} args={['#101010']} />
			</Canvas>
		</div>
	);
}

export default App;
