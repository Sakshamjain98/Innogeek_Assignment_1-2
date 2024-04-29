let form = document.querySelector("form.container");
let input = document.querySelector(".input-is");
let div = document.querySelector(".Outer");

form.addEventListener("submit", (event) => {
    event.preventDefault(); 
    let color = input.value;
    div.style.backgroundColor = color;
});

input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); 
        let color = input.value;
        div.style.backgroundColor = color;
    }
});
