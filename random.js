let contain=document.querySelector('div')

let button1=document.querySelector('button')






function RandomColor(){
  let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let color = `rgb(${red}, ${green}, ${blue})`;
        let colorBox = document.querySelector('div')
            colorBox.style.backgroundColor = color;
}
button1.addEventListener('click', RandomColor)

window.addEventListener('load', RandomColor)



// function deleteList(close){

//  console.log(close)
//  close.parentElement.remove()
// }


//function CompleteTask(input){
// Input.disabled=true
// console.log(input.nextElementSibling)
// input.nextElementSibling.style.color="gray";
// input.nextElementSibling.style.textDecoration="line-through";