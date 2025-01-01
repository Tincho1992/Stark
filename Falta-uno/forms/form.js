

function createAccount(){
    
    const  name = document.getElementById("name").value;
    const  surname = document.getElementById("surname").value;
    const  nickname = document.getElementById("nickname").value;
    const  category = document.getElementById("birthday").value;
    const  yearsold =document.getElementById("age").value;
    const  email = document.getElementById("email").value;
    const  tel = document.getElementById("tel").value;

  
   
    document.write( name +"<br/>" +
                    surname + "<br/>" +
                     nickname + "<br/>" +
                    category + "<br/>" + 
                     yearsold + " años" + "<br/>" +
                      email + "<br/>" + 
                      tel + "<br/>");

}