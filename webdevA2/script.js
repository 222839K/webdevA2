//target all elements to save to constants
const page1btn=document.querySelector(".page1btn");
const page2btn=document.querySelector(".page2btn");
const page3btn=document.querySelector(".page3btn");
const leftBtn = document.querySelector(".leftBtn");
const rightBtn = document.querySelector(".rightBtn");
const upBtn = document.querySelector(".upBtn");
const downBtn = document.querySelector(".downBtn");
const resetBtn = document.querySelector(".resetBtn");
const ball = document.querySelector(".ball");
const bluebird = document.querySelector(".bluebirdflying");
const bluebirdflyinganim = document.querySelector(".bluebirdflying");
const nest = document.querySelector(".nest");
/* const wallposx = document.querySelector(".aaa").offsetLeft;
const wallposy = document.querySelector(".aaa").offsetTop; */
var ballX = ballY = 0;

var allpages=document.querySelectorAll(".page");
//select all subtopic pages

var lastNum = -1;
var lastNum1 = -1;
var lastNum2 = -1;
var lastNum3 = -1;
var myTimerEvt = 0;
var myTimerEvt1 = 0;
var myTimerEvt2 = 0;
var myTimerEvt3 = 0;

var birdflyinganim;
var birdflyinganim1;
var birdflyinganim2;
var birdflyinganim3;
// var bluebirdflyinganim;
document.querySelector(".nest").style.left = "25em";
document.querySelector(".nest").style.top = "17em";
document.querySelector(".win").style.display = "none";


console.log(allpages);
hideall();
function hideall()
{
    for(let onepage of allpages)
    { //go through all subtopic pages
        onepage.style.display="none"; //hide it
    }
}

function show(pgno)
{ //function to show selected page no
    hideall();
    //select the page based on the parameter passed in
    let onepage=document.querySelector("#page"+pgno);
    //show the page
    onepage.style.display="block";
}

page1btn.addEventListener("click", function () {
    show(1);
    });
    page2btn.addEventListener("click", function () {
    show(2);
    });
    page3btn.addEventListener("click", function () {
    show(3);
    });
    
/*for hamMenu */
const hamBtn=document.querySelector(".hamIcon");
hamBtn.addEventListener("click",toggleMenus);
const menuItemsList=document.querySelector("nav ul");

function toggleMenus(){ /*open and close menu*/
    menuItemsList.classList.toggle("menuShow");
    //if(menuItemsList.style.display=="block")
    //    menuItemsList.style.display="none";
    //else menuItemsList.style.display="block";
}

/*for slides in first page */
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentSlide(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("birdslides");
  let dots = document.getElementsByClassName("dot");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

const imgList = ["birdflying1.jpg", "birdflying2.jpg", "birdflying3.jpg","birdflying4.jpg",
                 "birdflying5.jpg","birdflying6.jpg","birdflying7.jpg","birdflying8.jpg",
                 "birdflying9.jpg","birdflying10.jpg","birdflying11.jpg","birdflying12.jpg",
                 "birdflying13.jpg","birdflying14.jpg","birdflying15.jpg","birdflying16.jpg"]; // images
  var index = 0;
                 
  function change() 
  {
    for (let e = 0; e < birdflyinganim.length; e++)
    {
      birdflyinganim[e].src = "Images/" +imgList[index];
      index > 14 ? index = 0 : index++;
    }
   
  }
  function doStart() {
    myTimerEvt = setInterval(change, 150);
    
  }

  function init()
  {
    birdflyinganim = document.querySelectorAll(".birdflyingimg"); 
    doStart();
  }
  document.addEventListener('DOMContentLoaded', init);

  const imgListbluebird = ["bluebirdflying.png", "bluebirdflying1.png"]; // images
  var indexbluebird = 0;
  
  function changebluebird() 
  {
    bluebirdflyinganim.src = "Images/" +imgListbluebird[indexbluebird];
    indexbluebird > 0 ? indexbluebird = 0 : indexbluebird++;
  }

 /*  function updateImageBluebird(ele, imgID) {
    if (imgID === undefined) { // if undefined, then generate a random number
      imgID = 0;
    } 
    if (imgID < imgList.length){
    imgID++;
  }
      
    ele.src = "Images/" + imgList[imgID];
    return imgID;
  } */

//functions to update variables to control ball position
  function ResetPos() 
  {
    document.querySelector(".win").style.display = "none";
    ballX=ballY=0; //reset to zero
    UpdateBallStyle();
  }
  function MovePos(leftInc, topInc) 
  {
    if (ball.style.left == document.querySelector(".nest").style.left && ball.style.top == document.querySelector(".nest").style.top)
    {
      return;
    }
    ballX += leftInc;
    ballY += topInc;
    UpdateBallStyle();
  }
  //function to update ball css as well as display text
  function UpdateBallStyle()
  {
    ball.style.left = ballX+"em"; //set left property to ball x variable
    ball.style.top = ballY+"em"; //set top property to ball x variable
    console.log(ball.style.left);
   
  }

function checkbirdpos()
{
    if (ball.style.left == document.querySelector(".nest").style.left && ball.style.top == document.querySelector(".nest").style.top)
    {
      document.querySelector(".win").style.display = "block";
    }
}

  //function just to move left (decrease left style)
function MoveLeft(){
  MovePos(-1,0);
  changebluebird();
  checkbirdpos();
  }
  //eventlisteners to activate MovePos
  leftBtn.addEventListener("click", MoveLeft);
  //leftBtn.addEventListener("click", MoveLeft(-10,0)); //wrong
  //cannot do like this. MoveLeft(-10,0) will execute immediately
  //using anonymous function to pass in arguments from eventlistener
  rightBtn.addEventListener("click", function () {
   /*  if (ballX <= wallposx)
    {
      return;
    }  */
  MovePos(+1, 0)
  changebluebird();
  checkbirdpos();
  });
  upBtn.addEventListener("click", function () {
    /* if (ballY >= wallposy)
    {
      return;
    }  */
  MovePos(0, -1)
  changebluebird();
  checkbirdpos();
  });
  downBtn.addEventListener("click", function () {
   /*  if (ballY >= wallposy)
    {
      return;
    }  */
  MovePos(0, +1)
  changebluebird();
  checkbirdpos();
  });
  resetBtn.addEventListener("click", ResetPos);

  document.addEventListener('keydown', (e) => {
    console.log(e);
    if (e.code === "ArrowRight"){
    MovePos(1,0);
    changebluebird();
    }
    if (e.code === "ArrowLeft"){
    MoveLeft();
    }
    if (e.code === "ArrowDown"){
    MovePos(0, +1);
    changebluebird();
    }
    if (e.code === "ArrowUp"){
    MovePos(0, -1);
    changebluebird();
    }
    //Need to inform user what keys to press. Better option: use switch case instead
    });

 
//can optimize using toggle class with css transitions
/*for responsive menu*/

