import { Component } from 'preact';

export default function({ rotate, size }) {
	const style = {
		transform: `rotate(${rotate}deg)`,
		width: size,
		height: size
	};
	return (
		<svg
			fill="currentColor"
			style={style}
			height="24"
			viewBox="0 0 24 24"
			width="24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M0 0h24v24H0z" fill="none" />
			<path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
		</svg>
	);
}
