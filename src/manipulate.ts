import RandomSeedFactory from './random-seed-factory';

export function getValues<K, O>(source: Map<K, O[]>, key: K, or: O[]): O[] {
    return source.has(key) ? (source.get(key) as O[]) : (or as O[]);
}

export function replaceValues<K, O>(source: Map<K, O[]>, key: K, values: O[]) {
    source.set(key, values);
}

export function appendValues<K, O>(source: Map<K, O[]>, key: K, values: O[]) {
    source.set(key, mergeUniqueArrays<K, O>(source.get(key), values));
}

export function shuffleValues<K, O>(source: Map<K, O[]>, key: K, rand: RandomSeedFactory) {
    replaceValues<K, O>(source, key, shuffle(source.get(key), rand));
}

export function getRandomValue<K, O>(source: Map<K, O[]>, key: K, rand: RandomSeedFactory): O | boolean {
    const values: O[] = source.has(key) ? (source.get(key) as O[]) : ([] as O[]);
    const len = values.length - 1;
    return values[rand.between(0, len)];
}

export function mergeUniqueArrays<K, O>(arr1: O[] | undefined, arr2: O[]) {
    if (arr1 === undefined) {
        return arr2;
    }

    return Array.from(new Set([...arr1, ...arr2])) as O[];
}

export function shuffle<T>(arr1: T[] | undefined, rand: RandomSeedFactory): T[] {
    if (arr1 === undefined) {
        return [];
    }
    let currentIndex = arr1.length;
    let temporaryValue;
    let randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(rand.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = arr1[currentIndex];
        arr1[currentIndex] = arr1[randomIndex];
        arr1[randomIndex] = temporaryValue;
    }
    return arr1;
}
