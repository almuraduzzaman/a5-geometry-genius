// blog button 
document.getElementById('btn-blog').addEventListener('click', function () {
    window.location.href = "./blog.html";
});

// card color change 
cardHoverColorChange('card-1');
cardHoverColorChange('card-2');
cardHoverColorChange('card-3');
cardHoverColorChange('card-4');
cardHoverColorChange('card-5');
cardHoverColorChange('card-6');

// Triangle
document.getElementById('btn-triangle').addEventListener('click', function () {
    const name = getTextValueByID('name-triangle');
    const input1 = getInputValueByID('triangle-base');
    const input2 = getInputValueByID('triangle-height');
    createTableRowAfterCalculation(name, input1, input2, .5);
});

// Rectangle
document.getElementById('btn-rectangle').addEventListener('click', function () {
    const name = getTextValueByID('name-rectangle');
    const input1 = getInputValueByID('rectangle-w');
    const input2 = getInputValueByID('rectangle-l');
    createTableRowAfterCalculation(name, input1, input2, 1);
});

// parallelogram
document.getElementById('btn-parallelogram').addEventListener('click', function () {
    const name = getTextValueByID('name-parallelogram');
    const input1 = getInputValueByID('parallelogram-b');
    const input2 = getInputValueByID('parallelogram-h');
    createTableRowAfterCalculation(name, input1, input2, 1);
});

// rhombus
document.getElementById('btn-rhombus').addEventListener('click', function () {
    const name = getTextValueByID('name-rhombus');
    const input1 = getInputValueByID('rhombus-d1');
    const input2 = getInputValueByID('rhombus-d2');
    createTableRowAfterCalculation(name, input1, input2, .5);
});

// pentagon
document.getElementById('btn-pentagon').addEventListener('click', function () {
    const name = getTextValueByID('name-pentagon');
    const input1 = getInputValueByID('pentagon-p');
    const input2 = getInputValueByID('pentagon-b');
    createTableRowAfterCalculation(name, input1, input2, .5);
});

// ellipse
document.getElementById('btn-ellipse').addEventListener('click', function () {
    const name = getTextValueByID('name-ellipse');
    const input1 = getInputValueByID('ellipse-a');
    const input2 = getInputValueByID('ellipse-b');
    createTableRowAfterCalculation(name, input1, input2, 3.14);
});