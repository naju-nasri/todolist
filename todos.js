  
$(document).ready(function () { 

    // take data from json file
    $.getJSON("https://jsonplaceholder.typicode.com/todos", 
            function (data) { 
        var entry = ''; 

         
        $.each(data, function (key, value) { 
        if(entry==''){
                entry += '<tr>'; 
            entry += '<td><b>USERID</b></td>'; 

            entry += '<td><b>ID</b></td>'; 

            entry += '<td><b>TITLE</b></td>'; 

            entry += '<td><b>COMPLETED</b></td>'; 

            entry += '</tr>'; 

            }

        else
            entry += '<tr>'; 
            entry += '<td>' + value.userId + '</td>'; 

            entry += '<td>' + value.id + '</td>'; 

            entry += '<td>' + value.title + '</td>'; 
            if(value.completed==false)
            {
                entry += '<td>' + `<input id="tasksts" type="checkbox"  onchange="return Validate();">` + '</td>';
            }
            else{
                entry += '<td>' + '<input type="checkbox" disabled checked>' + '</td';
            } 

            entry += '</tr>'; 
        });
     
        
        //INSERTING ROWS INTO TABLE 
        $('#table').append(entry); 
    }); 
}); 

function Validate() {
    var checked = 0;

    //Reference the Table.
    var table1 = document.getElementById("table");

    //Reference all the CheckBoxes in Table.
    var check = table1.getElementsByTagName("INPUT");

    //Loop and count the number of checked CheckBoxes.
    for (var i = 0; i < check.length; i++) {
        if (check[i].checked) {
            checked++;
        }
    }
    if (checked%5 ==0) {
        alert("Congrats, You completed 5 tasks successfully.");
        return true;
    } else {
        return false;
    }
};
