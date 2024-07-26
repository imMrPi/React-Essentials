let itemcounter = 6;

document.querySelectorAll(".trashimg").forEach(button => {
    button.addEventListener('click', function () {
        this.parentElement.remove();
        itemcounter--;
        updateItemNumbers();
    });
});

document.querySelector(".add-carts").addEventListener("click", (e) => {
    if (itemcounter >= 15) {
        alert("reach to maximum carts");
        return;
    }
    itemcounter++;
    let newitem = document.createElement("li");
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
    let list = document.querySelector(".carts-list");
    list.appendChild(newitem);
    updateItemNumbers();
    document.querySelectorAll(".trashimg").forEach(button => {
        button.addEventListener('click', function () {
            this.parentElement.remove();
            itemcounter--;
            updateItemNumbers();
        });
    });
});

function updateItemNumbers() {
    let items = document.querySelectorAll(".item");
    items.forEach((item, index) => {
        item.querySelector("h2").innerText = `item ${index + 1}`;
    });
}
