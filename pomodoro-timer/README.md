# freeCodeCamp 25 + 5 Clock clone

This is a clone of [Build a 25 + 5 Clock](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-25--5-clock) from freeCodeCamp.

Click [here](https://codepen.io/freeCodeCamp/full/XpKrrW) to visit the original app. 

## Screenshot of the finished clone

![screenshot](./fcc-clock-screenshot.PNG)

## What technologies were used?

- React (create-react-app)
- SCSS for styling purpose

## Links to source code and live site:

- [Source files on Github](https://github.com/1codingguy/fcc-frontend-projects/tree/main/pomodoro-timer)
- [Live site deployed with Netlify](https://fcc-clock.netlify.app/)

## What does the app do?

- A Podomoro timer that alternates between work and break session. When work session countdown is finished, the timer switches to break session countdown.

## How to navigate this project? Click on the link for related source code.
1. Click on the `play/pause` button to set `isCounting` state variable to `true`. ([Related source code link](https://github.com/1codingguy/fcc-frontend-projects/blob/main/pomodoro-timer/src/App.js#L59))
2. Value change of `isCounting` triggers re-render, also triggers countdown in `useEffect()` ([Related source code link](https://github.com/1codingguy/fcc-frontend-projects/blob/main/pomodoro-timer/src/App.js#L73)) because `isCounting` is in the dependency array of this `useEffect()`.
3. Actual countdown is done by `setRemainingTime((prevTime) => prevTime - 1)` inside `setInterval()`. The interval ID returned by `setInterval()` is stored in `timeRef.current` utilizing the `useRef` hook provided by React. ([Related source code link](https://github.com/1codingguy/fcc-frontend-projects/blob/main/pomodoro-timer/src/App.js#L75))
4. `remainingTime` is the remaining countdown time in seconds, which value is decremented by 1 every second, causes the app to re-render every second.
5. Countdown is paused by `clearInterval()` with the interval ID stored in `timeRef.current`. It is "paused" in the sense the `remainingTime` variable is not reset to 0. When `setInterval()` is called again, countdown will continue from the last `remainingTime` value. ([Related source code link](https://github.com/1codingguy/fcc-frontend-projects/blob/main/pomodoro-timer/src/App.js#L81))
6. This ([Related source code link](https://github.com/1codingguy/fcc-frontend-projects/blob/main/pomodoro-timer/src/App.js#L97)) `useEffect()` is ran every second because `remainingTime` is updated every second, which checks if `remainingTime` is 0. 
7. If `remainingTime` is 0:
   - the app plays a beeping sound by referencing to the `<audio>` element via [`ref` attribute](https://github.com/1codingguy/fcc-frontend-projects/blob/main/pomodoro-timer/src/App.js#L155),
   - if current session is `Session`, alternates the countdown to `break` by setting the `whatIsCounting` variable value to `Break`, and `remainingTime` variable to the length of the break session. ([Related source code link](https://github.com/1codingguy/fcc-frontend-projects/blob/main/pomodoro-timer/src/App.js#L101)). Vice versa if the current session is `Break`.
8. Click on the `reset` icon stops the countdown and reset all the state variables back to initial states. ([Related source code link](https://github.com/1codingguy/fcc-frontend-projects/blob/main/pomodoro-timer/src/App.js#L63)).

## Features of the app

- Users are able to set the number of minutes for both work/ break session.
- Pause/ resume the current session.
- Play beeping sound when the current session is finished.
- Alternates between work and break session when the current session is finished.

## What are the objectives of this clone?

1. The primary goal is to get all of the tests to pass as this project is part of the "Front End Development" curriculum on freeCodeCamp.
2. Style the app to look as close to the original design as possible.
   - As I am not experience in UI design I reckon it's better to clone an existing one instead of designing something that doesn't look good.

## What can be further improved?

#### 1. Record and display the number of finished sessions per day.
- This would be a great feature to add as I count the total number of finished sessions per day in my work routine. If the simple stats can be stored in browser's `localStorage`, another great feature would be a weekly/ monthly tally of finished sessions.

#### 2. Separate the `Play` and `Pause` button.
- Now the seemingly separated `Play` and `Pause` buttons are actually under one `<button>` tag. Since the original app is constructed in this way I do exactly the same in this clone. Separating the buttons with proper functionality will be a subtle but good improvement.  

#### 3. Modularize the code
- Putting helper functions in a separated module might improve readability of the code. But since this app is a relatively simple project I chose to do it in the current way.   

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
