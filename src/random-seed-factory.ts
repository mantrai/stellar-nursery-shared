import RollResults from './roll-results';

export default abstract class RandomSeedFactory {
    public abstract createSeed(): RandomSeedFactory;

    public abstract setSeed(seed: string): RandomSeedFactory;

    public abstract getSeed(): string | undefined;

    public abstract between(min: number, max: number): number;

    public abstract random(): number;

    protected getRollResult<T>(arr: RollResults<T>[], rr: number, or: T): T {
        const result: RollResults<T> | undefined = arr.find((value) => {
            return rr <= value.max;
        });

        return result === undefined ? or : result.data;
    }
}
