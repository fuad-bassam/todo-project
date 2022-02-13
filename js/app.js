var userName = prompt("Enter Your Name");


//do{
var userGender = prompt("Enter Your Gender","Male or Female");

var genderCondition = userGender.toUpperCase();

//}
//while (genderCondition != "MALE" || genderCondition != "FEMALE") 

var titleName ="";
    if (genderCondition=="MALE"){
         titleName ="MR.";

    }else if(genderCondition=="FEMALE"){
         titleName ="Ms.";

    }else{

    }


    var userAge = prompt("Enter Your Age");
    if(userAge<=0){
        alert("wrong age!!!");

    }

    if (confirm("did you want to see welcoming message???")) {
        
        alert( "Hello "+titleName + userName + "! How are you today?");
  
      }



const arr1=[]
// sort array item 
function funSortArr(item){
arr1.push(item);
}
// print array item in console
function funPrintArr(arr){

    for(let x=0 ;x<arr.length ;x++){
console.log(arr[x]);

    }
}

funQuestion("Have you completed your higher education?");
funQuestion("Are you a programmer")
funQuestion("are you working")

//for the question and sort the answer 
function funQuestion (questionText){
    var answerQuestion ="invalid";
    var userGender = prompt(questionText,"yes or no ");

    var genderCondition = userGender.toUpperCase();
if(genderCondition == "YES"){

    answerQuestion= "YES";
}else if(genderCondition == "NO"){

    answerQuestion= "NO";
} 
funSortArr(answerQuestion) ;
}

funPrintArr(arr1);
