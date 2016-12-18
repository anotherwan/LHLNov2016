


function findWaldo(arr, found) {
  arr.forEach(function (value, index) {
    if (value === "Waldo") {
      found(index);
    }
  })

}

function actionWhenFound(found) {
  console.log("Found him at index " + found + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

