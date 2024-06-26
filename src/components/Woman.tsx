/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/woman.gltf 
*/

import { useAnimations, useGLTF } from '@react-three/drei';
import React, { useEffect, useRef } from 'react';
import { SkinnedMesh } from 'three';
import { useCharacterAnimation } from '../context/CharacterAnimationContextProvider.tsx';
import { useCharacterCustomization } from '../context/CharacterCustomizationContextProvider.tsx';

export function Woman(props) {
	const { setAnimations, animationIndex, animations } = useCharacterAnimation();
	const {
		hairColor,
		glassesColor,
		mouthColor,
		eyesColor,
		shirtColor,
		skinColor,
		pantsColor,
		lacesColor,
		shoesColor,
		soleColor,
		morphTargetDictionary,
		morphTargetInfluences,
		setMorphTargetDictionary,
		setMorphTargetInfluences,
	} = useCharacterCustomization();

	const group = useRef();
	const {
		nodes,
		materials,
		animations: gltfAnimations,
	} = useGLTF('/models/woman.gltf');
	const { actions, names } = useAnimations(gltfAnimations, group);

	const mesh19 = nodes.Mesh019 as SkinnedMesh;
	const mesh19_1 = nodes.Mesh019_1 as SkinnedMesh;
	const mesh19_2 = nodes.Mesh019_2 as SkinnedMesh;
	const mesh19_3 = nodes.Mesh019_3 as SkinnedMesh;
	const mesh19_4 = nodes.Mesh019_4 as SkinnedMesh;
	const mesh19_5 = nodes.Mesh019_5 as SkinnedMesh;
	const mesh19_6 = nodes.Mesh019_6 as SkinnedMesh;
	const mesh19_7 = nodes.Mesh019_7 as SkinnedMesh;
	const mesh19_8 = nodes.Mesh019_8 as SkinnedMesh;
	const mesh19_9 = nodes.Mesh019_9 as SkinnedMesh;

	useEffect(() => {
		const action = actions[animations[animationIndex]];

		if (!action) return;

		action.reset().fadeIn(0.5).play();

		return () => {
			action.fadeOut(0.5);
		};
	}, [actions, animationIndex, animations]);

	useEffect(() => {
		setAnimations(names);
	}, [names]);

	return (
		<group ref={group} {...props} dispose={null}>
			<group name="Scene">
				<group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
					<primitive object={nodes.mixamorigHips} />
					<group name="SM_Chr_Developer_Female_02">
						<skinnedMesh
							name="Mesh019"
							geometry={mesh19.geometry}
							skeleton={mesh19.skeleton}
							castShadow
						>
							<meshStandardMaterial
								{...materials.Glasses}
								color={glassesColor}
							/>
						</skinnedMesh>
						<skinnedMesh
							name="Mesh019_1"
							geometry={mesh19_1.geometry}
							skeleton={mesh19_1.skeleton}
							castShadow
						>
							<meshStandardMaterial {...materials.Eyes} color={eyesColor} />
						</skinnedMesh>
						<skinnedMesh
							name="Mesh019_2"
							geometry={mesh19_2.geometry}
							skeleton={mesh19_2.skeleton}
							castShadow
						>
							<meshStandardMaterial {...materials.Hair} color={hairColor} />
						</skinnedMesh>
						<skinnedMesh
							name="Mesh019_3"
							geometry={mesh19_3.geometry}
							skeleton={mesh19_3.skeleton}
							castShadow
						>
							<meshStandardMaterial {...materials.Skin} color={skinColor} />
						</skinnedMesh>
						<skinnedMesh
							name="Mesh019_4"
							geometry={mesh19_4.geometry}
							skeleton={mesh19_4.skeleton}
							castShadow
						>
							<meshStandardMaterial
								{...materials.Mouth}
								color={mouthColor}
							/>
						</skinnedMesh>
						<skinnedMesh
							name="Mesh019_5"
							geometry={mesh19_5.geometry}
							skeleton={mesh19_5.skeleton}
							castShadow
						>
							<meshStandardMaterial
								{...materials.Shirt}
								color={shirtColor}
							/>
						</skinnedMesh>
						<skinnedMesh
							name="Mesh019_6"
							geometry={mesh19_6.geometry}
							skeleton={mesh19_6.skeleton}
							castShadow
						>
							<meshStandardMaterial
								{...materials.Pants}
								color={pantsColor}
							/>
						</skinnedMesh>
						<skinnedMesh
							name="Mesh019_7"
							geometry={mesh19_7.geometry}
							skeleton={mesh19_7.skeleton}
							castShadow
						>
							<meshStandardMaterial
								{...materials.Shoe}
								color={shoesColor}
							/>
						</skinnedMesh>
						<skinnedMesh
							name="Mesh019_8"
							geometry={mesh19_8.geometry}
							skeleton={mesh19_8.skeleton}
							castShadow
						>
							<meshStandardMaterial
								{...materials.Laces}
								color={lacesColor}
							/>
						</skinnedMesh>
						<skinnedMesh
							name="Mesh019_9"
							geometry={mesh19_9.geometry}
							skeleton={mesh19_9.skeleton}
							castShadow
						>
							<meshStandardMaterial {...materials.Sole} color={soleColor} />
						</skinnedMesh>
					</group>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload('/models/woman.gltf');
