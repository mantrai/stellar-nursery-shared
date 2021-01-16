import RandomSeedFactory from "./random-seed-factory";
import seedrandom = require("seedrandom");

export default class DefaultRandomzer extends RandomSeedFactory {
    seed: string | undefined;
    randomSource;
    constructor() {
        super();
        this.createSeed();
        this.randomSource = seedrandom(this.seed);
    }

    rr(min: number, max: number): number {
        return Math.floor(this.randomSource() * (max - min + 1) + min);
    }

    random(): number {
        return this.randomSource();
    }

    createSeed(): RandomSeedFactory {
        this.seed = Math.floor(Math.random() * 100000000000000000).toString();
        this.randomSource = seedrandom(this.seed);
        return this;
    }

    getSeed(): string | undefined {
        return this.seed;
    }

    setSeed(seed:string): RandomSeedFactory {
        this.seed = seed;
        this.randomSource = seedrandom(this.seed);
        return this;
    }

}
