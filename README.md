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