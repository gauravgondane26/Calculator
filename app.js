const switchBtn = document.getElementById('switch');
const display = document.getElementById('display');
const input = document.querySelectorAll('input');
let value = "";

input.forEach((e)=>{
  e.addEventListener('click', (event)=>{
    if(event.target.value === 'C'){
      value = "";
      display.value = value;
    } 
    else if(event.target.value == '=') {
      display.value = eval(value);
    } 
    else if(event.target.value == '←') {
      value = value.substr(0, value.length - 1);
      display.value = value;
    } 
    else {
      value += event.target.value;
      display.value = value;
    }
  });
});



