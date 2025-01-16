
let form = document.querySelector('form');
 let bminame = document.getElementById('bminame')
form.addEventListener('submit',(e)=>{
     e.preventDefault();

     bminame.style.display = 'block'

    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    let result = document.getElementById('result');
   if(height === "" || height<0 || isNaN(height)){
    result.innerHTML = `Please Enter valid Height ${height}`
   }
  else if(weight === "" || weight<0 || isNaN(weight)){
    result.innerHTML = `Please Enter valid Weight ${weight}`
   }
   else{
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerText = `${bmi}`
   }
    
})