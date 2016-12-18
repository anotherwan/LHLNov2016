var useThis = process.argv[2]

var result = ""

// use a switch statement here
// print 'woof' if input is 'dog'
// print 'meow' if input is 'cat'

switch (useThis) {
  case "dog":
    console.log("woof");
    break;
  case "cat":
    console.log("meow");
    break;
  default:
    console.log("What's that animal?");
    break;
}




// switch (useThis) {
//   case "dog":
//     //whatever
//     break;
// }

// if (useThis === "dog") {
//   //whatever
// }