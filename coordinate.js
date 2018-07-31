var list= document.querySelector('ol')
var clear= document.querySelector('button')
// var body=document.querySelector('body')
document.addEventListener('click', function(event){
    if(event.target!==clear){
    var create= document.createElement('li')
    create.innerHTML= "x coordinate: " + event.clientX + " y coordinate: " + event.clientY
    list.appendChild(create)
    }
})



clear.addEventListener('click', function(){
    list.innerText= ' '
})