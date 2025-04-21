const form = document.querySelector("form");

    form.addEventListener('submit',function(e){
        e.preventDefault();
        const height = parseInt(document.querySelector("#height").value);
        const weight = parseInt(document.querySelector("#weight").value);
        const results = document.querySelector("#results");
        // console.log(e);
        // console.log(e.target);
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0 || height === "" || weight === "") {
        results.textContent = "Please enter valid height and weight.";
        return;
      }

   const bmi =  ((weight*10000)/(height*height));
//    results.textContent =` your BMI is ${bmi.toFixed(2)}`;
   if (bmi<18.60) {
        results.textContent= `Your BMI is ${bmi.toFixed(2)} and you are underweight`;
   }if(bmi>=18.6 && bmi <=24.9){
    results.textContent= `Your BMI is ${bmi.toFixed(2)} and your Body is fit and you comes under normal range`;
   }else{
    results.textContent= `Your BMI is ${bmi.toFixed(2)} You are overWeight`;
   }

    });








// const height = document.getElementById("height");
// const weight = document.getElementById("weight");
// const calculate = document.querySelector("button");
// const results = document.getElementById("results");
// // console.log(calculate);
// calculate.addEventListener("click", (e) =>{
//     e.preventDefault();
//     const h = parseInt(height.value);
//     const w = parseInt(weight.value);

//     if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
//         results.textContent = "Please enter valid height and weight.";
//         return;
//       }

//    const bmi =  ((w*10000)/(h*h));
//    results.textContent =` your BMI is ${bmi.toFixed(2)}`;
// });
