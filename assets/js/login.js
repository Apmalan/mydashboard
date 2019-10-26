const LOGIN = "admin@email.com.br";
const PASSWORD = "123logar";


function logar(){
    var username;
    var userpassword;
    
    username = $("#idEmail").val();
    userpassword = ($("#idPassword").val());
    console.log(username);
    console.log(userpassword);
    if (username = LOGIN && userpassword == PASSWORD) {
        toastr.success('Usuário encontrado');
        setTimeout(function(){location.href="index.html", 5000} );
    } else if(username != LOGIN){
        toastr.error('Usuário não encontrado ');
    }
    else {
        toastr.error('Password não encontrado ');
    }
}


