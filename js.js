// Select Elements from DOM
let num = document.getElementById('list').value;


const cm = document.getElementById('cm');
const button = document.getElementById('convert');


document.getElementById('output').style.visibility = 'hidden';
        
//aDD eVENT LISTENER
button.addEventListener(('click'), function getSelectValue()
{  var selectedValue = num
 
    document.getElementById('output').style.visibility = 'visible';
    let lbs = cm.value;

    if(selectedValue){
    document.getElementById('metresOutput').innerHTML = lbs/100;}

         if(selectedValue){
    document.getElementById('inchesOutput').innerHTML = lbs/2.54;}

    if(selectedValue){
    document.getElementById('feetOutput').innerHTML = lbs/30.48;}


});


