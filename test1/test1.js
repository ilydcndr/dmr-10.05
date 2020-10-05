
//test1
function removeElementsHandler() {
var allButton=document.querySelectorAll('.remove')
allButton.forEach(element => {
    element.addEventListener('click',()=>{
        var parentDiv =element.parentNode
        parentDiv.remove()
    })  
});
}
document.addEventListener("DOMContentLoaded", () => {
    removeElementsHandler();
});
