# freeCodeCamp Markdown Previewer clone

This is a clone of [Build a Markdown Previewer](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer) from freeCodeCamp.

## Screenshot of the finished clone

![screenshot](./fcc-markdown-screenshot.png)

## What technologies were used?

- React: including `useContext` feature.
- SCSS: for styling purpose.

## Links to source code and live site:

- [Source files on Github](https://github.com/1codingguy/fcc-frontend-projects/tree/main/markdown-previewer)
- [Live site deployed with Netlify](https://fcc-react-markdown.netlify.app/)

## What does the app do?

1. In the `Editor` window, you can input text with Markdown syntax, which is then converted to Markdown formatted text and shown in the `Previewer` window.

   - Some default text is provided in the `Editor` window when the app starts, which is one of the requirements of the freeCodeCamp test.

2. The content of either `Editor` or `Previewer` window can be toggled into "full screen" mode. For example, when `Previewer` window occupies the full screen, `Editor` window is hidden.
   - This full screen toggling feature is done by setting a boolean value to the `editorFullScreen` or `previewFullScreen` state variable. For example, if `previewFullScreen` is set as `true`, an empty `<div></div>` is rendered in the `Editor` component, in other words, the `Editor` window is hidden because nothing is rendered.

## What are the objectives of this clone?

1. The primary goal is to get all of the tests to pass as this project is part of the "Front End Development" curriculum on freeCodeCamp.
2. Get the app to look as close to the original design as possible.
   - As I am not experience in UI design I reckon it's better to clone an existing on instead of designing something that doesn't look good.

## Things learnt and reviewed in the process:

### 1. How to do a CSS reset with React.

#### How I did a CSS reset before learning React:

- CSS reset is placed on top of the main style sheet, e.g.:

  ```
  // styles.scss

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  ```

- In the above example the main style sheet is `styles.scss`, which gets compiled into `styles.css` with [_Live SASS compiler_](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass) extension in VsCode.
- Include the compiled `styles.css` with `<link>` tag in `index.html`, like so:

  ```
  <!-- index.html -->

  <link rel="stylesheet" href="style.css">
  ```

#### But importing stylesheet is different when building apps with React.

- According to the [create-react-app documentation](https://create-react-app.dev/docs/adding-a-stylesheet): CSS stylesheet needs to be imported to a JavaScript file.
- According to this [stackoverflow answer](https://stackoverflow.com/questions/41676054/how-to-add-fonts-to-create-react-app-based-projects), importing CSS stylesheet to a JavaScript file will make the CSS "goes through the build pipeline, and can reference fonts and images".
- Therefore I placed all the reset in an `index.scss` file, which then get compiled into `index.css` with [_Live SASS compiler_](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass) extension in VsCode, then finally import the compiled `index.css` from `index.js` like so:

```
// index.css (compiled from index.scss with Live SASS compiler)

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
```

```
// index.js

import "./index.css";
```

### 2. Practice using `Context` in React

- This project is not a complex app, but still I opted to make use of the `Context` feature from React because I'd like to avoid prop drilling and to centralize state variables and state toggling function in one place, which makes the code looks cleaner.

## What can be further improved?

### The use of `dangerouslySetInnerHTML`:

- According to the [official React documentation](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml): "In general, setting HTML from code is risky because it’s easy to inadvertently expose your users to a cross-site scripting (XSS) attack. So, you can set HTML directly from React, but you have to type out dangerouslySetInnerHTML and pass an object with a \_\_html key, to remind yourself that it’s dangerous."
- At this stage I do not fully understand about XSS attack.
- I tried to use some other npm markdown packages but couldn't get the correct/ desired result. That's why I still opted to use `dangerouslySetInnerHTML`.
- Further investigation is needed to fully understand the issue.


## How can you clone and tweak this project?

From your command line, first clone this repo:

```
// Clone this repository
$ git clone https://github.com/1codingguy/fcc-frontend-projects.git

// Go into the repository
$ cd fcc-frontend-projects/markdown-previewer

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
