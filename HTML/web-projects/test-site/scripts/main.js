let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/微信图片20200312135045.jpg'){
        myImage.setAttribute('src','images/微信图片20200314173345.jpg');
    } else{
        myImage.setAttribute('src','images/微信图片20200312135045.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'I Love You ' + myName;
  }

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'I Love You ' + storedName;
  }
myButton.onclick = function() {
    setUserName();
 }