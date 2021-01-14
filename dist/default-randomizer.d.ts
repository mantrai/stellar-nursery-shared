import RandomSeedFactory from "./random-seed-factory";
import seedrandom from "seedrandom";
export default class DefaultRandomzer extends RandomSeedFactory {
    seed: string | undefined;
    randomSource: seedrandom.prng;
    constructor();
    rr(min: number, max: number): number;
    createSeed(): RandomSeedFactory;
    getSeed(): string | undefined;
    setSeed(seed: string): RandomSeedFactory;
}
