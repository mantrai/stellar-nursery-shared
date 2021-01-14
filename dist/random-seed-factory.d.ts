export default abstract class RandomSeedFactory {
    abstract createSeed(): RandomSeedFactory;
    abstract setSeed(seed: string): RandomSeedFactory;
    abstract getSeed(): string | undefined;
    abstract rr(min: number, max: number): number;
}
