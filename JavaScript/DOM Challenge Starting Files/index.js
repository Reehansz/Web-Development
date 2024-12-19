document.firstElementChild.lastElementChild.firstElementChild.innerHTML = "Good bye!";
document.querySelector("input").checked = "checked"
//query Selector only selects one item to select multiple items below
document.querySelectorAll(".list")[0].style.fontSize = "3rem"

var listItem = document.querySelectorAll(".list")

listItem.forEach(item => {
    item.style.fontFamily = "Times New Roman";
    item.style.color = "red";
});

document.querySelector("a").getAttribute("href");
document.querySelector("a").setAttribute("href", "http://www.youtube.com");