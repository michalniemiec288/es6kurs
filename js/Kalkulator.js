class Kalkulator {
    static registerAction(target, cb) {
        target.addEventListener("click", cb);
    }

    constructor() {
        this.numbers = document.querySelectorAll(".num");
        this.operators = document.querySelectorAll(".operator");
        this.equal = document.querySelector(".equal");
        this.zero = document.querySelector(".zero");
        this.dot = document.querySelector(".dot");
        this.result = document.querySelector("#result");
        this.remove = document.querySelector("#delete");
        this.activeResult = false;

        this.registerActions();
    }

    registerActions() {
        const { registerAction } = Kalkulator;
        
        this.numbers.forEach(number => registerAction(number, () => this.numberAction(number)));
        this.operators.forEach(operator => registerAction(operator, () => this.operatorAction(operator)));
        registerAction(this.zero, () => this.zeroAction(this.zero));
        registerAction(this.dot, () => this.dotAction(this.dot));
        registerAction(this.equal, () => this.equalAction(this.equal));
        registerAction(this.remove, () => this.removeAction(this.remove));            
    }

    numberAction({ value }) {
        if (this.activeResult) {
            this.result.value = value;
            this.activeResult = false;
        } else {
            this.result.value += value;
        }
    }

    operatorAction({ value }) {
        if (this.result.value !== "") {
            this.result.value += value;
        }
    }

    zeroAction({ value }) {
        if (this.result.value !== '0') {
            this.result.value += value;
        }
    }

    dotAction() {
        if (!this.result.value.includes('.')) {
            if (this.result.value === "") {
                this.result.value = "0.";
            } else {
                this.result.value += ".";
            }
        }
    }

    equalAction() {
        if (this.result.value !== "") {
            this.result.value = eval(this.result.value);
            this.activeResult = true;
        }
    }

    removeAction() {
        this.result.value = "";
    }
}

export default Kalkulator;
