var userName = prompt("Enter Your Name");


//do{
var userGender = prompt("Enter Your Gender","Male or Female");

var genderCondition = userGender.toUpperCase();

//}
//while (genderCondition != "MALE" || genderCondition != "FEMALE") 
alert("ss");
var titleName ="";
    if (genderCondition=="MALE"){
         titleName ="MR.";

    }else if(genderCondition=="FEMALE"){
         titleName ="Ms.";

    }else{

    }


    var userAge = prompt("Enter Your Age");
    if(userAge<=0){
        alert("wrong age!!!")

    }

    if (confirm("did you want to see welcoming message???")) {
        
        alert( "Hello "+titleName + userName + "! How are you today?");
  
      }


  