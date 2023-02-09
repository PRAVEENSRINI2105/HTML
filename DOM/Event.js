function myFunction(){                        -->declare a function as myFunction in a HTML button and when we click the button it display as I am clicked
    console.log("I am clicked")                     in a traditional method
}


//new method

var button=document.querySelector("button");        -->In a new method we add a event listener it will listen a event when we click the button it will display as javascript
button.addEventListener("click",function()
{
    console.log("Javascript")

})

//another method
var button=document.querySelector("button");    -->another method of button click is by the function calling
button.addEventListener("click",myFunction);

function myFunction(){                            -->calling a myFunction
    console.log("I am java")                      -->when we click the button it will display as I am java
}



var button=document.querySelector("button");          -->getting a button
button.addEventListener("click",myFunction);          -->adding a event listener and variable name as myFunction

function myFunction(){
   var listItems=document.getElementsByClassName("list-items");                 -->getting a list-items the class name
   console.log(listItems);                                              -->printing the listItems
   for(var i=0;i<listItems.length;i++) {                    -->iterate by for loop
listItems[i].style.backgroundcolor="red";                   -->when we click the button it will chnage as background color as red
listItems[i].style.margin="2px";                            -->when we click the button the margin is set as 2px
listItems[i].innerHTML="vegetables";                        -->when we click the button the list[i] is change as vegetables
};
}
*/


//Event parameter or Event Argument

var button=document.querySelector("button");                -->it will used to display any event happens when we click means in console logs it will display as click
button.addEventListener("click",myFunction);

function myFunction(e){
   
   console.log(e);
 
}


// class,id,type,target,event,clientx(from the browser window),clienty,offsetx(from the element),altkey(true,flase),shiftkey(true,false)
var h1=document.createElement("h1");                                -->create the element as h1
var text=document.createTextNode("This is new heading");                -->insert the text
h1.id="title";                                                          -->setting the id name as title
h1.appendchild(text);                                                   -->append the text with h1
console.log(h1);                                                        -->print the h1
var body=document.querySelector("body");
body.appendChild(h1);                                                   -->append the h1 in a body
var button=document.querySelector("button");
button.addEventListener("click",myFunction);
function myFunction(e)
{
    var title=document.getElementById("title");             -->when we click the offset of x will displays in a same manner we can declare a offset y also
    title.innerHTML=e.offsetx;
    console.log(e.offsetx);
}




//Mouse Events
//mouseup,mousedown,mouseenter,mouseout,mouseleave,change box color inside(newElement) and outside of the box(body)

var newElement=document.getElementById("newElement");
newElement.addEventListener("click",myFunction);                            -->it is used to display a mouse event up,down,enter,out,leave by creating a box and when we click the mouse it will display the events

function myFunction(e){
var body=document.querySelector("body");                                        
    //console.log(e.type);
    //newElement.style.backgroundcolor="rgb("+e.offsetX+","+e.offsetY+",23)";
    body.style.backgroundcolor="rgb("+e.offsetX+","+e.offsetY+",23)";
    console.log(e.offsetX);
    console.log(e.offsetY);
}


//input event or keyboard event

var input=document.querySelector('input[type="email"]');        -->declare the input type as email
console.log(input);                                             -->printing the input

//keydown, keyup,keypress

var input=document.querySelector('input[type="text"]');             
//console.log(input);
input.addEventListener("keypress",myFunction);              -->when we key press it will display as keypress in console log we can also declared it as keyup, keydown

function myFunction(e){
    console.log(e.type);
    var p=document.querySelector('p');
    p.innerHTML=e.target.value;                             -->setting the target value
}


//Event function blur and focus

var input=document.querySelector('input[type="text"]');

input.addEventListener("focus",myFunction);                 -->it will used to display a blur and focus when we declare it inside a event listener

function myFunction(e){
    console.log(e.type);
}


var input=document.querySelector('input[type="text"]');

input.addEventListener("blur",myFunction);                  -->it will display it as a blur

function myFunction(e){
    console.log(e.type);
}



//select event functions
//change

var select=document.querySelector("select");
select.addEventListener("change",myFunction);           -->when we change means it will display as change by the help of eventlistener
function myFunction(e) {
    console.log(e.type);
}


//submit event function

var form=document.querySelector("form");
form.addEventListener("change",myFunction);                 -->when we submitting the form it display as change
function myFunction(e) {
    e.preventDefault();                                     -->It is used to prevent the change immediately
    console.log(e.type);
}


















