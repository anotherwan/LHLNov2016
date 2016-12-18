//console.log(process.argv);

/*
var myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

switch (myArgs[0]) {
  case 'insult':
    console.log(myArgs[1], 'smells quite badly.');
    break;
  case 'compliment':
    console.log(myArgs[1], 'is really cool.');
    break;
  default:
  console.log('Sorry, that is not something I know how to do.');
}
*/

var myArgs = require('optimist').argv,
     help = 'This would be a great place for real help information.';

 if ((myArgs.h)||(myArgs.help)) {
   console.log(help);
   process.exit(0);
 }

 switch (myArgs._[0]) {
   case 'insult':
     console.log(myArgs.n || myArgs.name, 'smells quite badly.');
     break;
   case 'compliment':
     console.log(myArgs.n || myArgs.name, 'is really cool.');
     break;
   default:
     console.log(help);
 }

 console.log('myArgs: ', myArgs);