let string = "";

let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (i) => {
        if (i.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector("input").value = string;

        } else if (i.target.innerHTML == "c") {
            string = "";
            document.querySelector("input").value = string;
        } else {
            console.log(i)
            string = string + i.target.innerHTML;
            document.querySelector("input").value = string;
        }
    })
})