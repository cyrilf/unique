import type Random from '$lib/helpers/random';
import type { Palette } from '$lib/types';

const luxuryColorPalette: Palette = [
	'#663399', // Royal Purple
	'#B03060', // Maroon
	'#FFD700', // Gold
	'#800000', // Crimson
	'#8B4513', // Saddle Brown
	'#6B8E23' // Olive Drab
];

const getRandomColorFromPalette = (palette: Palette, random: Random) => random.choose(palette);
export const getRandomColor = (random: Random) =>
	getRandomColorFromPalette(luxuryColorPalette, random);

// implemented fix by @lakshaybhushan
// Fixed issue #1
export const getHueFilter = (random: Random) => {
	const hue = Math.floor(random.float() * 360); // Generate a random hue value between 0 and 359
	const saturation = Math.floor(random.float() * 101); // Generate a random saturation value between 0 and 100
	const lightness = Math.floor(random.float() * 101); // Generate a random lightness value between 0 and 100

	return `hsl(${hue}, ${saturation}%, ${lightness}%)`; // Return an HSL color string with random hue, saturation, and lightness
};
