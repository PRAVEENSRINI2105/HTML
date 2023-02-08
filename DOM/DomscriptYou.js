//console.log(document.getElementById("heading")); 

/*
window.addEventListener("DOMContentLoaded",()=>{                  
    console.log(document.getElementById("heading"));  
})
*/

/*var heading=document.getElementById("heading")
heading.innerHTML="javascript";

var item=document.getElementById("items")
item.innerHTML="hello";

var para=document.querySelector('p');
para.innerHTML="Hii";
*/

//console.log(typeof(document));
//console.log(document);
//console.log(document.all);
//console.log(document.body);
//console.log(document.url);
//console.log(document.head);
//console.log(document.head.children);
//console.log(document.images);


//document.title="hello";
//console.log(document.all[3]);
//console.log(document.all[5].textContent="hiii");


/*var list=document.getElementById("list");
console.log(list);
*/

//ist.innerText="Fruits";
//list.textContent="Fruits1"

/*var heading=document.getElementById("heading");
console.log(heading.textcontent);
console.log(heading.innerText);
*/

//var listItem=document.getElementsByClassName('list-items');
//console.log(listItem);
//console.log(listItem[2]);
//console.log(listItem[2].innerHTML);
//listItem[2].innerHTML="strawberry";
//listItem[2].style.color="red";

/*
var i;
for(i=0;i<listItem.length;i++){
    listItem[i].style.backgroundcolor="red";
    listItem[i].style.fontsize="25px";
    //listItem[i].innerHTML="Fruits";
}
*/

//tagsname
/*
var input=document.getElementsByTagName('ul')
console.log(input);
*/


//queryselector
/*
var list=document.querySelector('li');
console.log(list);

var list=document.querySelectorAll('li');
console.log(list);

*/
//ID
//var list=document.querySelectorAll('#list');
//console.log(list);
//class
/*
var list=document.querySelectorAll('.list-items');
console.log(list);
*/
/*
var list=document.querySelectorAll('.list-items');
console.log(list);
var i;
for(i=0;i<listItem.length;i++){
    list[i].style.backgroundcolor="red";
    list[i].style.fontsize="25px";
    //listItem[i].innerHTML="Fruits";
}
*/

/*
var list=document.getElementsByTagName('li')
console.log(list);
var li1=list[0];
console.log(li1);
li1.style.color="red";
li1.innerHTML="pineapple";
*/

/*
var body=document.querySelector("body");
console.log(body.parentNode);
console.log(body.parentElement);

var list=document.querySelector("#list");
console.log(list.parentNode);
console.log(list.parentElement);


var body=document.querySelector("li");
console.log(body.parentNode);
console.log(body.parentElement);

*/

//childNode and childElement
/*
var list=document.querySelector("#list");
console.log(list.childNodes);
console.log(list.children);
console.log(list.children[1]);
console.log(list.firstChild);
console.log(list.firstElementChild);
console.log(list.lastChild);
console.log(list.lastElementChild);

console.log(list.previousSibling);
console.log(list.previousElementSibling);
console.log(list.previousElementSibling.previousElementSibling.previousElementSibling);


console.log(list.nextSibling);
console.log(list.nextElementSibling);
*/

//creating Elements
/*
var h1=document.createElement('h1');
console.log(h1);
h1.className="heading";
h1.id="heading1";
h1.setAttribute('title',"iam heading");

var headingText=document.createTextNode("This is my heading");
h1.appendChild(headingText);


//var newElement=document.getElementById("newelement");
//newElement.innerHTML=h1;


var headingText=document.createTextNode("This is my heading");
h1.appendChild(headingText);

var body=document.querySelector("body");
var input=document.querySelector("input");
body.insertBefore(h1,input);

var body=document.querySelector("body");
var p=document.querySelector("p");
body.insertBefore(h1,p);
*/

//Removing the input Elements
/*
var input=document.querySelector("input");
input.remove();
*/

/*
var body=document.querySelector("body");
var button=document.querySelector("button");
body.removeChild(button);
*/

//Replacing HTML contents
/*
var para=document.createElement("p");
var node=document.createTextNode("This is new para");
para.appendChild(node);
console.log(para);

var body=document.querySelector("body");
var p=document.querySelector("p");
body.replaceChild(para,p);
*/

