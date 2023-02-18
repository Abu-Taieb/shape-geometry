// for Blog Page
document
    .getElementById('blog')
    .addEventListener('click', function () {
        window.location.href = '/blog.html'
    })

let serial = 0;
// Triangle JS 
document.getElementById('triangleBtn').addEventListener('click', function () {
        serial += 1;
        // get left input value
        const inputLeftField = document.getElementById('triangleLeft');
        const inputLeftValue = inputLeftField.value;
        const inputLeftValueStrToInt = parseFloat(inputLeftValue);
        inputLeftField.value = '';

        // get right input value
        const inputRightField = document.getElementById('triangleRight');
        const inputRightValue = inputRightField.value;
        const inputRightValueStrToInt = parseFloat(inputRightValue);
        inputRightField.value = '';

        // input value calculate
        const getCalculateValue = inputLeftValueStrToInt * inputRightValueStrToInt * 0.5;
        const result = parseInt(getCalculateValue);

        // get shape name
        const getHeaderName = document
            .getElementById('triangleName')
            .innerText;

        // get button
        const getBtn = document
            .getElementById('convertToMiter')
            .innerHTML;

        // arguments
        createElementData(serial, getHeaderName, result, getBtn);
    })

// Rectangle JS 
document.getElementById('rectangleBtn').addEventListener('click', function () {
        serial += 1;
        // get left input value
        const inputLeftField = document.getElementById('rectangleLeft');
        const inputLeftValue = inputLeftField.value;
        const inputLeftValueStrToInt = parseFloat(inputLeftValue);
        inputLeftField.value = '';

        // get right input value
        const inputRightField = document.getElementById('rectangleRight');
        const inputRightValue = inputRightField.value;
        const inputRightValueStrToInt = parseFloat(inputRightValue);
        inputRightField.value = '';

        // input value calculate
        const getCalculateValue = inputLeftValueStrToInt * inputRightValueStrToInt;
        const result = parseInt(getCalculateValue);

        // get shape name
        const getHeaderName = document
            .getElementById('rectangleName')
            .innerText;

        // get button
        const getBtn = document
            .getElementById('convertToMiter')
            .innerHTML;

        // arguments
        createElementData(serial, getHeaderName, result, getBtn);
    })



function createElementData(serial, getHeaderName, result, getBtn) {
    // get table container
    const getTable = document.getElementById('tableContainer');

    // create element
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <tr>
        <td>${serial + '. ' +
            getHeaderName}</td>
        <td>${result + 'cm'}<span><sup>2</sup></span></td>
        <td>${getBtn}</td>
    </tr>
    `
    getTable.appendChild(tr)
}

// random background color
document.getElementById('triangleBg').addEventListener('mouseover', function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.getElementById('triangleBg').style.background = bgColor;
    }
)
random_bg_color();