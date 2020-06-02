
var StateBtnNum = 0;  //0 is all state , 1 is active state , 2 is completed state
var Todos = [];
var TempIndex = 0;
var Doc = document.getElementById.bind(document);
var TableList = Doc("table-list"),
Input = Doc("new-input"),
EditInp = Doc('edit-box'),
Container = Doc("container")
EditStation = Doc("edit-station"),
BtnBox = Doc("button-boxes").children;


function newTodoBtn(){
    var valueInput = Input.value;
    if(!valueInput){
        alert('Please enter a todo')
        return;
    }
    var newTodo = {text:valueInput , completed:false};
    Todos.push(newTodo);
    changeState(0);
    Input.value = "";
}


function changeState(number){
    StateBtnNum = number;
    render();
    stateBtnColor();
}


function render(){

    cleanList();
    for(var j=0 ; j<Todos.length ; j++){
        if(!Todos[j].completed && StateBtnNum==2)
        continue;
        if(Todos[j].completed && StateBtnNum==1)
        continue;

        var myText = Todos[j].text;
        var cellTodo = document.createElement('div');
        
        TableList.appendChild(cellTodo);
        cellTodo.innerHTML=myText;
        addRemoveBtn(cellTodo);
        if(Todos[j].completed){
            cellTodo.className = 'todo completed-style';
            addCheckbox(cellTodo , true);
        }
        else{
            cellTodo.className = 'todo';
            addCheckbox(cellTodo , false);
            addEditBtn(cellTodo);
        }
    }

}



function addRemoveBtn(cell){
    var remove = document.createElement('input');
    remove.type = "button";
    remove.value= "×";
    remove.className = "removebtn";
    remove.onclick = removeRow;
    cell.appendChild(remove);
}



function addCheckbox(cell, isComplete){
var check = document.createElement('input');
check.type = "checkbox";
check.checked = isComplete;
check.className= "inpcheckbox";
check.onclick=isCheck;
cell.appendChild(check);

}



function addEditBtn(cell){

    var edit = document.createElement('img');
    edit.className = "editicon";
    edit.src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QA6RXhpZgAATU0AKgAAAAgAA1EQAAEAAAABAQAAAFERAAQAAAABAAAAAFESAAQAAAABAAAAAAAAAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAASABIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD7U+C/wY+Gep/AvwR4h8Q+CfC+oX954es9T1LV9X0y3mmmlkt0lmnmmkUsxLMzMzHua8v8c6bo3i/w+1p4K8O2fhXw5rsqjw14f0PS7e3n8ZXcJDrdXsRQKNKjzlhIB5iOWJAaJJdzxJ8OfGvxX/ZL+DXh3wi0a20uh6bPqJk1AWiME09TbrJmGUSxeeYneIoQ6x7TwSD7n8L/AIZXHhN7nX/Euox+IvHupwxx6lrCxeXEiLyttaxknybdCSQucsxLuWYk0Afnx4m+Evwg0zxJq1nrn7S+reFtbt7uWG+0LQLe5h07TrhXIktrWPB2QxsGRFycKqjJor5y/aLYf8NB/E/kf8jRqnf/AKe5aKAOj8ffGXx/4O8feKdC0Dxz4k0PRNO1e8tbLTdN1e4t7a1hSdwkccaOFRFAACqAAKwf+Givitg/8XO8ZdP+g/d//HKKKAPuv4X/AAv8GeIvhn4S1XVfCOhanql9pFpdXd7eabDLNcTPCjPJI7KWZ2YkliSSSSaKKKAP/9k=";
    edit.onclick=editInput;
    cell.appendChild(edit);

}




function removeRow(){

    var mycell = Array.prototype.slice.call(TableList.children);
    var Row = this.parentNode;
    var index = mycell.indexOf(Row);
    if(confirm("do you want delete "+Todos[index].text)){
    Todos.splice(index,1);
    render();
    }
}


function isCheck(){

    var myCell = Array.prototype.slice.call(TableList.children);
    var row = this.parentNode;
    var index = myCell.indexOf(row);
    if(this.checked)
    Todos[index].completed = true;
    else
    Todos[index].completed = false;
    render();
}


function editInput(){
    
    Container.classList.add("opacity");
    EditStation.classList.remove("edit-station");
    EditStation.classList.add("edit-station-on");
    var myCell = Array.prototype.slice.call(TableList.children);
    var row = this.parentNode;
    TempIndex = myCell.indexOf(row);
    EditInp.value = Todos[TempIndex].text;

}


function okEditBtn(){
    Container.classList.remove("opacity");
    EditStation.classList.add("edit-station");
    EditStation.classList.remove("edit-station-on");
    Todos[TempIndex].text = EditInp.value;
    render();

}


function stateBtnColor(){
    for(var i=1 ; i< 4 ; i++){
        if(StateBtnNum+1==i){
            BtnBox[i].classList.add("active-state");   
        }
        else{
            BtnBox[i].classList.remove("active-state");
        }
    }

}


function cleanList(){
    while (TableList.firstChild) {
        TableList.removeChild(TableList.lastChild);
      }
}
