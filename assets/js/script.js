let nameInput = document.querySelector('#name');
let dateInput = document.querySelector('#date');
let amountInput = document.querySelector('#amount');
const tableBody = document.querySelector('#tableBody');

function tablebodyIsEmpty(){
    if (tableBody.childNodes.length === 0) {
        const td = document.createElement('td');
        const tr = document.createElement('tr');
        tr.id = "emptyMessage";
        const text = document.createTextNode('The table is empty!');
        td.colSpan = 3;
        td.appendChild(text);
        tr.appendChild(td);
        tableBody.appendChild(tr);
    } else if (tableBody.firstChild.id === "emptyMessage") {
        tableBody.removeChild(tableBody.firstChild);
    }
}

tablebodyIsEmpty();

function createTDElement(item) {
    const tableData = document.createElement('td');
    const data = document.createTextNode(item);
    tableData.appendChild(data);
    return tableData;
}

function createRemoveButton() {
    const button = document.createElement('input');
    button.type = 'button';
    button.value = '\u274C';
    button.classList.add('button');
    button.onclick = (event) => {
        event.target.parentNode.remove();
        tablebodyIsEmpty();
    };
    return button;
}

document.querySelector('#submitButton').addEventListener('click', function() {
    const name = nameInput.value;
    const date = dateInput.value;
    const amount = amountInput.value;
    if(name !== '' && date !== '' && amount !== '') {
        const TDname = createTDElement(name);
        const TDdate = createTDElement(date);
        const TDamount = createTDElement(amount);
        const button = createRemoveButton();
        const tableRow = document.createElement('tr');
        tableRow.appendChild(TDname);
        tableRow.appendChild(TDdate);
        tableRow.appendChild(TDamount);
        tableRow.appendChild(button);
        tableBody.appendChild(tableRow);
        tablebodyIsEmpty();

        nameInput.value = '';
        dateInput.value = '';
        amountInput.value = '';
    } else {
        window.alert('Fill all fields!');
    }
});