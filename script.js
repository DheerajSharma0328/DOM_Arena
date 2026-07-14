let htmlObject = document.documentElement;
let htmlTag = document.querySelector('html');
let parent = document.querySelector('#parent')


/*

1.--------------------------------------------------------------------------------------------------------

=> In dom html === document.documentElement
=> document.documentElement this is html object in dom

console.log(htmlObject === htmlTag);

2.--------------------------------------------------------------------------------------------------------

=> Using childNode property and priniting child of html

console.log(htmlObject.childNodes);

3.--------------------------------------------------------------------------------------------------------

=> Using childNode property and priniting child of document

console.log(document.childNodes);

4.--------------------------------------------------------------------------------------------------------

=> Printing parent of document but the result is null.
=> In dom null mean not present and it is the proof that dom doesnot have any parent and it is the
*  entery point to the DOM tree

console.log(document.parentElement);
console.log(document.parentNode);

5.--------------------------------------------------------------------------------------------------------



*/

// Tag: nodeName and tagName

console.log( document.body.nodeName ); // BODY
console.log( document.body.tagName ); // BODY