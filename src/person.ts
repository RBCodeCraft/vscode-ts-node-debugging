
export class Person {

    constructor(
        public name: string,
        public age: number) {
    }

    getGreeting() {
        return 'Hi ' + this.name;
    }

}