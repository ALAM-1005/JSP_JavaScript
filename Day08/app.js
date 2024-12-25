let btn = document.getElementById('submit');

 btn.addEventListener('click',()=>{

    console.log('hello World')
 })


 let btn1 = document.getElementById('bgbtn');
 btn1.addEventListener('click',()=>{

 document.body.style.backgroundColor ='green'

 })


 let count = document.getElementById('count');

 let inc = document.getElementById('increment');

 let dec = document.getElementById('decrement');

 inc.addEventListener('click',()=>{

    count.innerText = Number(count.innerText)+1
 })

 dec.addEventListener('click',()=>{

    count.innerText = Number(count.innerText)-1
 })

 const toggleButton = document.getElementById('toggleButton');
const textContent = document.getElementById('textContent');




let heading  = document.getElementById('hidebtn')
function hidebtn(){

    heading.style.visibility ='hidden'
}


function showbtn(){

    heading.style.visibility ='visible'
}


// toggleButton.addEventListener('click', () => {
//     if (textContent.style.display === 'none') {
//         textContent.style.display = 'block';
//         toggleButton.textContent = 'Hide Text';
//     } else {
//         textContent.style.display = 'none';
//         toggleButton.textContent = 'Show Text';
//     }
// });
