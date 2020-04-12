1)Prompt set up for password length information.  While loop set up for validation purposes to exclude out of range numbers.

2)Confirm boxes used to generate character type information.  Empty array set up for random character purposes.  Boiler-plate arrays set up as space for arrays of character-types, and to test logic.  While loop set up, using boolean flag for form validation purposes.  password array length set up as variable for 'for loop' during password generation. 

3)For loop set up in "generate password" function, that selects random element for element of available characters.  The for loops runs as many times as the length of the password, and each iteration of the loop, pushes a random character to an empty array.  The array returned and joined with the join("") method.

I used this technique for choosing a random element from an array, 

var  passChar = characters[Math.floor(Math.random() * characters.length)];

which I initially was introduced here

https://modernweb.com/45-useful-javascript-tips-tricks-and-best-practices/ 

and is a technique I have used on several "codewars" katas and on personal projects - and allows for a Random array element selection using the Math.random() method, and the length of the given array. 

I also finished the arrays for the data types.

I used the list given here

https://owasp.org/www-community/password-special-characters 



4)Variable names changed to more appropriate, self-explicatory names!

5)Screenshots added in Assets.  Comments amended.  Logic amended to exclude non-numerical data on initial prompt box.


