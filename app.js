const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const Message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1]

//checkButton.addEventListener("click", () => console.log("clicked !"))

checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();

    if (billAmount.value > 0) {
        if (cashGiven.value > billAmount.value) {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);


        } else {
            showMessage("The cash provide should be atleast equal to the bill amount")
        }
    } else {
        showMessage("Invalid Bill amount ");
    }

    console.log(amountToBeReturned)
});



function calculateChange(amountToBeReturned) {

    for (var i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(
            amountToBeReturned / availableNotes[i]
        );
        //console.log(numberOfNotes)
        //console.log(availableNotes[i], amountToBeReturned, numberOfNotes)
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }

}

function hideMessage() {
    Message.style.display = "none";

}

function showMessage(msg) {
    Message.style.display = "block"
    Message.innerText = msg
}