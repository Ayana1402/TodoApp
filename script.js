

function validate(){
    let uname = document.getElementById("uname")
    let pswd= document.getElementById("pswd")
    
    validate1(uname,pswd,pageIn)
}

function validate1(usr,pass,callback){
    if(usr.value == 'admin' && pass.value == 1234){
        callback();
    }
    else if((usr.value == '' || pass.value == '')){
        alert('Fields empty')
    }
    else{
        alert('Invalid creds')
    }
}

function pageIn(){
    window.location.href = "/home.html";
}
