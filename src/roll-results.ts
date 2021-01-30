export default class RollResults<T> {
    max: number = 0;
    data: T;

    constructor(max: number, data: T) {
        this.max = max;
        this.data = data;
    }
}
