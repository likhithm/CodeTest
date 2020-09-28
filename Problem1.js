/* Write a method that takes a string argument and returns whether or not characters in the string have matching brackets. 
Meaning for every { there is a corresponding } bracket. Return true if they do, return false if they do not. 
Please unit test with the following use cases (and any others you choose to ensure functionality):

Test string - Expected result

{} - True

}{ - False (closed bracket can't proceed all open brackets.)

{{} - False (one bracket pair was not closed)

"" - True. (no brackets in the string will return True) */


let isParenthesisMatching = (str) => {
    let stack = [];
    let open = {
      '{': '}', '[': ']', '(': ')'
    };
    let closed = { 
      '}': true, ']': true, ')': true
    }

    for (let i = 0; i < str.length; i++) {
        let c = str[i];
        if (open[c]) {
            stack.push(c);
        } else if (closed[c]) {
            if (open[stack.pop()] !== c) return false;
        }
    }
    return stack.length === 0;
}

console.log(isParenthesisMatching("{}")); // true
console.log(isParenthesisMatching("")); // true
console.log(isParenthesisMatching("}{")); // false
console.log(isParenthesisMatching("(){}")); // returns true
console.log(isParenthesisMatching("[{()()}({[]})]({}[({})])((((((()[])){}")); // returns false
console.log(isParenthesisMatching("({((()))})"));  // returns true



