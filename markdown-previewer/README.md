# freeCodeCamp Markdown Previewer clone

This is a clone of [Build a Markdown Previewer](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer) from freeCodeCamp.

## Screenshot of the finished clone

![screenshot](./fcc-markdown-screenshot.png)

## What technologies were used?

- React (create-react-app)
- SCSS for styling purpose

## Links to source code and live site:

- [Source files on Github](https://github.com/1codingguy/fcc-frontend-projects/tree/main/markdown-previewer)
- [Live site deployed with Netlify](https://fcc-react-markdown.netlify.app/)
- [The original app from freeCodeCamp](https://codepen.io/freeCodeCamp/full/GrZVVO)

## How to navigate this project? Click on the link for related source code:

1. In the `Editor` window, you can input text with Markdown syntax, which is then converted to Markdown-formatted text and shown in the `Previewer` window.

   - Some default text is provided in the `Editor` window when the app starts, which is one of the requirements of the freeCodeCamp test.

2. The content of either the `Editor` or `Previewer` window can be toggled into "full screen" mode. For example, when the `Previewer` window occupies the full screen, the `Editor` window is hidden.
   - This full screen toggling feature is done by setting a boolean value to the `editorFullScreen` or `previewFullScreen` state variable. For example, if `previewFullScreen` is set as `true`, an empty `<div></div>` is rendered in the `Editor` component, in other words, the `Editor` window is hidden because nothing is rendered. ([See here](https://github.com/1codingguy/fcc-frontend-projects/blob/main/markdown-previewer/src/components/Editor.js#L8) and [here](https://github.com/1codingguy/fcc-frontend-projects/blob/main/markdown-previewer/src/components/Previewer.js#L8))
3. Make use of `useContext` hook from React to manage states and helper functions. ([See here](https://github.com/1codingguy/fcc-frontend-projects/blob/main/markdown-previewer/src/context.js))

## What are the objectives of this clone?

1. The primary goal is to get all of the tests to pass as this project is part of the "Front End Development" curriculum on freeCodeCamp.
2. Get the app to look as close to the original design as possible.
   - As I am not experienced in UI design I reckon it's better to clone an existing one instead of designing something that doesn't look good.

## Things learnt in the process:

### 1. How to import SCSS stylesheet in create-react-app:

I wrote a blog post about how to import SCSS stylesheet in create-react-app. You can read it by clicking on the picture below:

[![blog-post-thumbnail](./blog-post-thumbnail.jpg)](https://blog.coding-guy.com/how-to-use-web-fonts-and-scss-stylesheet-after-level-up-to-react)

## What can be further improved?

### The use of `dangerouslySetInnerHTML`:

- According to the [official React documentation](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml): "In general, setting HTML from code is risky because it’s easy to inadvertently expose your users to a cross-site scripting (XSS) attack. So, you can set HTML directly from React, but you have to type out dangerouslySetInnerHTML and pass an object with a \_\_html key, to remind yourself that it’s dangerous."
- At this stage I do not fully understand about XSS attack.
- I tried to use some other npm markdown packages but couldn't get the correct/ desired result. That's why I still opted to use `dangerouslySetInnerHTML`.
- Further investigation is needed to fully understand the issue.

## How can you clone and tweak this project?

From your command line, first clone this repo:

```
# Clone this repository
$ git clone https://github.com/1codingguy/fcc-frontend-projects.git

# Go into the repository
$ cd fcc-frontend-projects/markdown-previewer

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
