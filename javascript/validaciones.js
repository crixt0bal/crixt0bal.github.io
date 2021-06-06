function validaciones(){
    var firstName, lastName, email, expresion, number, message;
    
    firstName = document.getElementById("firstName").value;
    email = document.getElementById("email").value;
    lastName = document.getElementById("lastName").value;
    number = document.getElementById("number").value;
    message = document.getElementById("message").value;

    

    expresion = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    
    
    
    



    if(firstName === "" || email === "" || lastName === "" || number === "" || message === ""){
        alert("Todos los campos son obligatorios a excepcion de la Empresa");
        return false;

    }
    else if(firstName.length>50){
        alert("El nombre es muy largo");
        return false;
    }
    else if(email.length>50){
        alert("El correo es muy largo");
        return false;
    }
    else if(!expresion.test(email)){
        alert("El correo no es valido");
        return false;
    }
    else if(lastName.length>50){
        alert("El apellido es muy largo");
        return false;
    }
    else if(number.length>20){
        alert("El numero es muy largo");
        return false;
    }
    else if(message.length>200){
        alert("El mensaje es muy largo");
        return false;
    }
    
}