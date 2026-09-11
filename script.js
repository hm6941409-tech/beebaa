alert("javascript is working");
const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    if (name === "" || email === "") {
        alert("Please fill in all fields.");
        return;
    }
alert("thank you," + name + "your massage has been sent 💗");
form.reset();
});