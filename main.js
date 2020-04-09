


function add(){
    var mytext=document.getElementById("inp").value;
    if(mytext!=false){
        var table = document.getElementById("table-list");
        var row = table.insertRow();
        var cell = row.insertCell(0);
        cell.innerHTML=mytext;
        document.getElementById('inp').value="";
    }
}

