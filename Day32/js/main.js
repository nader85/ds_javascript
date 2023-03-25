function validation(){

    var name = document.getElementById("name").value;
 
    var valid_name_regex = /^[A-Za-z]+$/;
 
    var age = document.getElementById("age").value;
 
    var valid_age_regex = /^[0-9]+$/;
 
    var city = document.getElementById("city").value;

    var phone = document.getElementById("phone_number").value;

    var valid_phone_regex = /^[0-9]{9,10}$/;

                            // /^\+?[1-9][0-9]{7,14}$/
   
    var password = document.getElementById("password").value;

    var valid_password_regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
   
    var email = document.getElementById("email").value;

    var valid_email_regex = /^\S+@\S+\.\S+$/;

       if(!(name.match(valid_name_regex)) || !(age.match(valid_age_regex)) || (city == "") || !(phone.match(valid_phone_regex)) || !(password.match(valid_password_regex)) || !(email.match(valid_email_regex)) ){
 
         if(!(name.match(valid_name_regex))){
 
          document.getElementById("name_error").style.visibility = "visible";
          document.getElementById("name").style.borderColor = "red";
           
        }else{
 
          document.getElementById("name_error").style.visibility = "hidden";
          document.getElementById("name").style.borderColor = "black";
 
        }
 
        if(!(age.match(valid_age_regex))){
 
          document.getElementById("age_error").style.visibility = "visible";
          document.getElementById("age").style.borderColor = "red";
           
        }else{
 
          document.getElementById("age_error").style.visibility = "hidden";
          document.getElementById("age").style.borderColor = "black";
 
        }
 
        if(city == ""){
 
          document.getElementById("city_error").style.visibility = "visible";
          document.getElementById("city").style.borderColor = "red";
           
        }else{
 
          document.getElementById("city_error").style.visibility = "hidden";
          document.getElementById("city").style.borderColor = "black";
 
        }
        
        if(!(phone.match(valid_phone_regex))){
 
            document.getElementById("phone_error").style.visibility = "visible";
            document.getElementById("phone_number").style.borderColor = "red";
             
          }else{
   
            document.getElementById("phone_error").style.visibility = "hidden";
            document.getElementById("phone_number").style.borderColor = "black";
   
          }

          if(!(password.match(valid_password_regex))){
 
            document.getElementById("password_error").style.visibility = "visible";
            document.getElementById("password").style.borderColor = "red";
             
          }else{
   
            document.getElementById("password_error").style.visibility = "hidden";
            document.getElementById("password").style.borderColor = "black";
   
          }
          if(!(email.match(valid_email_regex))){
 
            document.getElementById("email_error").style.visibility = "visible";
            document.getElementById("email").style.borderColor = "red";
             
          }else{
   
            document.getElementById("email_error").style.visibility = "hidden";
            document.getElementById("email").style.borderColor = "black";
   
          }
 
        return false;
 
 
     }else{
 
        document.getElementById("name_error").style.visibility = "hidden";
        document.getElementById("name").style.borderColor = "black";
        document.getElementById("age_error").style.visibility = "hidden";
        document.getElementById("age").style.borderColor = "black";
        document.getElementById("city_error").style.visibility = "hidden";
        document.getElementById("city").style.borderColor = "black";
        document.getElementById("phone_error").style.visibility = "hidden";
        document.getElementById("phone_number").style.borderColor = "black";
        document.getElementById("password_error").style.visibility = "hidden";
        document.getElementById("password").style.borderColor = "black";
        document.getElementById("email_error").style.visibility = "hidden";
        document.getElementById("email").style.borderColor = "black";
        return true;
 
     }
 
 
  }