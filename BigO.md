# Big O(n)

[https://www.bigocheatsheet.com](Check this Out)
Whats is a good code?

- Readable
- Scalable
  [x] Speed
  [x] Memory

| Symbol     | Title              | Description                                  |
| ---------- | ------------------ | -------------------------------------------- |
| O(n)       | Linear Time        | for loops, while loops through n items       |
| O(1)       | Constant Time      | no loops                                     |
| O(log n)   | Logarithmic Time   | for loops, while loops through log n items   |
| O(n log n) | n Logarithmic Time | for loops, while loops through n log n items |
| O(n^2)     | Quadratic Time     | for loops, while loops through n^2 items     |
| O(n^3)     | Cubic Time         | for loops, while loops through n^3 items     |
| O(2^n)     | Exponential Time   | for loops, while loops through 2^n items     |
| O(n!)      | Factorial Time     | for loops, while loops through n! items      |
| O(n^k)     | k-th Power Time    | for loops, while loops through n^k items     |
| O(n!)      | Factorial Time     | for loops, while loops through n! items      |
| O(n!)      | Factorial Time     | for loops, while loops through n! items      |

### O(n) - Linear Time -- for loops, while loops through n items

### O(1) - Constant Time -- no loops

### O(n ^ 2) - Quadratic Time -- every element in a collection needs to be compared to ever other element. Two nested loops

### O(log N) - Logarithmic Time -- usually searching algorithms have log n if they are sorted (Binary Search)

### O(n log(n)) - Log Linear -- usually sorting operations

### O(2^n) - Exponential Time -- recursive algorithms that solves a problem of size N

### O(n!) - Factorial -- you are adding a loop for every element

# Big O rule

1. Care about the worst case scenario
2. Remove constants
3. Different terms for inputs:
   Different inputs should have different variables. O(a+b). A and B arrays nested would be O(a\*b)
   - for steps in order
   * for nested steps
4. Drop non dormant terms
