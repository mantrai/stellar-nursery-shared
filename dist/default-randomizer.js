"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const random_seed_factory_1 = __importDefault(require("./random-seed-factory"));
const seedrandom_1 = __importDefault(require("seedrandom"));
class DefaultRandomzer extends random_seed_factory_1.default {
    constructor() {
        super();
        this.createSeed();
        this.randomSource = seedrandom_1.default(this.seed);
    }
    rr(min, max) {
        return Math.floor(this.randomSource() * (max - min + 1) + min);
    }
    createSeed() {
        this.seed = Math.floor(Math.random() * 100000000000000000).toString();
        this.randomSource = seedrandom_1.default(this.seed);
        return this;
    }
    getSeed() {
        return this.seed;
    }
    setSeed(seed) {
        this.seed = seed;
        this.randomSource = seedrandom_1.default(this.seed);
        return this;
    }
}
exports.default = DefaultRandomzer;