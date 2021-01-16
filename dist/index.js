"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const default_randomizer_1 = __importDefault(require("./default-randomizer"));
let ran = new default_randomizer_1.default();
ran.createSeed();
console.log(ran.rr(1, 100));
console.log(ran.random());
