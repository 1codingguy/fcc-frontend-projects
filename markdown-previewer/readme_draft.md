
What can be further improved?

1. The use of `dangerouslySetInnerHTML`:

According to the offical React documentation:

- "In general, setting HTML from code is risky because it’s easy to inadvertently expose your users to a cross-site scripting (XSS) attack. So, you can set HTML directly from React, but you have to type out dangerouslySetInnerHTML and pass an object with a \_\_html key, to remind yourself that it’s dangerous."
[source](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml)

- At this stage I do not fully understand about XSS attack.
- I tried to use some npm markdown package but couldn't get correct result. That's why I still opted to use `dangerouslySetInnerHTML`.
- Further investigation is needed to fully understand the issue.
