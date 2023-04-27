# Part 2 A Little More of a Challenge

1. What will happen at line 12 and why? If the code causes an error, explain why. 
   1. The code will print 3. Because the parameter prices has 3 elements, and i is defined inside the funciton so that it can be accessed wherever inside the function. The for loop will stop when i reaches 3.
2. What will happen at line 13 and why? If the code causes an error, explain why.
   1. The code will print 150. Because discountedPrice is defined by the var keyword inside the function discountPrices which means it can be accessed inside the function. In the last iteration of the for loop, discountedPrice = 300 * 0.5 = 150. So the code will print 150.
3. What will happen at line 14 and why? If the code causes an error, explain why.
   1. The code will print 150. Because finalPrice is defined by the var keyword inside the function discountPrices which means that it can be accessed inside the function. In the last iteration of the for loop, finalPrice = Math.round(discountedPrice*100)/100 = 150. So the code will print 150.
4. What will this function return? Give a brief explanation why. If the code causes an error, explain why.
   1. The function will return an array of numbers. In this example, the array will be [50, 100, 150]. According to the analysis we did above, each of the 3 iterations of the for loop adds 50, 100, 150 respectively into the discounted variable. And discounted is defined by the var keyword, so it can be returned by the function.
5. What will happen at line 12 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5))
   1. The code will print 3. Because the parameter prices has 3 elements, and i is defined by the let keyword inside the block of the funciton, so that it can be accessed wherever inside the function. The for loop will stop when i reaches 3.
6. What will happen at line 13 and why? If the code causes an error, explain why.
   1. The code will return an error that "ReferenceError: discountedPrice is not defined". Because discountedPrice is defined by the keyword inside the for loop, it can not be accessed outside of the block the for loop.
7. What will happen at line 14 and why? If the code causes an error, explain why
   1. The code will print 150. Because finalPrice is defined by the let keyword inside the function discountPrices which means that it can be accessed inside the block of the function. In the last iteration of the for loop, finalPrice = Math.round(discountedPrice*100)/100 = 150. So the code will print 150.
8. What will this function return? Give a brief explanation. If the code causes an error, explain why. 
   1. The function will return an array of numbers. In this example, the array will be [50, 100, 150]. According to the analysis we did above, each of the 3 iterations of the for loop adds 50, 100, 150 respectively into the discounted variable. And discounted is defined by the let keyword meaning that it can be accessed within the block of the function, so it can be returned by the function.
9. What will happen at line 11 and why? If the code causes an error, explain why.
   1.  The code will print 3. Because the parameter prices has 3 elements, and i is defined by the let keyword inside the block of the funciton, so that it can be accessed and updated inside the function. The for loop will stop when i reaches 3.
10. What will happen at line 12 and why? If the code causes an error, explain why.
    1.  The code will print 3. Because length has the number of elements in the prices which is 3. It is defined by the keyword const, and it has only one assignment, so the code does not print any error.
11. What will this function return? Give a brief explanation. If the code causes an error, explain why.
    1.  The function will return an array of numbers. In this example, the array will be [50, 100, 150]. According to the analysis we did above, each of the 3 iterations of the for loop adds 50, 100, 150 respectively into the discounted variable. And discounted is defined by the keyword const which has the same scope as let does, meaning that it can be accessed within the block of the function, so it can be returned by the function. Also, discounted has the value of the address of the array, and the address is not changed as the code is running, so it is fine.
12. Given the above Object, write the notation for:  (These should be in your part2.md)
    1.  Accessing the value of the name property in the student object
        1.  student.name
    2.  Accessing the value of the Grad Year property in the student object
        1.  student["Grad Year"]
    3.  Calling the function for the greeting property in the student object
        1.  student.greeting()
    4.  Accessing the name property of the object in the Favorite Teacher property in student
        1.  student['favorite teacher'].name
    5.  Access index zero in the array of the courseLoad property of the student object
        1.  student.courseLoad[0]

13. For each of the following questions, note down the output as well as a brief explanation why that output was given Arithmetic
    1.  ‘3’ + 2='32': 2 map to its exact string representation, which is '2'
    2.  ‘3’ - 2=1 : 
    3.  3 + null
    4.  ‘3’ + null
    5.  true + 3
    6.  false + null
    7.  '3' + undefined
    8.  '3' - undefined
14. Comparison
    1.  ‘2’ > 1
    2.  ‘2’ < ‘12’
    3.  2 == ‘2’
    4.  2 === ‘2’
    5.  true == 2
    6.  true === Boolean(2)
15. Explain the difference between the == and === operators.
16. Given the above Object, write a for...in loop that will iterate through it and print out the value of the property if the property starts with the letter r, or if the value of that property is an odd number.  (This should be in a JS file part2-question16.js)
17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your part2.md). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavilyThe above program only prints out the time once when executed. Modify this code such that the program prints out the time every second.  (This should be a JS file - part2-question18.js)
18. 