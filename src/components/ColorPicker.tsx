import React, { useId } from 'react';

export const ColorPicker = ({
	onChange,
	value,
	label,
}: {
	onChange: (color: string) => void;
	value: string;
	label: string;
}) => {
	const id = useId();

	return (
		<div
			className={
				'flex gap-2 ml-auto items-center bg-white  rounded-lg px-2 py-1 cursor-pointer shadow-[0_0_2px_rgb(0_0_0/40%)] w-full'
			}
		>
			<input
				id={id}
				type="color"
				className="h-6 w-10 cursor-pointer disabled:opacity-50 disabled:pointer-events-none bg-transparent"
				value={value}
				title="Choose your color"
				onChange={(e) => onChange(e.target.value)}
			/>

			<label
				className={'text-base font-bold text-gray-500 cursor-pointer'}
				htmlFor={id}
			>
				{label}
			</label>
		</div>
	);
};
