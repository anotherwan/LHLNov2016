 var a = 1, b = 2, c = 3;

     (function firstFunction(){
         var b = 5, c = 6;

         (function secondFunction(){
             var b = 8;
                console.log("a: 1,", "b: 8,","c: 6");

             (function thirdFunction(){
                 var a = 7, c = 9;

                 (function fourthFunction(){
                     var a = 1, c = 8;

                 })();
             })();
         })();
     })();



// var a = 4;    // a is a global variable, it can be accessed by the functions below

//      function foo() {
//          var b = a * 3;    // b cannot be accessed outside foo function, but can be accessed by functions
//                          // defined inside foo
//          function bar(c) {
//          var b = 2;  // another `b` variable is created inside bar function scope
//                      // the changes to this new `b` variable don't affect the old `b` variable
//          console.log( a, b, c );
//          }

//          bar(b * 4);
//      }

//      foo(); // 4, 2, 48

//   IIFE, Immediately Invoked Function Expression, is a common pattern for
//   creating local scopes example:

//          (function(){ // the function expression is surrounded by parenthesis
//              // variables defined here
//              // can't be accessed outside
//          })(); // the function is immediately invoked

// //place the following code
//   //inside one of the functions in scope.js so the output is a: 1, b: 8, c: 6

//      //console.log("a: "+a+", b: "+b+", c: "+c);

