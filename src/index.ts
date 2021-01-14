import DefaultRandomizer from "./default-randomizer";

let ran = new DefaultRandomizer();
ran.createSeed();
console.log(ran.rr(1, 100));
