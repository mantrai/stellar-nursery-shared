import { BaseOrbitTypes, Separation, Zone } from '../enums';

export default class BaseOrbit {
    name: string = '';
    type: string = '';
    orbitGroup: string = '';
    orbitClass: string = '';
    orbitType: string = '';
    orbitSubType: string = '';
    orbitBase: number = BaseOrbitTypes.None;
    orbitZone: number = Zone.Epistellar;
    description: string = '';
    size: number = 0;
    atmosphere: number = 0;
    hydrosphere: number = 0;
    biosphere: number = 0;
    chemistry: string = '';
    desirability: number = 0;
    habitation: number = 0;
    separation: number = Separation.None;
    orbits: BaseOrbit[] = [];

    import(updated: object): this {
        const keys: string[] = Object.keys(this);
        const self: any = this;
        Object.entries(updated).forEach((entity) => {
            const key: string = entity[0];
            const value: any = entity[1];
            if (keys.includes(key)) {
                self[key] = value;
            }
        });

        return this;
    }
}
