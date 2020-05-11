var sum=0;
var stateactive = false, stateall = false ,statecompleted = false;
var todos = [];
var table = document.getElementById("table-list");
var input = document.getElementById("inp");
// -----------------------------------------------------
function AddTodo(){
    var inp = input.value;
    if(inp==false){
        return;
    }
    var newtodo = {text:inp , completed:false};
    todos.push(newtodo);
    sum++;
    ShowAllTodos();
    input.value = "";
}

function ShowAllTodos(){
    stateactive = false;
    stateall= true;
    statecompleted = false;
    Render();
    StateColorButton(1);
}



function ShowActiveTodos(){
    stateactive = true;
    stateall= false;
    statecompleted = false;
    Render();
    StateColorButton(2);
}



function ShowCompeletedTodos(){
    stateactive = false;
    stateall= false;
    statecompleted = true;
    Render();
    StateColorButton(3);

}

// --------------------------------------------------------

function Render(){

    CleanList();
    for(var j=0 ; j<sum ; j++){
        if(!todos[j].completed && statecompleted)
        continue;
        if(todos[j].completed && stateactive)
        continue;

        var mytext = todos[j].text;
        var row = table.insertRow();
        var cell = row.insertCell(0);
        cell.innerHTML=mytext;
        AddRemoveButton(cell);
        if(todos[j].completed){
            AddCheckbox(cell , true);
            CheckedRow(cell);
        }
        else{
            AddCheckbox(cell , false);
            AddEditbutton(cell);
        }
    }

}

// -------------------------------------------------------

function AddRemoveButton(mycell){
    var btnrmv = document.createElement('input');
    btnrmv.type = "button";
    btnrmv.value= "×";
    btnrmv.className = "removebtn";
    btnrmv.onclick = RemoveRow;
    mycell.appendChild(btnrmv);
}



function AddCheckbox(mycell , complete){
var check = document.createElement('input');
check.type = "checkbox";
check.checked = complete;
check.className= "inpcheckbox";
check.onclick=ischeck;
mycell.appendChild(check);

}



function AddEditbutton(mycell){

    var edit = document.createElement('img');
    edit.className = "editicon";
    edit.src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QA6RXhpZgAATU0AKgAAAAgAA1EQAAEAAAABAQAAAFERAAQAAAABAAAAAFESAAQAAAABAAAAAAAAAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAASABIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD7U+C/wY+Gep/AvwR4h8Q+CfC+oX954es9T1LV9X0y3mmmlkt0lmnmmkUsxLMzMzHua8v8c6bo3i/w+1p4K8O2fhXw5rsqjw14f0PS7e3n8ZXcJDrdXsRQKNKjzlhIB5iOWJAaJJdzxJ8OfGvxX/ZL+DXh3wi0a20uh6bPqJk1AWiME09TbrJmGUSxeeYneIoQ6x7TwSD7n8L/AIZXHhN7nX/Euox+IvHupwxx6lrCxeXEiLyttaxknybdCSQucsxLuWYk0Afnx4m+Evwg0zxJq1nrn7S+reFtbt7uWG+0LQLe5h07TrhXIktrWPB2QxsGRFycKqjJor5y/aLYf8NB/E/kf8jRqnf/AKe5aKAOj8ffGXx/4O8feKdC0Dxz4k0PRNO1e8tbLTdN1e4t7a1hSdwkccaOFRFAACqAAKwf+Givitg/8XO8ZdP+g/d//HKKKAPuv4X/AAv8GeIvhn4S1XVfCOhanql9pFpdXd7eabDLNcTPCjPJI7KWZ2YkliSSSSaKKKAP/9k=";
    edit.onclick=EditText;
    mycell.appendChild(edit);

}

// ------------------------------------------------------


function RemoveRow(){

    var row = this.parentNode.parentNode
    var rowtext = row.textContent;
    var index = row.rowIndex;
    if(confirm("do you want delete "+rowtext)){
    todos.splice(index,1);
    sum--;
    Render();

}

}

function CheckedRow(mycell){
    mycell.style.textDecoration='line-through';
    mycell.style.backgroundColor='rgb(84, 171, 177)';
}


function EditText(){
    document.getElementsByClassName('container')[0].style.opacity="0.5";
    document.getElementsByClassName('eb')[0].style.display="block";
    var row = this.parentNode.parentNode;
    var inp = document.getElementById('editbox');
    inp.value=row.textContent;
    var index = row.rowIndex;
    todos.splice(index,1);
    sum--;
}


function OkEdit(){
    
    document.getElementsByClassName('container')[0].style.opacity="1";
    document.getElementsByClassName('eb')[0].style.display="none";
    var content = document.getElementById('editbox');
    input.value=content.value;
    AddTodo();

}

// ------------------------------------------------------------------

function StateColorButton(num){
    var statebutton = document.getElementsByClassName('button-boxes')[0]; 
    for(var i=0 ; i< 4 ; i++){
        if(num==i){
            statebutton.children[i].style.backgroundColor="rgb(84, 171, 177)";   
        }
        else{
            statebutton.children[i].style.backgroundColor="rgb(245, 245, 245)";
        }
    }

}

function CleanList(){
    while (table.firstChild) {
        table.removeChild(table.lastChild);
      }
}


function ischeck(){
    var row = this.parentNode.parentNode
    var index = row.rowIndex;
    if(this.checked)
    todos[index].completed = true;
    else
    todos[index].completed = false;

    Render();

}