import { Canvas } from '@react-three/fiber';
import React from 'react';
import { CustomCursor } from './components/CustomCursor.tsx';
import { Experience } from './components/Experience.tsx';
import { Interface } from './components/Interface.tsx';
import { CharacterAnimationContextProvider } from './context/CharacterAnimationContextProvider.tsx';
import { CharacterCustomizationContextProvider } from './context/CharacterCustomizationContextProvider.tsx';

function App() {
	return (
		<div className={'h-full'}>
			<CharacterCustomizationContextProvider>
				<CharacterAnimationContextProvider>
					<Canvas
						shadows
						camera={{ position: [1, 1.5, 2.5], fov: 50 }}
						gl={{
							preserveDrawingBuffer: true,
						}}
					>
						<Experience />
					</Canvas>
					<Interface />
				</CharacterAnimationContextProvider>
			</CharacterCustomizationContextProvider>
			<CustomCursor />
		</div>
	);
}

export default App;
