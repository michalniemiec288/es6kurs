class Kalkulator {
    static registerAction(target, cb) {
        target.addEventListener("click", cb);
    }

    constructor() {
        this.name = document.querySelector("#name");
        this.method = document.querySelector("#method");
        this.button = document.querySelector("button");

        Kalkulator.registerAction(this.button, () =>
            this.sendAction({
                name: this.name.value,
                method: this.method.value,
            })
        );  
    }

    sendAction({ value }) {

    }
}

export default Kalkulator;
