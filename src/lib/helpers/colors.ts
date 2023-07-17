import { pickOneRandomly } from '$lib/helpers/random';

const luxuryColorPalette: Palette = [
	'#663399', // Royal Purple
	'#B03060', // Maroon
	'#FFD700', // Gold
	'#800000', // Crimson
	'#8B4513', // Saddle Brown
	'#6B8E23' // Olive Drab
];

const getRandomColorFromPalette = (palette: Palette) => pickOneRandomly(palette);
export const getRandomColor = () => getRandomColorFromPalette(luxuryColorPalette);
export const getHueFilter = () => 'hue-rotate(' + Math.floor(Math.random() * 360) + 'deg)';
