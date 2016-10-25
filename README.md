# Legacy Code Black Hole Overview

This repository tries to emulate the legacy code refactoring/restructuring process.

Each exercise has its own branch.
For example, to switch to the branch for exercise 1: `git checkout exercise-01`.

In addition, each step of each exercise has its own tag.
For example, to switch to the tag for step 3 of exercise 1: `git checkout exercise-01-step-03`.

Every tagged step updates the `README.md` document that you're reading right now.
Just scroll to the end.

You can also see the beginning and end of each exercise by checking out
the tags `exercise-<number>-start` and `exercise-<number>-finish`.

To see the final state of the project, with all the exercises in their final states, check out the tag `finish`.


# Legacy Code Exercise 1 - Step-By-Step

In this exercise, we want to change the message displayed by the app when no active items remain.

The current behavior has two cases:

1. When there is only one active item, the following message is displayed: `1 item left`
2. In all other cases, the following message is displayed: `<number> items left` (for example, `3 items left`)

Note that we are not considering negative and special numbers (infinity, max, etc.).

This means that when no active items remain, the message displayed is `0 items left`.

Our goal is to change the message in this case to `No items left`.

To follow step-by-step, check out the numbered tags one after the other.
Compare each step's code to the previous step to see what changed.
This file is also updated for each step.

## Step 1

We identify the change point as the `Template#itemCounter` method in `src/template.js`.
This function receives a number and returns a formatted message.

By analyzing the code, we can see that it has no dependencies.
We also observe that we do not have to change the function signature or add dependencies.
Our change appears to be purely internal.

Our first step is to create tests (specs) in `test/template.spec.js` that describe the existing behavior.
However, our tests must fail so that we can guarantee correct results after we fix them.

We do not modify any app code in this step.

## Step 2

We fix the failing tests by correcting the expectations.

We do not modify any app code in this step.

## Step 3

We refactor the tests to remove duplication.

We do not modify any app code in this step.

## Step 4

We change the expected result of the test case that represents the scenario we want to modify.
In `test/template.spec.js`, we change the expected result from `0 items left` to `No items left`.

The relevant test case fails. All other test cases continue to pass.

We do not modify any app code in this step.

## Step 5

We modify the app code to make the failing test pass.

The exercise is complete.


# Legacy Code Exercise 2 - Step-By-Step

In this exercise, we want to add support for sorting the items.

The current behavior displays the items in the order in which they were created and does not actually sort them.

Implementing full-fledged sorting is beyond the scope of this exercise.
We will sort the items alphabetically to help prepare for more flexible sorting eventually.

## Step 1

We analyze the code to identify the change point.

We find that:
* `Template#itemList` receives an array of items and converts it to an HTML string.
* `View#showItems` receives that array and calls `Template#itemList`.
* `Controller#_filter` retrieves the items from `Store#find` and then calls `View#showItems`.
* `Store#find` loads the items from local storage and filters them according to the `query` parameter.

We will try to apply the sorting logic in the controller.
`Controller#_filter` calls `Store#find` and passes it two arguments.
The first argument is a query and the second is a callback.
The callback is `View#showItems`.

We need to sort the items after they are retrieved and before they are displayed.
We can add more callbacks to `Store#find` or we can replace current the callback function.
Both solutions are not very extensible.

A better solution is to replace the callback mechanism with a composable promise.
However, there are multiple usages of the `Store#find` method.

Our first step is to try to write a test that preserves its current behavior.
The test must initially fail.

Note that in a real app, we will write multiple tests to preserve the existing behavior.
Here we write just one for demonstrative purposes.

We do not modify any app code in this step.

## Step 2

We fix the failing test.

We do not modify any app code in this step.

## Step 3

We add another test to preserve the behavior of a non-empty data source.

We discover that the `Store` relies on `window.localStorage`, an implicit dependency.
We also discover that after adding sample data to local storage, it affects the first test, which means that the tests are not atomic.
We have to isolate the dependency.

Both tests are now failing.

We do not modify any app code in this step.

## Step 4

We create a new class for the `LocalStorageService`.
It is still an implicit dependency, but it now wraps the localStorage and is easier to hide or replace.

The tests have not been modified and are still failing.

## Step 5

Through a series of imperfect refactorings, we convert the implicit dependency on `LocalStorageService` to an explicit dependency on a new base class `StorageService`.
`StorageService` is a basic in-memory implementation that does not depend on `window.localStorage`.

Using `StorageService` in the tests makes them atomic and independent of each other.
The app code uses the `LocalStorageService` to initialize the `Store`.

Both the app code and the test code have been modified.
Both tests now pass.

## Step 6

We want to replace the callback parameter in `Store#find` with a returned promise.
We observe that `find` does not currently return a value, so we decide to add a promise without hurting existing behavior.

We start by adding tests that are similar to the existing tests except for the use of promises.

We do not modify any app code in this step.

## Step 7

We observe that the new tests are failing because we don't pass a callback and not because there is no promise.
So we write an appropriate test and fix the code for the new test.

We modify both the app code and the test code.

## Step 8

PhantomJS, which is used to run the tests, does not yet support native promises.
So we install and execute a polyfill to the test code.

In a real app, we would find a more general way to resolve this issue for all our test code.

## Step 9

Mocha has built-in support for promises.
Instead of using the async `done` callback, we simply return the promise.

Only the test code is modified.

## Step 10

The new promise now resolves the filtered todos.

All the tests are passing.

Only the app code has been modified.

## Step 11

Refactored all the code that calls `Store#find` to use the promise implementation.

In a real app, we would try to write tests for those usages before refactoring them.

To verify the changes don't break anything, we run the tests and the app.

Only app code is modified in this step.

## Step 12

We remove the callback implementation and the tests that use it.

## Step 13

We implement sorting by adding a single line of code to the `Controller#_filter` method.

This demonstrates how our changes have made the code more composable.

The code is still not perfect, but it is improved.

This is untested code.
In a real app, we would probably continue the refactoring/restructuring process
and add tests to verify the composable pipeline works, as well as the sorting.