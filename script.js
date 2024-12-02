const unitAmountInput = document.getElementById("unitAmount");
const unitInterpreterInput = document.getElementById("unitInterpreter");
const unitConverterInput = document.getElementById("unitConverter");
const calculateButton = document.getElementById("calculateButton");
const CalculatedText = document.getElementById("convertedAmountText");

const ToCelsius = {
    "Celsius": 1,
    "Fahrenheit": 33.8,
    "Kelvin": 274.15
}

function unitCalculator(unitAmount, unit, newUnit) {
    let celsiusAmount = unitAmount / ToCelsius[unit]
    return celsiusAmount * ToCelsius[newUnit]
}

calculateButton.addEventListener("click", function() {
    let unitAmount = unitAmountInput.value;
    let unitInterpreter = unitInterpreterInput.value;
    let unitConverter = unitConverterInput.value;

    CalculatedText.innerText = `${unitAmount} ${unitInterpreter} is ${unitCalculator(unitAmount, unitInterpreter, unitConverter)} ${unitConverter}`
})