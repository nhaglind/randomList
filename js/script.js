function additionalUser() {
  var inputField = document.createElement("p");
  var addField = document.createElement("input");
  var spanField = document.createElement("span");
  spanField.textContent = (document.getElementsByTagName("span").length + 1).toString();
  spanField.setAttribute("id","spanField");
  inputField.appendChild(spanField);
  inputField.appendChild(addField);
  document.getElementById("userField").appendChild(inputField);
}

function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

var messageBool = false;

function message() {
  if (messageBool == false) {
  var randomMessage = "Your list has been shuffled!";
  var newParagraph = document.createElement("p");
  newParagraph.textContent = randomMessage;
  document.getElementById("message").appendChild(newParagraph);
  messageBool = !messageBool;
  }
}

function randomizr() {
  // initialize empty array
  var list = [];

  // find all of the input fields
  var inputAry = document.getElementsByTagName("input");

  // push the values of each of the input fields to our array
  for (i = 0; i < inputAry.length; i++){
    list.push(inputAry[i].value);
  }

  // randomize the list by comparing two random values
  shuffle(list);

  // change the values of the input field to update the view
  for (i = 0; i < inputAry.length; i++){
    inputAry[i].value = list[i];
  }

  message();
  
}

function removeUser() {
  // find every p
  var x = document.getElementsByTagName("p");
  
  //kill the last born
  document.getElementById("userField").removeChild(x[x.length - 1]);
}