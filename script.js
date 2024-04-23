let colors = [
    '#3498db',
    '#9b59b6',
    '#e74c3c',
    '#2c3e50',
    '#d35400',
]
//3
function updateTotal(){
    const totalBox=document.getElementsByClassName("box")
    const span=document.querySelector(".points")
    span.textContent=totalBox.length
}
//12
for(let i=0;i<colors.length;i++){
    const box=document.querySelector(".boxes")
    box.insertAdjacentHTML("beforeend", '<div class="box"> </div>')
    const colorBox = document.querySelectorAll(".box")
    for(let i=0;i<colorBox.length;i++){
        colorBox[i].style.backgroundColor=colors[i]
    }
    updateTotal()
}
//4
const removebox = document.querySelectorAll(".box")
removebox.forEach(function(box){
    box.addEventListener("click",function(e){
        box.remove()
        updateTotal()
    })
})
//5
const morebox = document.querySelector("#btn")
const box = document.querySelector(".boxes")
morebox.addEventListener("click", function (e) {
    box.insertAdjacentHTML("beforeend", '<div class="box"> </div>')
    const colorBox = document.querySelectorAll(".box")
    for(let i=0;i<colorBox.length;i++){
        colorBox[i].style.backgroundColor=colors[i]
    }
    updateTotal()
})