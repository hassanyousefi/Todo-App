var sum=0;

var todos = [];
var table = document.getElementById("table-list");


function addtodo(){
    var input = document.getElementById("inp").value;
    if(input!=false){
        todos.push(new Object());
        todos[sum].text = input;
        todos[sum].active = false;
        createtodo(input);
        document.getElementById("inp").value = "";
        sum++;
    }
    var btn = document.getElementsByClassName('showall')[0];
    Alltodo(btn);
}


function createtodo(mytext){
    var row = table.insertRow();
    var cell = row.insertCell(0);
    cell.innerHTML=mytext;
    addremove(cell);
    addcheckbox(cell);
    addedit(cell);
}


function addremove(mycell){
    var btnrmv = document.createElement('input');
    btnrmv.type = "button";
    btnrmv.value= "×";
    btnrmv.className = "removebtn";
    btnrmv.onclick = removerow;
    mycell.appendChild(btnrmv);
}

function addcheckbox(mycell){
var check = document.createElement('input');
check.type = "checkbox";
check.className= "inpcheckbox";
check.onclick = lineontext;
mycell.appendChild(check);

}

function addedit(mycell){

    var edit = document.createElement('img');
    edit.className = "editicon";
    edit.src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QA6RXhpZgAATU0AKgAAAAgAA1EQAAEAAAABAQAAAFERAAQAAAABAAAAAFESAAQAAAABAAAAAAAAAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAASABIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD7U+C/wY+Gep/AvwR4h8Q+CfC+oX954es9T1LV9X0y3mmmlkt0lmnmmkUsxLMzMzHua8v8c6bo3i/w+1p4K8O2fhXw5rsqjw14f0PS7e3n8ZXcJDrdXsRQKNKjzlhIB5iOWJAaJJdzxJ8OfGvxX/ZL+DXh3wi0a20uh6bPqJk1AWiME09TbrJmGUSxeeYneIoQ6x7TwSD7n8L/AIZXHhN7nX/Euox+IvHupwxx6lrCxeXEiLyttaxknybdCSQucsxLuWYk0Afnx4m+Evwg0zxJq1nrn7S+reFtbt7uWG+0LQLe5h07TrhXIktrWPB2QxsGRFycKqjJor5y/aLYf8NB/E/kf8jRqnf/AKe5aKAOj8ffGXx/4O8feKdC0Dxz4k0PRNO1e8tbLTdN1e4t7a1hSdwkccaOFRFAACqAAKwf+Givitg/8XO8ZdP+g/d//HKKKAPuv4X/AAv8GeIvhn4S1XVfCOhanql9pFpdXd7eabDLNcTPCjPJI7KWZ2YkliSSSSaKKKAP/9k=";
    edit.onclick=edittext;
    mycell.appendChild(edit);
    document.getElementById('inp').value="";

}


function removerow(){

    var row = this.parentNode.parentNode.rowIndex;
    var tdContent = this.parentNode.parentNode.textContent;
    if(confirm("do you want delete "+tdContent)){
    document.getElementById('table-list').deleteRow(row);
    todos.splice(row-1,1);
    sum--;
}

}

function lineontext(){
    var row = this.parentNode.parentNode;
    var index=row.rowIndex;
    if(this.checked){
        
        row.style.textDecoration='line-through';
        row.style.backgroundColor='rgb(84, 171, 177)';
        row.style.transition='0.5s';
        document.getElementsByClassName('editicon')[index-1].style.display="none";
        todos[index-1].active = true;

    }
    else{
        row.style.textDecoration='none';
        row.style.backgroundColor='white';
        document.getElementsByClassName('editicon')[index-1].style.display="inline";
        todos[index-1].active= false;

    }
}


function edittext(){
    document.getElementsByClassName('container')[0].style.opacity="0.5";
    var row = this.parentNode.parentNode.textContent;
    var inp = document.getElementById('editbox');
    inp.value=row;
    var boxofedit=document.getElementsByClassName('eb')[0];
    boxofedit.style.display="block";
    var row = this.parentNode.parentNode.rowIndex;
    document.getElementById('table-list').deleteRow(row);
    todos.splice(row-1,1);
    sum--;
    
}


function okedit(){

    var content = document.getElementById('editbox');
    var myinput=document.getElementById('inp');
    myinput.value=content.value;
    addtodo();
    document.getElementsByClassName('eb')[0].style.display="none";
    document.getElementsByClassName('container')[0].style.opacity="1";

}




function Alltodo(btn){

    for(var i=0; i<sum; i++){
        var tabe = document.getElementsByClassName('inpcheckbox')[i];
            var row = tabe.parentNode;
            row.style.display='table-cell';
    }

    var a = btn.parentNode.children;
    for(var i=0; i<4; i++){
    a[i].style.backgroundColor = "rgb(245, 245, 245)"; 
    }

    btn.style.backgroundColor= "rgb(84, 171, 177)";
}





function Activetodo(btn){
if(sum==0){
    return;
}
    for(var i=0; i<sum; i++){
    var tabe = document.getElementsByClassName('inpcheckbox')[i];
    var row = tabe.parentNode;
    if(!tabe.checked){
        row.style.display="table-cell";
    }
    else{
        row.style.display="none";
    }
    }

    var a = btn.parentNode.children;
    for(var i=0; i<4; i++){
    a[i].style.backgroundColor = "rgb(245, 245, 245)";
    }

    btn.style.backgroundColor= "rgb(84, 171, 177)";
}



function compeletedtodo(btn){
if(sum==0){
    return;
}
    for(var i=0; i<sum; i++){
    var tabe = document.getElementsByClassName('inpcheckbox')[i];
    var row = tabe.parentNode;
    if(tabe.checked){
        row.style.display="table-cell";
    }
    else{
        row.style.display="none";
    } 
    }


    var a = btn.parentNode.children;
    for(var i=0; i<4; i++){
    a[i].style.backgroundColor = "rgb(245, 245, 245)"; 
    }

    btn.style.backgroundColor= "rgb(84, 171, 177)";
}








