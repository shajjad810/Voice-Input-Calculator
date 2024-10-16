# Voice-Input-Calculator

Here’s a basic README for your **Voice-Input-Calculator** project, explaining how it works, how to set it up, and the technologies involved.

---

# Voice-Activated Calculator

## Project Description

The **Voice-Activated Calculator** is a web-based calculator that allows users to perform basic mathematical operations using voice commands. By leveraging the Web Speech API for voice recognition, the application listens for voice inputs, processes them, and displays the result on the screen. The application changes the result bar to red when listening for a command and returns to blue when the result is displayed.

## Features

- Voice input using the Web Speech API.
- Ability to parse basic math commands such as "Add 5 and 3", "Subtract 10 from 20", "Multiply 7 and 6", etc.
- Visual feedback for users: the result bar turns red while the app is listening for input and turns back to blue when the result is displayed.
- Responsive design for mobile and desktop views.

## Technologies Used

- **HTML**: To structure the webpage.
- **CSS**: To style the application and manage visual feedback.
- **JavaScript**: To handle voice commands, process speech recognition, and perform calculations.
- **Web Speech API**: For voice recognition.

## Project Structure

```bash
.
├── index.html       # The main HTML file
├── styles.css       # Custom CSS styles
└── script.js        # JavaScript file for functionality
```

## How It Works

1. **Voice Recognition**: 
   - When the user presses the "Speak Command" button, the application begins listening for a voice input.
   - It uses the Web Speech API to recognize speech and convert it to text.
   
2. **Command Parsing**:
   - The spoken text is parsed to extract mathematical operations (e.g., "add", "subtract", "multiply", "divide") and numbers.
   
3. **Result Display**:
   - The result of the calculation is displayed in the result bar, which turns red while listening and blue when the result is displayed.

## Setup Instructions

### Prerequisites

Ensure you have the following:
- A modern web browser that supports the Web Speech API (e.g., Chrome, Edge).

### Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/voice-activated-calculator.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd voice-activated-calculator
   ```

3. **Open the project**:
   
   Open `index.html` in a modern web browser (e.g., by double-clicking it or dragging it into a browser window).

### Usage

1. Press the **Speak Command** button (with a microphone icon) to start voice recognition.
2. Speak a math command such as "Add 5 and 3" or "Multiply 6 and 4".
3. The calculator will listen to your voice, perform the calculation, and display the result.
4. The result bar will turn **red** while listening and turn **blue** after the result is displayed.

### Example Commands

- "Add 5 and 3"
- "Subtract 10 from 20"
- "Multiply 6 and 4"
- "Divide 20 by 5"

## Known Limitations

- This calculator only handles basic operations (addition, subtraction, multiplication, division).
- The speech recognition may not be 100% accurate depending on the clarity of the user’s speech.
- Requires an internet connection for the Web Speech API to function.

## Future Enhancements

- Add more complex mathematical operations (e.g., exponents, roots).
- Improve error handling and add support for more natural language processing.
- Optimize for multiple languages and accents.