export class Character {
    value: string;
    isEnabled: boolean;

    constructor(value: string, isEnable: boolean) {
        this.value = value;
        this.isEnabled = !!isEnable;
    }
}
