validateBetweenNumber = () => {
   const min = 7;
   const max = 20;
   
   const input = document.getElementById('num');
   let n = input.value;

   n = Number(n);

   if (n < min) {
      text = "Value has to be between 7 and 20";
      input.value = min;
   } 
   else if (n > max) {
      text = "Value has to be between 7 and 20";
      input.value = max;
   } 
   else {
      text = "";
      input.value === n;
   }

   console.log(n);

   document.getElementById("msgBetweenNumber").innerHTML = text;
}
