// function: 1 - card color change 
function cardHoverColorChange(cardID) {
    document.getElementById(cardID).addEventListener('mouseenter', function () {
        const mouseColor = document.getElementById(cardID);
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        mouseColor.style.backgroundColor = "#" + randomColor;
    })
};


// function: 2 - get innerText value by id
function getTextValueByID(textID) {
    const itemName = document.getElementById(textID).innerText;
    return itemName;
};


// function: 3 - get input value by id
function getInputValueByID(inputID) {
    const inputField = parseFloat(document.getElementById(inputID).value);
    const inputFieldFixed = inputField.toFixed(2);
    const inputFieldFloat = parseFloat(inputFieldFixed);
    return inputFieldFloat;
}


// function: 4 - creating table row after calculating inputs
function createTableRowAfterCalculation(itemName, input1, input2, value) {
    if (isNaN(input1) === true || isNaN(input2) === true) {
        alert("Please enter a valid number for both inputs");
        return;
    } else if (input1 < 1 || input2 < 1) {
        alert("Please enter two positive integers");
        return;
    }
    // main calculation 
    const result = value * input1 * input2;
    // const itemResultInCM = result.toFixed(1);

    // validation for showing zero less
    let itemResultInCM;
    if (result % 2 === 0) {
        itemResultInCM = result;
    } else {
        itemResultInCM = result.toFixed(2);
    }

    const tr = document.createElement('tr');
    const tableBody = document.getElementById("table-body");
    tableBody.appendChild(tr);

    //  add number in NO column
    const itemNumber = tableBody.children.length;
    tr.innerHTML = `
        <tr>
            <th>${itemNumber}</th>
            <td>${itemName}</td>
            <td><span>${itemResultInCM}</span> cm<sup>2</sup></button></td>
            <td><button class="convert-button px-2 py-1 text-white rounded-md bg-blue-700"">Covert to
             m<sup>2</sup></button></td>
         </tr>
    `;

    const itemResultInM = (result / 10000).toFixed(4);
    const convertButton = tr.querySelector('.convert-button');
    convertButton.addEventListener('click', function () {
        convertToMeterSquare(itemResultInM, convertButton);
    });
};


function convertToMeterSquare(itemResultInM, convertButton) {
    convertButton.innerText = `${itemResultInM} m²`;
};