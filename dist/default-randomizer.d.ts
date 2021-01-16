import RandomSeedFactory from "./random-seed-factory";
import seedrandom = require("seedrandom");
export default class DefaultRandomzer extends RandomSeedFactory {
    seed: string | undefined;
    randomSource: seedrandom.prng;
    constructor();
    rr(min: number, max: number): number;
    random(): number;
    createSeed(): RandomSeedFactory;
    getSeed(): string | undefined;
    setSeed(seed: string): RandomSeedFactory;
}
