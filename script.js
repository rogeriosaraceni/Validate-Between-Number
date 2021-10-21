validateBetweenNumber = () => {
   const min = 7;
   const max = 20;
   const input = document.querySelector('.inputNumber');
   let n = input.value;

   n = Number(n);

   if (n < min || n > max) {
      text = "Value has to be between 7 and 20";
      input.value = "";
   } 
   else {
      text = "";
      input.value === n;
   }

   console.log(n);

   document.querySelector("#msgBetweenNumber").innerHTML = text;
}
