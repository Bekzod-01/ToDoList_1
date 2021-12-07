var addTodoButton = document.querySelector('#addToDo');
var inputField = document.querySelector('#inputField');
var toDocontainer = document.querySelector('#toDoContainer');

addTodoButton.addEventListener('click' , function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph_styling');
    paragraph.innerText = inputField.value;
    toDocontainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click' , function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dbclick' , function(){
        paragraph.removeChild(paragraph);
    })
})