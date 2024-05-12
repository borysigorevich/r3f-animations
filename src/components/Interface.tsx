import React from 'react';
import { useCharacterAnimation } from '../context/CharacterAnimationContextProvider.tsx';
import {
	CameraModes,
	useCharacterCustomization,
} from '../context/CharacterCustomizationContextProvider.tsx';
import { cn } from '../utils/cn.ts';
import { BottomConfigurator } from './BottomConfigurator.tsx';
import { HeadConfigurator } from './HeadConfigurator.tsx';
import { TopConfigurator } from './TopConfigurator.tsx';
import { FaCameraRetro } from 'react-icons/fa';

export const Interface = () => {
	const { animations, setAnimationIndex, animationIndex } = useCharacterAnimation();
	const { setCameraMode, cameraMode, setTakeScreenshot } = useCharacterCustomization();

	return (
		<>
			<FaCameraRetro
				className={'fixed left-10 top-10 cursor-pointer'}
				size={32}
				onClick={() => setTakeScreenshot(true)}
			/>

			<span className="fixed top-10 right-10 isolate grid rounded-md shadow-sm">
				<p className="text-xl uppercase font-bold ml-auto">Camera Mode</p>
				<div className="mt-3">
					{Object.keys(CameraModes).map((mode, index) => (
						<button
							key={index}
							className={cn(
								'relative -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 transition duration-300',
								{
									'bg-gray-200 hover:bg-gray-200 hover:opacity-80':
										cameraMode === mode,
								}
							)}
							onClick={() => setCameraMode(mode as CameraModes)}
						>
							{mode}
						</button>
					))}
				</div>
			</span>

			<div className="fixed top-[156px] right-10">
				{cameraMode === CameraModes.HEAD && <HeadConfigurator />}
				{cameraMode === CameraModes.TOP && <TopConfigurator />}
				{cameraMode === CameraModes.BOTTOM && <BottomConfigurator />}
			</div>

			<span className="fixed bottom-10 right-10 isolate grid rounded-md shadow-sm">
				<p className="text-xl uppercase font-bold ml-auto">Animations</p>
				<div className="mt-3">
					{animations.map((animation, index) => (
						<button
							key={index}
							className={cn(
								'relative -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 transition duration-300',
								{
									'bg-gray-200 hover:bg-gray-200 hover:opacity-80':
										index === animationIndex,
								}
							)}
							onClick={() => setAnimationIndex(index)}
						>
							{animation}
						</button>
					))}
				</div>
			</span>
		</>
	);
};
