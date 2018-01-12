class Kalkulator {
    constructor(asdf, fdsa) {
        this.numbers = document.querySelectorAll(".num");
        this.operators = document.querySelectorAll(".operator");
        this.equal = document.querySelector(".equal");
        this.zero = document.querySelector(".zero");
        this.dot = document.querySelector(".dot");
        this.result = document.querySelector("#result");
        this.remove = document.querySelector("#delete");
        this.activeResult = false;

        this.onload();
    }

    onload() {
        // ...
    }
}

window.onload = new Kalkulator();

// window.onload = function () {
//     var numbers = document.querySelectorAll(".num");
//     var operators = document.querySelectorAll(".operator");
//     var equal = document.querySelector(".equal");
//     var zero = document.querySelector(".zero");
//     var dot = document.querySelector(".dot");
//     var { value: resultValue } = document.querySelector("#result");
//     var remove = document.querySelector("#delete");
//     var activeResult = false;

//     numbers.forEach(button => {
//         button.addEventListener("click", () => {
//             if (activeResult) {
//                 resultValue = button.value;
//                 activeResult = false;
//             } else {
//                 result.value += button.value;
//             }
//         });
//     });

//     operators.forEach(function (operator) {
//         operator.addEventListener("click", function () {
//             if (result.value !== "") {
//                 result.value += operator.value;
//             }
//         })
//     });

//     zero.addEventListener("click", function () {
//         if (result.value !== '0') {
//             result.value += zero.value;
//         }
//     });

//     dot.addEventListener("click", function () {
//         if (result.value === "") {
//             result.value = "0.";
//         } else {
//             result.value += ".";
//         }
//     });

//     equal.addEventListener("click", function () {
//         if (result.value !== "") {
//             result.value = eval(result.value);
//             activeResult = true;
//         }
//     });

//     remove.addEventListener("click", function () {
//         result.value = "";
//     });
// };
