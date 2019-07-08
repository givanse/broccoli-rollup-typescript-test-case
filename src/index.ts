import leftPad from "left-pad";

class FooBar {

    private str: String;

    constructor() {
      this.str = leftPad('foo', 6);
    }

    getStr(): string {
      return this.str;
    }

}

export default new FooBar();
