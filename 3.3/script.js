let itemcounter = document.getElementsByClassName("item").length;

document.querySelectorAll(".trashimg").forEach(button => {
    button.addEventListener('click', handleDelete)
});
function handleDelete(e){
    const button = e.target;
    button.parentElement.remove();
    itemcounter--;
    updateItemNumbers();
}
document.getElementsByClassName("add-carts")[0].addEventListener("click",  handleAddCarts)
function handleAddCarts(e){
    if (itemcounter >= 15) {
        alert("reach to maximum carts");
        return;
    }
    itemcounter++;
    const newitem = document.createElement("li");
    newitem.classList.add("item");
    newitem.innerHTML = `   
        <h2>
            item ${itemcounter}
        </h2>
        <img class="trashimg" src="trash.png">
        <div class="content">
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde dignissimos itusto quae molestiae odio quod,
                quas magni quaerat impedit maiores optio id dolores delectus praesentium omnis autem libero harum?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde dignissimos itusto quae molestiae odio quod,
                quas magni quaerat impedit maiores optio id dolores delectus praesentium omnis autem libero harum?
            </p>
        </div>`;
    const list = document.getElementsByClassName("carts-list")[0];
    list.appendChild(newitem);
    updateItemNumbers();
    document.querySelectorAll(".trashimg").forEach(button => {
        button.addEventListener('click', handleDelete)
    });
}

function updateItemNumbers() {
 itemcounter = document.getElementsByClassName("item").length;
}
