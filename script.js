console.log("hello")

var tabs = document.querySelectorAll(".tabs h1");
var content = document.querySelectorAll(".content");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            tabs.forEach(tab => tab.classList.remove("active"));
            tab.classList.add("active");
            content.forEach(c => c.classList.remove("active"));
            content[index].classList.add("active");
        });
    });