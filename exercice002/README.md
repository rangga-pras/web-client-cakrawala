# Project Documentation

This project includes various exercises related to Git, GitFlow, and programming in both JavaScript and TypeScript.

### 1. Git and GitFlow Tasks

#### Initializing a Repository

```sh
git init
```

This command initializes a new Git repository in the current directory.

#### Making Changes and Pushing to GitHub

```sh
git add .
git commit -m "Initial commit"
git push origin main
```

This ensures changes are committed and pushed to the remote repository.

---

### 2. Programming Exercises

#### Temperature Conversion

**JavaScript:**

```javascript
function fahrenheitToCelsius(f) {
    return (f - 32) * 5/9;
}
console.log(fahrenheitToCelsius(100)); // Output: 37.78
```

**TypeScript:**

```typescript
function fahrenheitToCelsius(f: number): number {
    return (f - 32) * 5/9;
}
console.log(fahrenheitToCelsius(100)); // Output: 37.78
```

**Explanation:**
This function converts temperature from Fahrenheit to Celsius using the formula `(F - 32) * 5/9`.

---

#### Length Conversion

**JavaScript:**

```javascript
function cmToKm(cm) {
    return `${cm / 100000} km`;
}
console.log(cmToKm(100000)); // Output: "1 km"
```

**TypeScript:**

```typescript
function cmToKm(cm: number): string {
    return `${cm / 100000} km`;
}
console.log(cmToKm(100000)); // Output: "1 km"
```

**Explanation:**
This function converts length from centimeters to kilometers by dividing the input value by 100,000.

---

#### Odd or Even Function

**JavaScript:**

```javascript
function isOdd(n) {
    return n % 2 !== 0;
}
console.log(isOdd(1000)); // Output: false
console.log(isOdd(1001)); // Output: true
```

**TypeScript:**

```typescript
function isOdd(n: number): boolean {
    return n % 2 !== 0;
}
console.log(isOdd(1000)); // Output: false
console.log(isOdd(1001)); // Output: true
```

**Explanation:**
This function checks whether the given number is odd by verifying if `n % 2` is not equal to zero.

---

#### Removing First Occurrence of a Substring

**JavaScript:**

```javascript
function removeFirstOccurrence(str, search) {
    return str.replace(search, '');
}
console.log(removeFirstOccurrence("Cakrawala University", "wala")); // Output: "Cakra University"
```

**TypeScript:**

```typescript
function removeFirstOccurrence(str: string, search: string): string {
    return str.replace(search, '');
}
console.log(removeFirstOccurrence("Cakrawala University", "wala")); // Output: "Cakra University"
```

**Explanation:**
This function replaces the first occurrence of a given substring with an empty string using `replace()`.

---

#### Palindrome Check

**JavaScript:**

```javascript
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("rangga")); // Output: false
```

**TypeScript:**

```typescript
function isPalindrome(str: string): boolean {
    return str === str.split('').reverse().join('');
}
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("rangga")); // Output: false
```

**Explanation:**
This function checks whether a word or phrase is a palindrome, meaning it reads the same forward and backward.

---

## Running TypeScript Files

To run TypeScript files, follow these steps:

1. Install TypeScript globally if not already installed:
   ```sh
   npm install -g typescript
   ```

2. Navigate to your project folder and compile TypeScript files to JavaScript:
   ```sh
   tsc filename.ts
   ```
   This will generate a corresponding `.js` file.

3. Run the generated JavaScript file using Node.js:
   ```sh
   node filename.js
   ```

For example, to compile and run `palindrome.ts`:
```sh
 tsc palindrome.ts
 node palindrome.js
```

---

## Summary

This project covers how to manage repositories using Git and GitFlow while providing hands-on experience with JavaScript and TypeScript. The implementations include basic functions with brief explanations for each task.

---