

  /* Sanity check*/
console.log("Hello World")

portfolio.addEventListener ("click", (event) => {
    console.log (event)
})

  /* Current year displayed as part of text*/
const d = new Date().getFullYear()
document.getElementById("footer").innerHTML = d;

 /*Button alert added to click me buttont*/

function Button() {alert ("Nice to meet you");
}

 /*Hover button chnages to hello and back to hover on mouse leave*/

document.getElementById('Button2').onmouseover = () => {
    document.getElementById('Button2').innerText = 'Hello';
};

document.getElementById('Button2').onmouseleave = () => {
    document.getElementById('Button2').innerText = 'Hover';
};


 /*Button Counter added to Text Number: 1 with If Else code*/

var count = 1;
var output = document.getElementById ('txt-counter');    
function countClicks() {
    count = count + 1;
    output.innerHTML = count;
    if (count%2==0) {
        document.getElementById('txt-counter').classList.add('even')
    } else {
        document.getElementById('txt-counter').classList.add('odd');
        document.getElementById('txt-counter').classList.remove('even');
    }
}

function changeColor(newColor) {

    const elem = document.getElementById("txt-counter");
    elem.style.color = newColor;
  }


 /*Loop code*/

for  (var i = 0; i < 100; i++) {
console.log("The count of " + i + Math.pow(i,2));
  }
