### Tips

1. Clearification
2. State out loud
   Talk before you write
   Test your code

Psuedo code to calculate the sum of squares of a given input of numbers

This program will help calculate the sum of squares of a given input of numbers

Input: a list of numbers
Output: the sum of squares of the numbers

Psuedo code:

1. Initialize the sum of squares to 0
2. For each number in the list
3. Add the square of the number to the sum of squares
4. Return the sum of squares

Code:

```
def sum_of_squares(numbers):
    sum_of_squares = 0
    for number in numbers:
        sum_of_squares += number ** 2
    return sum_of_squares
```

function sum_of_squares
Takes input of numbers
Validate input
If input is not a list of numbers
Raise an error and ask for input again
Else
Continue
calculate sum of squares (sum_of_squares += number \*\* 2)
return sum_of_squares
End function
