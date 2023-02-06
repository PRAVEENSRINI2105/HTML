/*function myFunction(){
    console.log("I am clicked")
}
*/

//new method
/*
var button=document.querySelector("button");
button.addEventListener("click",function()
{
    console.log("Javascript")

})
*/
//another method
/*var button=document.querySelector("button");
button.addEventListener("click",myFunction);

function myFunction(){
    console.log("I am java")
}
*/

/*
var button=document.querySelector("button");
button.addEventListener("click",myFunction);

function myFunction(){
   var listItems=document.getElementsByClassName("list-items");
   console.log(listItems);
   for(var i=0;i<listItems.length;i++) {
listItems[i].style.backgroundcolor="red";
listItems[i].style.margin="2px";
listItems[i].innerHTML="vegetables";
};
}
*/


//Event parameter or Event Argument
/*
var button=document.querySelector("button");
button.addEventListener("click",myFunction);

function myFunction(e){
   
   console.log(e);
 
}
*/
/*
// class,id,type,target,event,clientx(from the browser window),clienty,offsetx(from the element),altkey(true,flase),shiftkey(true,false)
var h1=document.createElement("h1");
var text=document.createTextNode("This is new heading");
h1.id="title";
h1.appendchild(text);
console.log(h1);
var body=document.querySelector("body");
body.appendChild(h1);
var button=document.querySelector("button");
button.addEventListener("click",myFunction);
function myFunction(e)
{
    var title=document.getElementById("title");
    title.innerHTML=e.offsetx;
    console.log(e.offsetx);
}

*/


//Mouse Events
//mouseup,mousedown,mouseenter,mouseout,mouseleave,change box color inside(newElement) and outside of the box(body)
/*
var newElement=document.getElementById("newElement");
newElement.addEventListener("click",myFunction);

function myFunction(e){
var body=document.querySelector("body");
    //console.log(e.type);
    //newElement.style.backgroundcolor="rgb("+e.offsetX+","+e.offsetY+",23)";
    body.style.backgroundcolor="rgb("+e.offsetX+","+e.offsetY+",23)";
    console.log(e.offsetX);
    console.log(e.offsetY);
}
*/

//input event or keyboard event
/*
var input=document.querySelector('input[type="email"]');
console.log(input);
*/

//keydown, keyup,keypress
/*
var input=document.querySelector('input[type="text"]');
//console.log(input);
input.addEventListener("keypress",myFunction);

function myFunction(e){
    console.log(e.type);
    var p=document.querySelector('p');
    p.innerHTML=e.target.value;
}
*/

//Event function blur and focus
/*
var input=document.querySelector('input[type="text"]');

input.addEventListener("focus",myFunction);

function myFunction(e){
    console.log(e.type);
}
*/
/*
var input=document.querySelector('input[type="text"]');

input.addEventListener("blur",myFunction);

function myFunction(e){
    console.log(e.type);
}
*/


//select event functions
//change
/*
var select=document.querySelector("select");
select.addEventListener("change",myFunction);
function myFunction(e) {
    console.log(e.type);
}
*/

//submit event function
/*
var form=document.querySelector("form");
form.addEventListener("change",myFunction);
function myFunction(e) {
    e.preventDefault();
    console.log(e.type);
}
*/

















