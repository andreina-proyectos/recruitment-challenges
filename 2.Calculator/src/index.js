'use strict';
//Andre: is not recommended all functionalities inside one function
//Andre: I changed all var to let or const (ES6 syntax)
//Andre: I think is more easy to read the code if we put all global var at the beginning of the code
//Andre: Is important to rename function names to meaningful names in order to make clean code
//Andre: name of variables need to have meaningful names
//Andre: if user divide by zero, it would say "error"

  // Shortcut to get elements
  let getElement = function(element) {
    if (element.charAt(0) === "#") {
      // If passed an ID...
      return document.querySelector(element); // ... returns single element
    }
    return document.querySelectorAll(element); // Otherwise, returns a nodelist
  };

  // Variables
  let viewer = getElement("#viewer"), // Calculator screen where result is displayed
    equals = getElement("#equals"), // Equal button
    clearBtn = getElement("#clear-btn"),
    nums = getElement(".num"), // List of numbers
    ops = getElement(".ops"), // List of operators
    currentNumber = "", // Current number
    previewNumber = "", // First number
    resultNum, // Result
    operator;

  // When: Number is clicked. Get the current number selected
  let setNum = function() {
    if (resultNum) {
      // If a result was displayed, reset number
      currentNumber = this.getAttribute("data-num");
      resultNum = "";
    } else {
      // Otherwise, add digit to previous number (this is a string!)
      currentNumber += this.getAttribute("data-num");
    }
    viewer.innerHTML = currentNumber; // Display current number
  };

  // When: Operator is clicked. Pass number to previewNumber and save operator
  let moveNum = function() {
    previewNumber = currentNumber;
    currentNumber = "";
    operator = this.getAttribute("data-ops");
    equals.setAttribute("data-result", ""); // Reset result in attr
  };

  // When: Equals is clicked. Calculate result
  let displayNum = function() {
    // Convert string input to numbers
    previewNumber = parseFloat(previewNumber);
    currentNumber = parseFloat(currentNumber);

    // Perform operation
    switch (operator) {
      case "plus":
        resultNum = previewNumber + currentNumber;
        break;

      case "minus":
        resultNum = previewNumber - currentNumber;
        break;

      case "division":
      resultNum = previewNumber / currentNumber;
      break;

      case "multiply":
      resultNum = previewNumber * currentNumber;
      break;

      // If equal is pressed without an operator, keep number and continue
      default:
        resultNum = currentNumber;
    }

    // If NaN or Infinity returned
    if (!isFinite(resultNum)) {
      if (isNaN(resultNum)) {
        // If result is not a number; set off by, eg, double-clicking operators
        resultNum = "So sorry, something was wrong😮 please, try again"; //Andre: I put new friendly message
      } else {
        // If result is infinity, set off by dividing by zero
        resultNum = "Sorry, please try again";
        el("#calculator").classList.add("broken"); // Break calculator
      }
    }

    // Display result, finally!
    viewer.innerHTML = resultNum;
    equals.setAttribute("data-result", resultNum);

    // Now reset previewNumber & keep result
    previewNumber = 0;
    currentNumber = resultNum;
  };

  // When: Clear button is pressed. Clear everything
  let clearAll = function() {
    previewNumber = "";
    currentNumber = "";
    viewer.innerHTML = "0";
    equals.setAttribute("data-result", resultNum);
  };

  /* The click events */

  // Add click event to numbers
  for (let i = 0, l = nums.length; i < l; i++) {
    nums[i].onclick = setNum;
  }

  // Add click event to operators
  for (let i = 0, l = ops.length; i < l; i++) {
    ops[i].onclick = moveNum;
  }

  // Add click event to equal sign
  equals.onclick = displayNum;

  // Add click event to clear button
  clearBtn.onclick = clearAll;
