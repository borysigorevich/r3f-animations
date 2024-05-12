import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Experience } from './components/Experience.tsx';
import { Interface } from './components/Interface.tsx';
import { CharacterAnimationContextProvider } from './context/CharacterAnimationContextProvider.tsx';

function App() {
	return (
		<div className={'h-full'}>
			<CharacterAnimationContextProvider>
				<Canvas shadows camera={{ position: [1, 1.5, 2.5], fov: 50 }}>
					<Experience />
					<OrbitControls />
				</Canvas>
				<Interface />
			</CharacterAnimationContextProvider>
		</div>
	);
}

export default App;
