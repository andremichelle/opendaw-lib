import { int, unitValue } from "./lang"

export class Random {
	static Default: Random = new Random(0x3456789A)

	#seed: int = 0

	constructor(seed: int) {this.setSeed(seed)}

	setSeed(value: int): void {this.#seed = value & 0xFFFFFFFF}
	nextDouble(min: number, max: number): number {return min + this.uniform() * (max - min)}
	nextInt(min: int, max: int): int {return min + Math.floor(this.uniform() * (max - min))}
	nextElement<T>(array: ArrayLike<T>): T {return array[Math.floor(this.uniform() * array.length)]}
	nextBoolean(): boolean {return this.uniform() < 0.5}

	uniform(): unitValue {
		// Mulberry32
		let t = this.#seed += 0x6D2B79F5
		t = Math.imul(t ^ t >>> 15, t | 1)
		t ^= t + Math.imul(t ^ t >>> 7, t | 61)
		return ((t ^ t >>> 14) >>> 0) / 4294967296.0
	}
}