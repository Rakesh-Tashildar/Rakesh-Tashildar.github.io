// so now each function is put inside the object
//DOM elemets
const resultEl=document.getElementById('result');
const lengthEl=document.getElementById('length');
const uppercaseEl=document.getElementById('uppercase');
const lowercaseEl=document.getElementById('lowercase');
const numberEl=document.getElementById('numbers');
const symbolEl=document.getElementById('symbols');
const generateEl=document.getElementById('generate');
const clipboardEl=document.getElementById('clipboard');


const randomFunc={
    lower:getRandomLower,
    upper:getRandomUpper,
    number:getRandomNumber,
    symbol:getRandomSymbol
}

/*//copy clisboard*/
function myFunction() {
  /*Get the text field */
  let resultEl1 = document.getElementById("result");
  /* Select the text field */
  let newpassword =resultEl.innerText;
  //resultEl1.setSelectionRange(0, 99999); /* For mobile devices */
   /* Copy the text inside the text field */
  navigator.clipboard.writeText(newpassword);
  /* Alert the copied text */
  alert("Copied the text: " + resultEl.innerText);
}




generateEl.addEventListener('click', () =>{

    const length = +lengthEl.value;
    const hasLower=lowercaseEl.checked;
    const hasUpper=uppercaseEl.checked;
    const hasNumber=numberEl.checked;
    const hasSymbol=symbolEl.checked;
    
    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});















//genratePassword
function generatePassword(lower, upper, number, symbol, length){
    let generatedPassword='';
    const typesCount=lower+upper+number+symbol; //this will give the count of the trues and false returned by the functions
    const typesArr= [{lower}, {upper}, {number}, {symbol}].filter
    (
        item => Object.values(item)[0]
        );
    if (typesCount === 0){
        return '';
    }
    for(let i=0; i<length; i+=typesCount){
        typesArr.forEach(type => {
            const funcName=Object.keys(type)[0];

            generatedPassword += randomFunc[funcName]();
        });
    }
    const finalPassword = generatedPassword.slice(0, length)
    return finalPassword;
}
















//genrator function
function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
//similarly to obtain uppercase letter we just the numbers
//here uppercase letters start from 65 and ends at 90
function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26)+ 65 );
}
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
}
function getRandomSymbol(){
    const symbols='!@#$~%^&*()+=[]{}<>?/,.';
    return symbols[Math.floor(Math.random()*symbols.length)];
}
//symbols[0]>>will give the ! which is indexed at '0' as array elements are indexed so similarly we 
//are now just generating random number withing that bracket to so that we get the symbols indexed at that 
//number.