//FUNCTION WHICH CHECKS IF A STRING IS PALINDROME OR NOT

function palindrome(string){
    
    var arrayString=string.split("");
    var reverseString=arrayString.reverse().join("");
    console.log(reverseString);
    if(string==reverseString){
        console.log("The result of palindrome of "+ string+ " is True");
        return "True"
    }else{
        console.log("The result of palindrome of "+ string+ " is false");
        return "False"
    }
}
//palindrome("tenet");
//palindrome("sara");
module.exports=palindrome;