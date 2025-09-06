// Get references to the input and output elements
const metersInput = document.getElementById('metersInput');
const feetOutput = document.getElementById('feetOutput');
const kilogramsInput = document.getElementById('kilogramsInput');
const poundsOutput = document.getElementById('poundsOutput');

// Function to perform the meters to feet conversion
function convertMetersToFeet() {
    // Get the value from the meters input and convert it to a number
    const meters = parseFloat(metersInput.value);
    // Check if the input is a valid number, otherwise set it to 0
    if (isNaN(meters)) {
        feetOutput.textContent = '0';
        return;
    }
    // Perform the conversion (1 meter = 3.28084 feet)
    const feet = meters * 3.28084;
    // Update the text content of the feet output element, rounding to two decimal places
    feetOutput.textContent = feet.toFixed(2);
}

// Function to perform the kilograms to pounds conversion
function convertKilogramsToPounds() {
    // Get the value from the kilograms input and convert it to a number
    const kilograms = parseFloat(kilogramsInput.value);
    // Check if the input is a valid number, otherwise set it to 0
    if (isNaN(kilograms)) {
        poundsOutput.textContent = '0';
        return;
    }
    // Perform the conversion (1 kg = 2.20462 pounds)
    const pounds = kilograms * 2.20462;
    // Update the text content of the pounds output element, rounding to two decimal places
    poundsOutput.textContent = pounds.toFixed(2);
}

// Add event listeners to the input fields to trigger conversions on input
metersInput.addEventListener('input', convertMetersToFeet);
kilogramsInput.addEventListener('input', convertKilogramsToPounds);