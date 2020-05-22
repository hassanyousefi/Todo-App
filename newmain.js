
var StateButton = 0;  //0 is all state , 1 is active state , 2 is completed state
var todos = [];
var TempEditIndex = 0;
var TableList = document.getElementById("table-list");
var input = document.getElementById("NewInput");
var EditInp = document.getElementById('editbox');



function AddTodoButton(){
    var ValueInput = input.value;
    if(!ValueInput){
        alert('Please enter a todo')
        return;
    }
    var NewTodo = {text:ValueInput , completed:false};
    todos.push(NewTodo);
    changeState(0);
    input.value = "";
}

function changeState(stateNumber){
    StateButton = stateNumber;
    Render();
    SetStatesButtonColor();
}


function Render(){

    CleanList();
    for(var j=0 ; j<todos.length ; j++){
        if(!todos[j].completed && StateButton==2)
        continue;
        if(todos[j].completed && StateButton==1)
        continue;

        var myText = todos[j].text;
        var cellTodo = document.createElement('div');
        cellTodo.className = 'todo';
        TableList.appendChild(cellTodo);
        cellTodo.innerHTML=myText;
        AddRemoveButton(cellTodo);
        if(todos[j].completed){
            AddCheckbox(cellTodo , true);
            CheckedRow(cellTodo);
        }
        else{
            AddCheckbox(cellTodo , false);
            AddEditButton(cellTodo);
        }
    }

}



function AddRemoveButton(Cell){
    var remove = document.createElement('input');
    remove.type = "button";
    remove.value= "×";
    remove.className = "removebtn";
    remove.onclick = RemoveRow;
    Cell.appendChild(remove);
}



function AddCheckbox(Cell, isComplete){
var check = document.createElement('input');
check.type = "checkbox";
check.checked = isComplete;
check.className= "inpcheckbox";
check.onclick=isCheck;
Cell.appendChild(check);

}



function AddEditButton(Cell){

    var edit = document.createElement('img');
    edit.className = "editicon";
    edit.src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QA6RXhpZgAATU0AKgAAAAgAA1EQAAEAAAABAQAAAFERAAQAAAABAAAAAFESAAQAAAABAAAAAAAAAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAASABIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD7U+C/wY+Gep/AvwR4h8Q+CfC+oX954es9T1LV9X0y3mmmlkt0lmnmmkUsxLMzMzHua8v8c6bo3i/w+1p4K8O2fhXw5rsqjw14f0PS7e3n8ZXcJDrdXsRQKNKjzlhIB5iOWJAaJJdzxJ8OfGvxX/ZL+DXh3wi0a20uh6bPqJk1AWiME09TbrJmGUSxeeYneIoQ6x7TwSD7n8L/AIZXHhN7nX/Euox+IvHupwxx6lrCxeXEiLyttaxknybdCSQucsxLuWYk0Afnx4m+Evwg0zxJq1nrn7S+reFtbt7uWG+0LQLe5h07TrhXIktrWPB2QxsGRFycKqjJor5y/aLYf8NB/E/kf8jRqnf/AKe5aKAOj8ffGXx/4O8feKdC0Dxz4k0PRNO1e8tbLTdN1e4t7a1hSdwkccaOFRFAACqAAKwf+Givitg/8XO8ZdP+g/d//HKKKAPuv4X/AAv8GeIvhn4S1XVfCOhanql9pFpdXd7eabDLNcTPCjPJI7KWZ2YkliSSSSaKKKAP/9k=";
    edit.onclick=EditInput;
    Cell.appendChild(edit);

}

function CheckedRow(Cell){
    Cell.style.textDecoration='line-through';
    Cell.style.backgroundColor='rgb(84, 171, 177)';
}



function RemoveRow(){

    var mycell = Array.prototype.slice.call(TableList.children);
    var Row = this.parentNode;
    var index = mycell.indexOf(Row);
    if(confirm("do you want delete "+todos[index].text)){
    todos.splice(index,1);
    Render();

}

}
function isCheck(){

    var mycell = Array.prototype.slice.call(TableList.children);
    var Row = this.parentNode;
    var Index = mycell.indexOf(Row);
    if(this.checked)
    todos[Index].completed = true;
    else
    todos[Index].completed = false;
    Render();

}




function EditInput(){
    document.getElementsByClassName('container')[0].style.opacity="0.5";
    document.getElementsByClassName('editStation')[0].style.display="block";
    var mycell = Array.prototype.slice.call(TableList.children);
    var Row = this.parentNode;
    TempEditIndex = mycell.indexOf(Row);
    EditInp.value = todos[TempEditIndex].text;

}


function OkEditButton(){
    
    document.getElementsByClassName('container')[0].style.opacity="1";
    document.getElementsByClassName('editStation')[0].style.display="none";
    todos[TempEditIndex].text = EditInp.value;
    Render();

}


function SetStatesButtonColor(){
    var ButtonsBoxes = document.getElementsByClassName('button-boxes')[0]; 
    for(var i=0 ; i< 4 ; i++){
        if(StateButton+1==i){
            ButtonsBoxes.children[i].style.backgroundColor="rgb(84, 171, 177)";   
        }
        else{
            ButtonsBoxes.children[i].style.backgroundColor="rgb(245, 245, 245)";
        }
    }

}

function CleanList(){
    while (TableList.firstChild) {
        TableList.removeChild(TableList.lastChild);
      }
}

function CheckedRow(Cell){
    Cell.style.textDecoration='line-through';
    Cell.style.backgroundColor='rgb(84, 171, 177)';
}


