const password_input = document.getElementById("password_input");

function seebtn() {
    if(password_input.setAttribute("type","text")) {
        password_input.type = 'password';
    }else {
        password_input.type = 'text';
    }
}