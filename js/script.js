let currentUnit = 'celsius';

function convertTemperature() {
    const inputTemperature = document.getElementById('inputTemperature').value;
    let result;

    if (currentUnit === 'celsius') {
        result = (parseFloat(inputTemperature) * 9/5) + 32;
        currentUnit = 'fahrenheit';
    } else {
        result = (parseFloat(inputTemperature) - 32) * 5/9;
        currentUnit = 'celsius';
    }

    document.getElementById('result').value = result.toFixed(2);
}

function reverseConversion() {
    const inputTemperature = document.getElementById('result').value;
    document.getElementById('inputTemperature').value = inputTemperature;
    convertTemperature();
}

function updateResult() {
    document.getElementById('result').value = '';
}
