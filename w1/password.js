//var myArgs = process.argv.slice(2);
/*
var obfuscate = function(password) {
  for (var i = 0; i < password.length; i++) {
    if (password[i] === "a") {
      console.log(4);
    } else if (password[i] === "e") {
      console.log(3);
    } else if (password[i] === "o") {
      console.log(0);
    } else if (password[i] === "l") {
      console.log(1);
    } else {
      console.log(password[i]);
    }
  }
}

// obfuscate("abracadabra");
// obfuscate("password");
// obfuscate("audaciously");
*/
var obfuscate = function(password) {
  var temp = password;
  for (var i = 0; i < temp.length; i++) {
    temp = temp.replace("a", "4");
    temp = temp.replace("e", "3");
    temp = temp.replace("o", "0");
    temp = temp.replace("l", "1");
  }
  return temp;
}


//console.log(process.argv);

var arguments = process.argv.slice(2);
var myPassword = function(arguments) {
  var concatenatedPass = "";
  for (var i = 0; i < arguments.length; i++) {
    concatenatedPass += arguments[i] + " ";
  }
  return concatenatedPass;
}

//var password = process.argv[2] + " " + process.argv[3] + " " + process.argv[4];
console.log(obfuscate(myPassword(arguments)));
//console.log('myArgs: ', myArgs);

