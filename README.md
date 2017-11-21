# tdd-boilerplate

## Motivation

If you've ever wanted to quickly throw together a function to solve a problem (outside of a project with a testing framework in place), then typically you would turn to a repl.

This works well for small, simple functions, but not so well for large functions that may be operating on complex data sets. The main issue here is the lack of confidence in your function working 100% correctly. To verify this, you really need some unit tests, and to do this, you need a project with a unit testing framework in place!

This project aims to provide a boilerplate for quickly trying out different ideas, with a testing framework in place, that provides easy to read, industry standard, tap output, beautifully formatted with tap-spec.

## How to use this project

Clone the project, then checkout a new branch to get started.

Make sure you are running node version 6 or above. Run `npm install`.

Write any functions inside of src/index.js. Make sure any functions you want to test are exposed using the [CommonJS module system](https://nodejs.org/api/modules.html).

Any supporting files should live in there too.

Write your unit tests inside the tests/unit directory. Make sure any functions you want to test are included, again using the CommonJS module system.

To test your code, run `npm test`.

Once finished, throw away the branch and return to master branch, where the project is sat ready and waiting for your next session!

Hope this helps!
