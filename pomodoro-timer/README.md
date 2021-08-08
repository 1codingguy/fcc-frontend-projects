# freeCodeCamp 25 + 5 Clock clone

This is a clone of [Build a 25 + 5 Clock](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-25--5-clock) from freeCodeCamp.

## Screenshot of the finished clone

![screenshot](./fcc-clock-screenshot.PNG)

## What technologies were used?

- React
- SCSS: for styling purpose.

## Links to source code and live site:

- [Source files on Github](https://github.com/1codingguy/fcc-frontend-projects/tree/main/pomodoro-timer)
- [Live site deployed with Netlify](https://fcc-clock.netlify.app/)

## What does the app do?

- A Podomoro timer that alternates between work and break session. When work session countdown is finished, the timer switches to break session countdown.

## Features of the app

- Users are able to set the number of minutes for both work/ break session.
- Pause/ resume the current session.
- Play beeping sound when the current session is finished.
- Alternates between work and break session when the current session is finished.

## What are the objectives of this clone?

1. The primary goal is to get all of the tests to pass as this project is part of the "Front End Development" curriculum on freeCodeCamp.
2. Get the app to look as close to the original design as possible.
   - As I am not experience in UI design I reckon it's better to clone an existing on instead of designing something that doesn't look good.

## Things learnt and reviewed in the process:

1. How to use `useRef` hook and `setInterval()` for countdown. ([Reference link](https://medium.com/swlh/creating-a-simple-countdown-timer-using-react-useref-hook-92ae5b6210cb))

2. Pause the countdown with `clearInterval()`

## What can be further improved?

#### 1. Record and display the number of finished sessions per day.
- This would be a great feature to add as I count the total number of finished sessions per day in my work routine. If the simple stats can be stored in browser's `localStorage`, another great feature would be a weekly/ monthly tally of finished sessions.

#### 2. Separate the `Play` and `Pause` button.
- Now the seemingly separated `Play` and `Pause` buttons are actually under one `<button>` tag. Since the original app is constructed in this way I do exactly the same in this clone. Separating the buttons with proper functionality will be a subtle but good improvement.  

## How can you clone and tweak this project?

From your command line, first clone this repo:

```
// Clone this repository
$ git clone https://github.com/1codingguy/fcc-frontend-projects.git

// Go into the repository
$ cd fcc-frontend-projects/pomodoro-timer

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
