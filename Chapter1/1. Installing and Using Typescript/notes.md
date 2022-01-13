Things learned.
1. command used to compile ts files

tsc filename.ts

2. To define an element will have input use "! as HTMLInputElement" at the end.

ex. 

const input1 = document.getElementById("num1")! as HTMLInputElement;

3. To signify that we will only be getting numbers add : number to the end of the property passed in the function.
ex.
function add(num1: number, num2: number){
    return num1 + num2;
}

4. To signify that the value coming in is a number and not a string add  + sign.
ex.

button.addEventListener("click", function() {
    console.log(add(+input1.value, +input2.value));
})