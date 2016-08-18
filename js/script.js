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

function enterAdditionalUser() {
  document.getElementsByTagName("input").onkeydown = function(event) {
    if (event.keyCode == 13) {
      additionalUser();
    }
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
  list.sort(function(a,b){ return Math.random() - Math.random()});

  // change the values of the input field to update the view
  for (i = 0; i < inputAry.length; i++){
    inputAry[i].value = list[i];
  }
}

function removeUser() {
  // find every p
  var x = document.getElementsByTagName("p");
  
  //kill the last born
  document.getElementById("userField").removeChild(x[x.length - 1]);
}