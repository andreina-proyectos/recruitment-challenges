# Payvision calculator

In this exercise you are given the legacy code of Payvision Calculator web app. Maintainance and new features development is your responsability.

![Mobile version](images/mobile-version.png?raw=true "Mobile version")

## Tasks in this exercise:

1. Code review: please list all good/bad practices you find in this application.
2. It seems the app is buggy... Could you fix it?
3. Add divide and multiply operations.
4. How would do you test this app?
5. Can you improve the UI/UX?

### 1. Code review

Good practices/changes:
1. First, I separate index.html, index.js and main.css in different files
2. Added meta tags and head on html
3. Reorganized calculator buttons on html like mac calculator buttons positions
4. Changed all var to let or const in order to be ES6 syntax compliant
6. Changed names of functions in order to be meaningful and provide a cleaner code
7. Changed message when result is not a number in order to be more user friendly
8. Use for-of or forEach instead of for loops with counters

Bad practices:
1. Lot of inline comments
2. Use of vars instead of const/let
3. Make all functionalities on the same file

### 2. Testing and bug fixing

1. Fix bug: Change value of 3 and 0 button on index.html because it was switched
2. Fix bug: Change plus and minus operations on index.js
3. Fix first function that throws error on console
4. Fix clear function functionality


### 3. New features implementation

1. Added multiply button and functionality
2. Added divide button and functionality
3. Current version is 1.2.2 (see package.json version). Should we increase the version? How? Why?
Yes, because bugs were fixed, so last number of version code need to be increased. As a result, this version need to be 1.2.3.
I attach this image to give a clearer explanation.

![Software versions](/images/version.jpeg?raw=true "Software versions")

### 4. Test automation

What kind of tests would you implement? Why?

End to end (e2e) tests that checks that the interface behaves as we expected. I have never tested a frontend before, but I must use a tool like Selenium.


### 5. UI/UX design

- Improve the UI/UX to be more user friendly.
- Edit messages to user when operation is broken
- Change background color in order to be easier to differentiate calculator and background and make user pay more attention to functionality.
- Add color with hight ratio contrast when buttons are focused. This add accessibility. For this, I used Color Safe web page.
- Buttons operator have different color to make more easy the experience
- Make calculator responsive adding media queries on css, so calculator will fit good on different screen sizes.

## How to run the application using local server

To run the project, open a terminal and execute the following command from project root path:

- Install depencencies:

> yarn

- Run the application

> yarn serve

This command will run a local web server in port 8082:
[http://localhost:8082/src/index.html](http://localhost:8082/src/index.html)
