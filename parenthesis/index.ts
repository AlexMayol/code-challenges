/*

This problem was asked by Google.

Given a string of parentheses, write a function to compute the minimum number of 
parentheses to be removed to make the string valid (i.e. each open parenthesis is eventually closed).

For example, given the string "()())()", you should return 1.
Given the string ")(", you should return 2, since we must remove all of them.

*/

const REGEXP = /(\(\))/g;

export const numberOfElementsToRemove = (parentheses: string): number => {
    let state = parentheses;

    const canRemove = (str: string) => {
        const result = str.replace(REGEXP, "");

        if (result !== str) {
            state = result;
            canRemove(result);
        }

        return;
    };

    canRemove(parentheses);

    return state.length;
};
