function clearValue() {
    document.getElementById("number-output").value = "";
}

function displayValue(number) {
    document.getElementById("number-output").value += number;
}


function calculate() {
    var result = [];
    // Check if the character '+' exists in number-output value
    if (document.getElementById("number-output").value.includes("+")) {

        result = document.getElementById("number-output").value.split('+');
        document.getElementById("number-output").value = parseInt(result[0]) + parseInt(result[1])
    }
    // Check if the character '-' exists in number-output value
    else if (document.getElementById("number-output").value.includes("-")) {
        result = document.getElementById("number-output").value.split('-');
        // Calculate the expression and change output.value
        document.getElementById("number-output").value = parseInt(result[0]) - parseInt(result[1]);

    } else if (document.getElementById("number-output").value.includes("/")) {
        result = document.getElementById("number-output").value.split('/');
        document.getElementById("number-output").value = parseInt(result[0]) / parseInt(result[1]);

    } else {
        result = document.getElementById("number-output").value.split('*');
    }
}


var buttons = document.getElementsByClassName("input");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {

        switch (buttons[i].innerHTML) {
            case 'C':
                clearValue()
                break;
            case '=':
                calculate()
                break;
            default:
                displayValue(buttons[i].innerHTML);
                break;
        }
    })

}