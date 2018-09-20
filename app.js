
var buttonList = document.getElementById("btnClick");
var buttonAdd = document.getElementById("btnAdd");
var todolist = ['notebook', 'jello', 'spinach', 'rice', 'birthday', 'candies'];

function listItems() {
  clearList();
  todolist.forEach(function(item) {
    document.getElementById("test").innerHTML += 
    '<li>' + item + '<button id="del' + item + '">del</button></li>' ;
  });
};

function clearList() {
  document.getElementById("test").innerHTML = null;
};

buttonList.addEventListener("click", listItems);

buttonAdd.addEventListener("click", function() {
  value = document.getElementById("inputAdded").value;
  if (value.length > 0) {
  clearList();
  todolist.push(value);
  document.getElementById("inputAdded").value = "";
  listItems();
  } ;
});








