const input = document.getElementById('input-output');
let outputValue = '';
let operation1 = '';
let operation2 = '';

const clearBtn = document.getElementById('clear');
clearBtn.onclick = () => (input.value = '');

function addValue(value) {
    input.value += value;
}

function calculator() {
    outputValue = input.value;
    input.value = '';

    try {
        outputValue = eval(outputValue);
    } catch (error) {
        input.value = 'Error';
    }
}
