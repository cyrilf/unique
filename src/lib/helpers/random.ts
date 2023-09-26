import seedrandom from 'seedrandom';

class Random {
	seed: string | undefined;
	#generator: seedrandom.PRNG;

	constructor(seed: string | undefined) {
		this.seed = seed;
		this.#generator = seedrandom(seed);
	}

	int(min = 0, max = 1) {
		return Math.floor(this.#generator() * (max - min)) + min;
	}

	float(min = 0, max = 1) {
		return this.#generator() * (max - min) + min;
	}

	boolean() {
		return this.#generator() > 0.5;
	}

	choose<T>(items: T[]) {
		return items[this.int(items.length)];
	}
}

export default Random;
