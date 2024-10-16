// Get elements from the DOM
const resultLabel = document.getElementById('result');
const speakButton = document.getElementById('speak-button');
const quitButton = document.getElementById('quit-button');



// Function to perform the calculation
function calculate(command) {
    const tokens = command.toLowerCase().split(' ');

    let x, y, operation;

    // Parse the voice command for arithmetic operations
    tokens.forEach((token, index) => {
        if (!isNaN(token)) {
            if (!x) x = parseFloat(token);
            else y = parseFloat(token);
        }

        if (['add', 'plus'].includes(token)) operation = 'add';
        if (['subtract', 'minus'].includes(token)) operation = 'subtract';
        if (['multiply', 'times'].includes(token)) operation = 'multiply';
        if (['divide', 'by'].includes(token)) operation = 'divide';
    });

    // Perform the corresponding arithmetic operation
    let result;
    switch (operation) {
        case 'add':
            result = x + y;
            break;
        case 'subtract':
            result = x - y;
            break;
        case 'multiply':
            result = x * y;
            break;
        case 'divide':
            result = y === 0 ? "Error: Division by zero" : x / y;
            break;
        default:
            result = "Invalid command";
    }

    return result;
}

// Voice recognition setup
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    resultLabel.textContent = 'Listening...';
};

recognition.onspeechend = function() {
    recognition.stop();
};

recognition.onresult = function(event) {
    const spokenWords = event.results[0][0].transcript;
    resultLabel.textContent = `You said: "${spokenWords}"`;

    // Calculate based on spoken words
    const result = calculate(spokenWords);
    resultLabel.textContent = `Result: ${result}`;

    // Use speech synthesis to read the result aloud
    speakResult(result);
};

// Function to speak the result
function speakResult(result) {
    const utterance = new SpeechSynthesisUtterance(`The result is ${result}`);
    window.speechSynthesis.speak(utterance);
}

// Event listener for the speak button
speakButton.addEventListener('click', () => {
    recognition.start();
});

// Event listener for the quit button
quitButton.addEventListener('click', () => {
    resultLabel.textContent = 'Goodbye!';
    const utterance = new SpeechSynthesisUtterance('Goodbye!');
    window.speechSynthesis.speak(utterance);
    setTimeout(() => window.close(), 2000); // Close the window after 2 seconds
});
