const form = document.querySelector(".form");
const email1 = document.querySelector("#email1");
const email2 = document.getElementById("email2");

form.addEventListener("submit", handleSubmit);
email2.style.backroundColor = "red";
function handleSubmit() {
    
    if (email1.value === email2.value) {
        email2.style.backround = "transparent";
        alert("Your message has been sent succesfuly!")
    }
    else {
        const email1 = document.querySelector("#email1");
        const email2 = document.querySelector("#email2");
        event.preventDefault();
        email2.style.backgroundColor = "red";
        email1.style.backgroundColor = "red";
        alert("The first and second e-mail are not the same...  Please check again for any mistake!")
    }
}