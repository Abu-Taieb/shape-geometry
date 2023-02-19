// for Blog Page
document
    .getElementById('blog')
    .addEventListener('click', function () {
        window.location.href = '/blog.html'
    })

function inputLeftValue(inputLeft){
    const inputLeftField = document.getElementById(inputLeft);
    const inputLeftValue = inputLeftField.value;
    const inputLeftValueStrToInt = parseFloat(inputLeftValue);
    inputLeftField.value = '';
    if(isNaN(inputLeftValue)){
        return false;
    }
    return inputLeftValueStrToInt;

}
function inputRightValue(inputRight){
    const inputRightField = document.getElementById(inputRight);
    const inputRightValue = inputRightField.value;
    const inputRightValueStrToInt = parseFloat(inputRightValue);
    inputRightField.value = '';

    if(isNaN(inputRightValue)){
        return false;
    }
    return inputRightValueStrToInt;

}

let serial = 0;
// Triangle JS 
document.getElementById('triangleBtn').addEventListener('click', function () {
        serial += 1;
        // get left input value
        const inputLeftField = inputLeftValue('triangleLeft');

        // get right input value
        const inputRightField = inputRightValue('triangleRight');

        // input value calculate
        const getCalculateValue = inputLeftField * inputRightField * 0.5;
        const result = parseInt(getCalculateValue);

        if(isNaN(inputRightField) || inputRightField == "" || inputLeftField =="" || inputRightField <=0 || inputLeftField <=0 ){
            alert("Please input positive number.")
            return false;
        }

        // get shape name
        const getHeaderName = document
            .getElementById('triangleName')
            .innerText;

        // arguments
        createElementData(serial, getHeaderName, result);
    })

// Rectangle JS 
document.getElementById('rectangleBtn').addEventListener('click', function () {
        serial += 1;
        // get left input value
        const inputLeftField = inputLeftValue('rectangleLeft');

        // get right input value
        const inputRightField = inputRightValue('rectangleRight');

        // input value calculate
        const getCalculateValue = inputLeftField * inputRightField;
        const result = parseInt(getCalculateValue);

        if(isNaN(inputRightField) || inputRightField == "" || inputLeftField =="" || inputRightField <=0 || inputLeftField <=0 ){
            alert("Please input positive number.")
            return false;
        }

        // get shape name
        const getHeaderName = document
            .getElementById('rectangleName')
            .innerText;

        // arguments
        createElementData(serial, getHeaderName, result);
    })

// Parallelogram JS 
document.getElementById('btnParallelogram').addEventListener('click', function () {
        serial += 1;
        // get left input value
        const inputLeftField = inputLeftValue('parallelogramLeft');

        // get right input value
        const inputRightField = inputRightValue('parallelogramRight');

        // input value calculate
        const getCalculateValue = inputLeftField * inputRightField;
        const result = parseInt(getCalculateValue);

        if(isNaN(inputRightField) || inputRightField == "" || inputLeftField =="" || inputRightField <=0 || inputLeftField <=0 ){
            alert("Please input positive number.")
            return false;
        }

        // get shape name
        const getHeaderName = document
            .getElementById('parallelogramName')
            .innerText;

        // arguments
        createElementData(serial, getHeaderName, result);
    })


// Rhombus JS 
document.getElementById('btnRhombus').addEventListener('click', function () {
        serial += 1;
        // get left input value
        const inputLeftField = inputLeftValue('rhombusLeft');

        // get right input value
        const inputRightField = inputRightValue('rhombusRight');

        // input value calculate
        const getCalculateValue = inputLeftField * inputRightField * 0.5;
        const result = parseInt(getCalculateValue);

        if(isNaN(inputRightField) || inputRightField == "" || inputLeftField =="" || inputRightField <=0 || inputLeftField <=0 ){
            alert("Please input positive number.")
            return false;
        }

        // get shape name
        const getHeaderName = document
            .getElementById('rhombusName')
            .innerText;

        // arguments
        createElementData(serial, getHeaderName, result);
    })

// Pentagon JS 
document.getElementById('btnPentagon').addEventListener('click', function () {
        serial += 1;
        // get left input value
        const inputLeftField = inputLeftValue('pentagonLeft');

        // get right input value
        const inputRightField = inputRightValue('pentagonRight');

        // input value calculate
        const getCalculateValue = inputLeftField * inputRightField * 0.5;
        const result = parseInt(getCalculateValue);

        if(isNaN(inputRightField) || inputRightField == "" || inputLeftField =="" || inputRightField <=0 || inputLeftField <=0 ){
            alert("Please input positive number.")
            return false;
        }

        // get shape name
        const getHeaderName = document
            .getElementById('pentagonName')
            .innerText;

        // arguments
        createElementData(serial, getHeaderName, result);
    })


// Ellipse JS 
document.getElementById('btnEllipse').addEventListener('click', function () {
        serial += 1;
        // get left input value
        const inputLeftField = inputLeftValue('ellipseLeft');

        // get right input value
        const inputRightField = inputRightValue('ellipseRight');

        // input value calculate
        const getCalculateValue = inputLeftField * inputRightField * 3.14;
        const toFixedResult = parseFloat(getCalculateValue);
        const result = toFixedResult.toFixed(2);

        if(isNaN(inputRightField) || inputRightField == "" || inputLeftField =="" || inputRightField <=0 || inputLeftField <=0 ){
            alert("Please input positive number.")
            return false;
        }

        // get shape name
        const getHeaderName = document
            .getElementById('ellipseName')
            .innerText;

        // arguments
        createElementData(serial, getHeaderName, result);
    })


function createElementData(serial, getHeaderName, result) {
    // get table container
    const getTable = document.getElementById('tableContainer');

    // create element
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <tr>
        <td>${serial + '. ' +
            getHeaderName}</td>
        <td>${result + 'cm'}<span><sup>2</sup></span></td>
        <td><button style="background:#0099e5; color:white; padding: 2px 5px; border-radius:2px; font-size:12px">Convert To M<sup>2</sup></button></td>
    </tr>
    `
    getTable.appendChild(tr)
}

// random background color
document.getElementById('triangleBg').addEventListener('mouseover', function triangleBg(){
    let triangleBg = Math.round(Math.random() * 1000000); 
    document.getElementById('triangleBg').style.background = '#'+ triangleBg;
})

document.getElementById('rectangleBg').addEventListener('mouseover', function rectangleBg(){
    let rectangleBg = Math.round(Math.random() * 1000000); 
    document.getElementById('rectangleBg').style.background = '#'+ rectangleBg;
})

document.getElementById('parallelogramBg').addEventListener('mouseover', function parallelogramBg(){
    let parallelogramBg = Math.round(Math.random() * 1000000); 
    document.getElementById('parallelogramBg').style.background = '#'+ parallelogramBg;
})

document.getElementById('rhombusBg').addEventListener('mouseover', function rhombusBg(){
    let rhombusBg = Math.round(Math.random() * 1000000); 
    document.getElementById('rhombusBg').style.background = '#'+ rhombusBg;
})

document.getElementById('pentagonBg').addEventListener('mouseover', function pentagonBg(){
    let pentagonBg = Math.round(Math.random() * 1000000); 
    document.getElementById('pentagonBg').style.background = '#'+ pentagonBg;
})

document.getElementById('ellipseBg').addEventListener('mouseover', function ellipseBg(){
    let ellipseBg = Math.round(Math.random() * 1000000); 
    document.getElementById('ellipseBg').style.background = '#'+ ellipseBg;
})