var first = document.getElementById('first');
var second = document.getElementById('second');
var result = document.getElementById('result');

first.addEventListener("input", sum);
second.addEventListener("input", sum);

function sum() {
  
var one = parseFloat(first.value) || 0;
var two = parseFloat(second.value) || 0;
  
var add = one+two;

result.innerHTML = "Your Sum is : " + add;

}