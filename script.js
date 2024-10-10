const inputBox = document.getElementById("input")
const ul = document.getElementById("list_container")

function addInput(){
    const li = document.createElement("li")
    li.innerHTML = inputBox.value +"<button onclick ='removeItem(event)'>Delete</button>"
    ul.append(li)


}

function removeItem(event){
    event.target.parentElement.remove()
}