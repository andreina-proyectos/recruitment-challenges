'use strict';
//Andre: is not recommended all functionalities inside one function
//Andre: I changed all var to let or const (ES6 syntax)
//Andre: I think is more easy to read the code if we put all global var at the beginning of the code

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
    oldNum = "", // First number
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

  // When: Operator is clicked. Pass number to oldNum and save operator
  let moveNum = function() {
    oldNum = currentNumber;
    currentNumber = "";
    operator = this.getAttribute("data-ops");

    equals.setAttribute("data-result", ""); // Reset result in attr
  };

  // When: Equals is clicked. Calculate result
  let displayNum = function() {
    // Convert string input to numbers
    oldNum = parseFloat(oldNum);
    currentNumber = parseFloat(currentNumber);

    // Perform operation
    switch (operator) {
      case "plus":
        resultNum = oldNum + currentNumber;
        break;

      case "minus":
        resultNum = oldNum - currentNumber;
        break;

      // If equal is pressed without an operator, keep number and continue
      default:
        resultNum = currentNumber;
    }

    // If NaN or Infinity returned
    if (!isFinite(resultNum)) {
      if (isNaN(resultNum)) {
        // If result is not a number; set off by, eg, double-clicking operators
        resultNum = "You broke it!";
      } else {
        // If result is infinity, set off by dividing by zero
        resultNum = "Look at what you've done";
        el("#calculator").classList.add("broken"); // Break calculator
      }
    }

    // Display result, finally!
    viewer.innerHTML = resultNum;
    equals.setAttribute("data-result", resultNum);

    // Now reset oldNum & keep result
    oldNum = 0;
    currentNumber = resultNum;
  };

  // When: Clear button is pressed. Clear everything
  let clearAll = function() {
    oldNum = "";
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
