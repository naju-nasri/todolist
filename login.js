const { Callbacks } = require("jquery");

function validate(Callback){
    if($("#user").val()=="admin" && $("#pwd").val()=="12345")
    {
        Callback();
    }
    else
    {
        alert("Invalid Credentials!!!");
    }
}
function Callback(){
    $("#loginform").attr("action","main.html");
}