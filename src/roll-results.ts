export default class RollResults<T> {
    constructor(max: number, data:T) {
        this.max = max;
        this.data = data;
    }
    max: number = 0;
    data: T;
}
