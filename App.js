// Calculator.js
import React, { useState } from 'react';
import './calculator.css';

const Calculator = () => {
  const [input, setInput] = useState(''); // State variable to store the current input expression
  const [result, setResult] = useState(''); // State variable to store the calculated result

  // Function to handle button clicks
  const handleClick = (value) => {
    if (value === '=') {
      try {
        // Evaluate the input expression using JavaScript's eval() function
        setResult(eval(input).toString());
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

  return (
    <div className="calculator">
      <div className="display">
        {/* Display the input expression or result */}
        {result ? result : input}
      </div>
      <div className="button-row">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('+')}>+</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('*')}>*</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('=')}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleClick('C')}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
