export default abstract class RandomSeedFactory {
    public abstract createSeed(): RandomSeedFactory;
    public abstract setSeed(seed:string):RandomSeedFactory;
    public abstract getSeed():string | undefined
    public abstract rr(min: number, max: number): number;
}
