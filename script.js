const unitAmountInput = document.getElementById("unitAmountInput");
const unitInterpreterInput = document.querySelector('#unitInterpreterInput');
const unitConverterInput = document.querySelector('#unitConverterInput');
const calculateButton = document.getElementById("calculateButton");
const calculatedText = document.getElementById("convertedAmountText");

const unitConversions = {
    "Celsius": {
        "Fahrenheit": (c) => (c * (9 / 5)) + 32,
        "Kelvin": (c) => c + 273.15
    },
    "Fahrenheit": {
        "Celsius": (f) => (f - 32) * (5 / 9),
        "Kelvin": (f) => (f - 32) * (5 / 9) + 273.15
    },
    "Kelvin": {
        "Celsius": (k) => k - 273.15,
        "Fahrenheit": (k) => (k - 273.15) * (9 / 5) + 32
    }
};


function unitCalculator(unitAmount, unit, newUnit) {
    if (newUnit === unit) return unitAmount
    const unitFormula = unitConversions[unit]?.[newUnit];
    if (unitFormula) {
        return unitFormula(unitAmount);
    }
    return null
}

calculateButton.addEventListener("click", function() {
    const unitAmount = unitAmountInput.value;
    const unitInterpreter = unitInterpreterInput.options[unitInterpreterInput.selectedIndex].value;
    const unitConverter = unitConverterInput.options[unitConverterInput.selectedIndex].value;

    if (unitCalculator(unitAmount, unitInterpreter, unitConverter) !== null) {

        const amount = unitCalculator(unitAmount, unitInterpreter, unitConverter)
        calculatedText.textContent = `${unitAmount} ${unitInterpreter} is ${amount} ${unitConverter}`;
    }
});