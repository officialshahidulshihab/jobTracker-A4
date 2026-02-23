1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
-->getElementById is select only one Id from the html file. It is quite fast from others.

getElementsByClassName this select a all the elements form the html file which has the class name. This return a html collection

querySelector select like how we give styles in css but this one only select the first one. and querySelectorAll it select all. the querySelectorAll returns a nodelist


2.How do you create and insert a new element into the DOM?
 --> I create and insert a new element into the dom like this
 step 1 is make a variable and use this method  document.createElement('').
 const div =document.createElement('div')
 step 2 is i will use innerHTML for making html into the div.
 div.innerHTML=`
 <p>Hello world. This is new div</p>
 `
 step 3 i will find a parent for insert this div.
 step 4 i will insert this div into a parent by using .appendChild(div)



 3.What is Event Bubbling? And how does it work?
  --> Event Bubbling is a default behavior in JavaScript for DOM events.
  It works like if a button clicked it the work of this will done but it will not stopped it will go button parent then do the work of that parent then it will go to the parent parent and do it work......................like this it works


  4.What is Event Delegation in JavaScript? Why is it useful?
   -->Event Delegation is a JavaScript technique where instead of attaching event listeners to every child element, attach one listener to a parent element.
   it is use full if a parent has more children we can use  one event listener to the parent and control the child. use event.target to check which children triggered

   5.What is the difference between preventDefault() and stopPropagation()?
   --> preventDefault() stops the browser default action for  event, like preventing a form from submitting .

 stopPropagation() stops the event from bubbling up to parent elements. The event only happens on the target element and doesn’t trigger parent.