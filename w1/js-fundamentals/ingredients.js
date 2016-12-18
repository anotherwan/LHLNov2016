var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var i = 0;
var text = "";

while (ingredients[i]) {
  text += ingredients[i];
  console.log(ingredients[i]);
  i++;
}


for (var i = 0; i < 8; i++) {
  console.log(ingredients[i]);
}

var i = 7
while (ingredients[i]) {
  text -= ingredients[i];
  console.log(ingredients[i]);
  i--;
}
