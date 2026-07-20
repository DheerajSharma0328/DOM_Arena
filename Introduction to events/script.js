let htmlObject = document.documentElement;
let htmlTag = document.querySelector('html');
let parent = document.querySelector('#parent')
let docum = document;
let firstchild = document.querySelector('.rightChildren')
let rightChild = document.querySelector('#rightChild')

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

// console.log( document.body.nodeName ); // BODY
// console.log( document.body.tagName ); // BODY
// console.log(docum.nodeType); // Checking Document Node Type Ans = 9  for document node
// console.log(parent.innerHTML); // It is used to get HTML inside and element ad a string
// firstchild.innerHTML+="Inserting the sting inside the HTML element";
// console.log(firstchild.innerHTML);
// console.log(firstchild.outerHTML);


//Append Element
// let ptag = document.createElement('p');
// ptag.textContent = 'I am appending the paragraph tag. Append means adding something.';
// firstchild.append(ptag);

// firstchild.append('Dheeraj Kaushik');
// firstchild.remove();

//Implementing Event Delegation

rightChild.onclick = function(event){
    let target = event.target;

    if(target != rightChild){
        console.log(target.innerText);
    }
}