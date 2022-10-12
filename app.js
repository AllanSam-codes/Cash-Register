const bilAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cah-given")
const checkButton = document.querySelector("#check-button")
const Message = document.querySelector("#error-message");

//checkButton.addEventListener("click", () => console.log("clicked !"))

checkButton.addEventListener("click", function validateBillAndCashAmount() {
    Message.style.display = "none";

    if (bilAmount.value > 0) {

    } else {
        Message.style.display = "block"
        Message.innerText = "This bill amount should be greater than 0"

    }
})