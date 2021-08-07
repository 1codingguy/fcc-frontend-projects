# freeCodeCamp JavaScript Calculator clone

This is a clone of [Build a JavaScript Calculator](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-javascript-calculator) from freeCodeCamp.

## Screenshot of the finished clone

![screenshot](./fcc-calc-screenshot.PNG)

## What technologies were used?

- React
- SCSS: for styling purpose.

## Links to source code and live site:

- [Source files on Github](https://github.com/1codingguy/fcc-frontend-projects/tree/main/javascript-calculator)
- [Live site deployed with Netlify](https://fcc-react-calc.netlify.app/)

## What does the app do?

A simple calculator that does simple arithmetic calculation.

## Features of the app

This app contains some standard features one would expect from a calculator, such as:
- no leading zeros before any numbers;
- only one decimal is allowed;
- no duplicated arithmetic operator (except `-`, which is treated a negative instead of minus);
- utilizes formula logic and observes order of operation precedence.

## What are the objectives of this clone?

1. The primary goal is to get all of the tests to pass as this project is part of the "Front End Development" curriculum on freeCodeCamp.
2. Get the app to look as close to the original design as possible.
   - As I am not experience in UI design I reckon it's better to clone an existing on instead of designing something that doesn't look good.

## Things learnt and reviewed in the process:

1. Reviewed defining and applying `grid-template-area`.
   - Calculator buttons are positioned with CSS grid and `grid-template-area`.

2. Using `useReducer()`:
   - All state changes are done via `dispatch()`.
   - State altering logics are centralised in one place: `reducer.js`.
   - I started off trying to manage all the states in an `useEffect()` hook but it quickly turned into a mess. 

## Thoughts on the build process and on the project

- This project is much more challenging than it seems. How difficult a calculator can it isn't it? 
- During development I deliberately chose not to reference how others build a calculator because I think I can work things out on my own. But looking back I think that was a stupid decision, why re-inventing the wheel if I am not doing something better?
- Should have documented the thought process during the build. When I review the written code I find it hard to remember some of the logics/ thoughts/ decisions made when it was first written.
- Overall, even I've passed all the tests, I think there are lots of room for improvement for this project.

## What can be further improved?

#### The app passed all test but still have some flaws:
- Zero division: number divided by zero causes an error.
- Press `equal` sign after an arithmetic operator causes an error.

## How can you clone and tweak this project?

From your command line, first clone this repo:

```
// Clone this repository
$ git clone https://github.com/1codingguy/fcc-frontend-projects.git

// Go into the repository
$ cd fcc-frontend-projects/javascript-calculator

// Remove current origin repository
$ git remote remove origin

```

Then you can install the dependencies using NPM:

```
// Install dependencies
$ npm install

// Start development server
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
