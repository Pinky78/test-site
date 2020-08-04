//image changer
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/toby.jpg') {
      myImage.setAttribute('src','images/toby2.jpg');
    } else {
      myImage.setAttribute('src','images/toby.jpg');
    }
}
//button welcome message
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
//function
function setUserName(){
    let myName = prompt('Please enter your name');
    if(!myName){
        setUserName();
    } else {
         localStorage.setItem('name', myName);
         myHeading.innerHTML = 'Are you a never nude? , ' + myName;
    }
   
    
}
if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Are you a never nude? ' + storedName;
}
//button on click
myButton.onclick = function(){
    setUserName();
}