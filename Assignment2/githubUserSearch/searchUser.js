var users =[];
var selectedUser = [];
var finalList = "";
fetch("https://api.github.com/users")
    .then(response => response.json())
    .then(data => {
        for(var i=0;i<data.length;i++){
            users = users.concat(data[i].login);
        }
    })

function searchFunction(){
    var str = document.getElementById("name").value;
    for(var i=0;i<users.length;i++){
        if(users[i].includes(str)){
            selectedUser = selectedUser.concat(users[i]);
        }
    }
    selectedUser.sort();
    for(var c=0;c<selectedUser.length;c++){
        finalList += "<li>" + selectedUser[c]    + "</li>";
        document.getElementById("display").innerHTML = finalList;
    }
    if(selectedUser.length == 0){
        document.getElementById("display").innerHTML = "No such name found!";
    }
    
}