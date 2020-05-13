var user1 = {
    name: "Anna",
    password: "125ppL" 
}
var user2 = {
    name: "Thomas",
    password: "EvbH32"
}
var user3 = {
    name: "Sabine",
    password: "12345"
}
var user4 = {
    name: "Elisa",
    password: "sonne"
}

var users=[
    user1,
    user2,
    user3,
    user4
]
function onButtonClick() {
    var inputName = document.getElementById("username").value;
    var inputPassword = document.getElementById("password").value;
    var inputIsCorrect = false;
   
    for (let index = 0; index < users.length; index++) {
        
        if (inputName == users[index].name && inputPassword == users[index].password) {
            inputIsCorrect=true;
        }
    }
    if(inputIsCorrect == true){
        window.location.href = "upcycling.html";
    }
    else{
        alert("Incorrect username or password!")
    }
}