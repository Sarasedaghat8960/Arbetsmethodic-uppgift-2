
// FUNCTION WHICH REVERSE A STRING 
function reverseString(string){
    //var string="Here is a string";
    var arrayString=string.split("")
    reverseArrayString=arrayString.reverse().join("");
    console.log("Reverse of ´"+string+"´ is : "+ reverseArrayString);
    return reverseArrayString
    }
    module.exports=reverseString;