// const paragraph = document.querySelector('p');
// const h1 = document.querySelector('h1'); 
const allLinks = document.querySelectorAll('a');

allLinks[0].style.color = 'teal'

for(let link of allLinks)
{
  link.style.color = 'pink';
  link.style.fontWeight = 700
}


const firstlink = document.querySelector("body > h1"); 

// let age = 18; 
// let result = age>=18? "Adult":"Minor";
// console.log(result);

