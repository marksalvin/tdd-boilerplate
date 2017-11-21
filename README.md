# tdd-boilerplate

## Motivation

If you've ever wanted to quickly throw together a function to solve a problem, and it's not within a project that you are currently working on (it may even be for a friend or colleague), or it is within a project you are currently working on but that project doesn't currently have a testing framework in place (and for some reason you aren't able to put one in place, right now), then typically you would turn to a repl.

This works well for small, simple functions, but not so well for large functions that may be operating on complex data sets. The main issue here is confidence in your function working 100% correctly. To verify this, you really need some unit tests, and to do this, you need a project with a unit test framework in place!

This project aims to provide a boilerplate for quickly trying out different ideas, with a testing framework in place, that provides easy to read, industry standard, tap output, beautifully formatted with tap-spec.

## How to use this project

Clone the project, then checkout a new branch to get started.

Make sure you are running node version 6 or above. Run `npm install`.

Write any functions inside of src/index.js. Make sure any functions you want to test are exposed using the [CommonJS module system](https://nodejs.org/api/modules.html);

Any supporting files should live in there too.

Write your unit tests inside the test/unit directory. Make sure any function you want to test are included again using the CommonJS module system.

To test your code, run `npm test`.

Once finished, throw away the branch and return to master branch, where the project is sat ready and waiting for your next session!

Hope this helps!
