//console.log(document.getElementById("heading")); -->Getting a Element by the Id ="heading"

/*
window.addEventListener("DOMContentLoaded",()=>{                   --> Adding a Event Listener to Listen a Event
    console.log(document.getElementById("heading"));  
})
*/

/*
var heading=document.getElementById("heading")
heading.innerHTML="javascript";                            --> changing the heading content to javascript

var item=document.getElementById("items")
item.innerHTML="hello";                                    --> printing a hello in the items

var para=document.querySelector('p');
para.innerHTML="Hii";                                      --> read the  first element para
*/

//console.log(typeof(document));                           --> read the document type
//console.log(document);                                   --> print the document
//console.log(document.all);                               --> print all the nodes in the document
//console.log(document.body);                              --> print the content inside a body
//console.log(document.url);                               --> print the url in the body
//console.log(document.head);                              --> print the head in the document
//console.log(document.head.children);                     --> print the children next to the head
//console.log(document.images);                            --> print any image present inside the document or not


//document.title="hello";                                  --> assign a title as hello
//console.log(document.all[3]);                             --> assessing a third element in an array
//console.log(document.all[5].textContent="hiii");          --> replacing the 5th content into a hiii


/*var list=document.getElementById("list");                 -->declaring a list variable 
console.log(list);                                          --> print the list
*/

//list.innerText="Fruits";                                  -->Accessing a innertext fruits
//list.textContent="Fruits1"                                

/*var heading=document.getElementById("heading");           -->get the id name heading
console.log(heading.textcontent);                           -->printing the Text content
console.log(heading.innerText);                             -->print the inner Text
*/

//var listItem=document.getElementsByClassName('list-items');   -->accessing a id name list-items
//console.log(listItem);                                        -->printing the listItem
//console.log(listItem[2]);                                     -->print the second element by the array[2]
//console.log(listItem[2].innerHTML);                           -->accessing a array[2] inner content
//listItem[2].innerHTML="strawberry";                           -->setting the array[2] item as a strawberry
//listItem[2].style.color="red";                                -->change the array[2] item to the red color

/*
var i;                                                           -->Declare the variable i
for(i=0;i<listItem.length;i++){                                  -->iterate by the listItem by the for loop
    listItem[i].style.backgroundcolor="red";                     -->setting a backgroundcolor as red for each iteration by the length
    listItem[i].style.fontsize="25px";                           -->setting a fontsize as 25px for each iteration by the length
    //listItem[i].innerHTML="Fruits";                            -->setting a as Fruits for each iteration by the length
}
*/

//tagsname
/*
var input=document.getElementsByTagName('ul')                  -->get the element by the tag name
console.log(input);                                             -->printing the input
*/


//queryselector
/*
var list=document.querySelector('li');                          -->print the first li by using queryselector and declared it as a variable list
console.log(list);                                              -->print the list

var list=document.querySelectorAll('li');                       -->print the all li by using a queryselectorall and declared inside a varible list
console.log(list);                                              -->print the list

*/
//ID
//var list=document.querySelectorAll('#list');                  -->print the Id(#) named as list
//console.log(list);
//class
/*
var list=document.querySelectorAll('.list-items');              -->print the classname(.list-items)
console.log(list);
*/
/*
var list=document.querySelectorAll('.list-items');            -->selecting a class name(.list-items)
console.log(list);
var i;                                                          -->declared the variable as i
for(i=0;i<listItem.length;i++){                                 -->iterate the loop
    list[i].style.backgroundcolor="red";                        -->setting a background color as red
    list[i].style.fontsize="25px";                              -->setting the fontsize as 25px
    //listItem[i].innerHTML="Fruits";                           -->setting all the items as Fruits
}
*/

/*
var list=document.getElementsByTagName('li')            -->accessing li by the tag name
console.log(list);                                      -->printing the list
var li1=list[0];                                        -->declare a var as li1 and inserting the list[0] to the li1
console.log(li1);                                       -->print the li1
li1.style.color="red";                                  -->set the li1 color as a red
li1.innerHTML="pineapple";                              -->changing a li1 as pineapple
*/

/*
var body=document.querySelector("body");                    -->accessing a body
console.log(body.parentNode);                               -->printing a parentnode
console.log(body.parentElement);                            -->printing a parentelement

var list=document.querySelector("#list");                   -->accessing a ID named as #list
console.log(list.parentNode);                               -->print the parent node of #list
console.log(list.parentElement);                            -->print the parent name of #list


var body=document.querySelector("li");                      -->select the li
console.log(body.parentNode);                               -->select the body parentnode
console.log(body.parentElement);                            -->select the body parentelement

*/

//childNode and childElement
/*
var list=document.querySelector("#list");                   -->select the id named as #list
console.log(list.childNodes);                               -->print the list childnodes
console.log(list.children);                                 -->print the list children
console.log(list.children[1]);                              -->print the list children[1]
console.log(list.firstChild);                               -->print the firstchild
console.log(list.firstElementChild);                        -->print the list firstelement child
console.log(list.lastChild);                                -->print the lastchild of list
console.log(list.lastElementChild);                         -->print the lastelement child of list

console.log(list.previousSibling);                          -->print the previoussibling of list
console.log(list.previousElementSibling);                   -->print the previouselement sibling of list
console.log(list.previousElementSibling.previousElementSibling.previousElementSibling);  -->print the next to next to next to previouselement sibling of the child


console.log(list.nextSibling);                              -->print the next sibling of a child
console.log(list.nextElementSibling);                       -->print the nextelementsibling of the list
*/

//creating Elements
/*
var h1=document.createElement('h1');                        -->create an element h1
console.log(h1);                                            -->print that h1
h1.className="heading";                                     -->setting the h1 class name as heading
h1.id="heading1";                                           -->setting the h1 id as heading1
h1.setAttribute('title',"iam heading");                     -->setting a attribute title as i am heading for the h1

var headingText=document.createTextNode("This is my heading");  -->create an text named as this is my heading
h1.appendChild(headingText);                                    -->append the heading text into the document


//var newElement=document.getElementById("newelement");             -->getting an newelement by the id name
//newElement.innerHTML=h1;                                          -->assign a h1 by using an innerHTML


var headingText=document.createTextNode("This is my heading");                -->This is my heading is create
h1.appendChild(headingText);                                                  -->append with the headingText

var body=document.querySelector("body");                            -->getting a body
var input=document.querySelector("input");                          -->getting a input
body.insertBefore(h1,input);                                        -->insert the h1 before the input

var body=document.querySelector("body");                            -->getting a body
var p=document.querySelector("p");                                  -->declare a p and inside we give the paragraph element
body.insertBefore(h1,p);                                            -->it will insert before the h1
*/

//Removing the input Elements
/*
var input=document.querySelector("input");                              -->getting an input
input.remove();                                                         -->remove these by the input.remove() command
*/

/*
var body=document.querySelector("body");                            -->getting a body and declare the variable as body
var button=document.querySelector("button");                        -->getting a button and declare the variable as button
body.removeChild(button);                                           -->removing that button
*/

//Replacing HTML contents
/*
var para=document.createElement("p");                               -->create a element named as p
var node=document.createTextNode("This is new para");               -->crete the text as This is new para
para.appendChild(node);                                             -->append that node
console.log(para);                                                  -->printing a para variable

var body=document.querySelector("body");                            -->getting a body
var p=document.querySelector("p");                                  -->getting a p
body.replaceChild(para,p);                                          -->replace that p by a para
*/

