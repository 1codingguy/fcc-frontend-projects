# freeCodeCamp JavaScript Calculator clone

This is a clone of [Build a JavaScript Calculator](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-javascript-calculator) from freeCodeCamp.

Click [here](https://codepen.io/freeCodeCamp/full/wgGVVX) to visit the original app.

## Screenshot of the finished clone

![screenshot](./fcc-calc-screenshot.PNG)

## What technologies were used?

- React (create-react-app)
- SCSS for styling purpose.

## Links to source code and live site:

- [Source files on Github](https://github.com/1codingguy/fcc-frontend-projects/tree/main/javascript-calculator)
- [Live site deployed with Netlify](https://fcc-react-calc.netlify.app/)

## What does the app do?

A simple calculator that does simple arithmetic calculations.

## How to navigate this project? Click on the link for related source code.

1. Calculator buttons are positioned with CSS grid and `grid-template-area`. (see [here](https://github.com/1codingguy/fcc-frontend-projects/blob/main/javascript-calculator/src/scss/App.scss#L20) and [here](https://github.com/1codingguy/fcc-frontend-projects/blob/main/javascript-calculator/src/scss/_buttons.scss) )
2. Instead of hard-coding all the buttons, a `<Btn>` component (see [here](https://github.com/1codingguy/fcc-frontend-projects/blob/main/javascript-calculator/src/Btn.js)) is used to build the buttons, which loops over an array with the definitions of all the buttons (see [here](https://github.com/1codingguy/fcc-frontend-projects/blob/main/javascript-calculator/src/dataInArray.js)).
3. Make use of `useReducer` hook to manage states of the calculator (see [here](https://github.com/1codingguy/fcc-frontend-projects/blob/main/javascript-calculator/src/reducer.js)).
4. `reducer` actions are separated according to the user stories (see [here](https://github.com/1codingguy/fcc-frontend-projects/blob/main/javascript-calculator/src/reducer.js#L12)) described on the freeCodeCamp requirements.

## Thoughts on the build process and the project

- This project is much more challenging than it seems. It took me a very long time to get the edge cases right.
- Dealing with edge cases felt like endlessly patching little problems arise here and there. Probably because I didn't have a plan to break the problem into smaller chunks. But maybe the real problem is that I didn't define the edge cases before I started?
- With `useReducer` it seems I added some unnecessary complexity and makes my code look messy even it works.
- There must be some better approaches in defining the functionalities of the calculator. I see others using regular expression and result in more succinct logic.
- Should have documented the thought process during the build. When I review the written code I find it hard to remember some of the logic/ thoughts/ decisions made when it was first written.
- Overall, even I've passed all the tests, I think there are lots of room for improvement for this project.

## Features of the app

This app contains some standard features one would expect from a calculator, such as:

- no leading zeros before any numbers;
- only one decimal is allowed;
- no duplicated arithmetic operator (except `-`, which is treated a negative instead of minus);
- utilizes formula logic and observes order of operation precedence.

## What are the objectives of this clone?

1. The primary goal is to get all of the tests to pass as this project is part of the "Front End Development" curriculum on freeCodeCamp.
2. Get the app to look as close to the original design as possible.
   - As I am not experienced in UI design I reckon it's better to clone an existing one instead of designing something that doesn't look good.

## What can be further improved?

1. Rewrite the functionalities without `useReducer` hook.
2. Instead of using a "trial, error and correct" approach, more planning should be done before starting the project.
3. Use other data structures like array to store the input formula instead of a big chunk of string.

## How can you clone and tweak this project?

From your command line, first clone this repo:

```
# Clone this repository
$ git clone https://github.com/1codingguy/fcc-frontend-projects.git

# Go into the repository
$ cd fcc-frontend-projects/javascript-calculator

# Remove current origin repository
$ git remote remove origin

```

Then you can install the dependencies using NPM:

```
# Install dependencies
$ npm install

# Start development server
$ npm start
```

Happy coding!

---

## Author

**coding-guy**

- [GitHub](https://github.com/1codingguy)
- [Blog](https://blog.coding-guy.com/)
- [Twitter](https://twitter.com/1codingguy)
- [LinkedIn](https://www.linkedin.com/in/1codingguy/)
