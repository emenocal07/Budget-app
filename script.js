// document.getElementById("")
// document.querySelector("")

//Total Balance
const balanceElement = document.getElementById("balance");
console.log(balancedElement);

//Value input
const valueInputElement = document.querySelector("input");
//Income/expense
const selectElement = document.querySelector("select");
//Addition button
const additionButtonElement = document.querySelector("footer button");
//Entry list
const entryListElement = document.querySelector("section ul");

function addEntry (amount, operation) {
    const listEntry = document.createElement("li");

    const listEntryValue = document.createElement("strong");
    listEntryValue.innerText = amount;

    const listEntryDescription = document.createElement("em");
    listEntryDescription.innerText = "Description";

    listEntry.appendChild(listEntryDescription);
    listEntry.appendChild(listEntryValue);
    
    entryListElement.appendChild(listEntry);
}

additionButtonElement.onclick = function() {
    const amount = valueInputElement.value;
    const operation = selectElement.value;

    addEntry(amount, operation);
}