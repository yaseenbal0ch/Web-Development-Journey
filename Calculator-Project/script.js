const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.innerText;

        if (value === "C") {

            expression = "";
            display.value = "";

        }

        else if (value === "=") {

            try {

                expression = eval(expression).toString();
                display.value = expression;

            } catch {

                display.value = "Error";
                expression = "";

            }

        }

        else {

            expression += value;
            display.value = expression;

        }

    });

});
