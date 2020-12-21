const validateCred = array =>{
  
  let lastIndex = array.length - 1;
  let copiedCreditCard = array.slice();
  let reducer = (accumulator, currentValue) => accumulator + currentValue;
  let sum = 0;
  for(i= lastIndex -1 ; i>=0; i -= 2){
    copiedCreditCard[i] = copiedCreditCard[i] *2;
    if(copiedCreditCard[i] >9){
      copiedCreditCard[i] = copiedCreditCard[i] -9;
    }
    
  }
  //console.log(array);
  //console.log(copiedCreditCard);
  sum = copiedCreditCard.reduce(reducer);
  //console.log(sum);
  if(sum % 10 === 0){
    return true;
  } else {
    return false;
  }
} ;

const findInvalidCards = nestedArray => {
  let invalidCards = [];
  for(let i=0; i<nestedArray.length; i++){
    let isValid = validateCred(nestedArray[i])
    //console.log(isValid)
    if(isValid === false){
      invalidCards.push(nestedArray[i])
    }
  }
  return invalidCards;
};

const idInvalidCardCompanies = nestedArray =>{
  let invalidAmex = 0;
  let invalidVisa = 0;
  let invalidMastercard = 0;
  let invalidDiscover = 0;
  let invalidCompanies = []
  for(let i in nestedArray){
    if(nestedArray[i][0] === 3){
      invalidAmex += 1;
    }
    if(nestedArray[i][0] === 4){
      invalidVisa += 1;
    } 
     if(nestedArray[i][0] === 5){
      invalidMastercard += 1;
    } 
     if(nestedArray[i][0] === 6){
      invalidDiscover += 1;
    } 
  }
  if(invalidAmex > 0){
    invalidCompanies.push("Amex");
  }
   if(invalidVisa > 0){
    invalidCompanies.push("Visa");
  }
   if(invalidMastercard > 0){
    invalidCompanies.push("Mastercard");
  }
   if(invalidDiscover > 0){
    invalidCompanies.push("Discover");
  }
  return invalidCompanies;
};

//console.log(validateCred(invalid1));
//console.log(findInvalidCards(batch));
//console.log(idInvalidCardCompanies(batch));

//challanges are below

//To make it easier to test credit card numbers, create a function that accepts a string and converts it into an array of numbers like the initially provided arrays. (Check the hint for a helpful function)

let differentCard = "6371513352294946";

const cardNumberSingler = array => {
  let newArray = [];
  let newArray2 = [];
  //newArray = parseInt(array);
  for(let i in array){
    newArray.push(array[i])
    newArray2.push(parseInt(newArray[i]))
  }
    
  return newArray2;
  };


//console.log(cardNumberSingler(differentCard));
//console.log(validateCred(cardNumberSingler(differentCard)));

function check () {
  if (validateCred(cardNumberSingler(document.getElementById("cardNo").value)) == true ) {
  document.getElementById("result").innerHTML = "Card number you have entered is valid.";
} else {
  document.getElementById("result").innerHTML = "Card number you have entered is NOT valid.";
}
}