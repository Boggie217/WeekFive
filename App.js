import React, { useState } from 'react';
import './calculator.css';
import * as math from 'mathjs';

const Calculator = () => {
  const [input, setInput] = useState(''); // State variable to store the current input expression
  const [result, setResult] = useState(''); // State variable to store the calculated result

  // Function to handle button clicks
  const handleClick = (value) => {
    if (value === '=') {
      try {
        // Evaluate the input expression using mathjs's eval function
        const calculatedResult = math.evaluate(input);
        setResult(calculatedResult.toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      // Clear the input and result when "C" button is clicked
      setInput('');
      setResult('');
    } else {
      // Update the input expression with the clicked button's value
      setInput((prevInput) => prevInput + value);
    }
  };

  // Define the button layout as an array of rows, each row containing an array of buttons
  const buttonLayout = [
    ['7', '8', '9', '+'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '*'],
    ['0', '.', '=', '/'],
    ['C']
  ];

  return (
    <div className="calculator">
      <div className="display">
        {/* Display the input expression or result */}
        {result ? result : input}
      </div>
      {/* Use map() to render the button rows */}
      {buttonLayout.map((row, rowIndex) => (
        <div key={rowIndex} className="button-row">
          {/* Use map() again to render individual buttons */}
          {row.map((buttonValue) => (
            <button key={buttonValue} onClick={() => handleClick(buttonValue)}>
              {buttonValue}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Calculator;
