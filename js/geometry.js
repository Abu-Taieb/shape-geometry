// for Blog Page 
document.getElementById('blog').addEventListener('click', function(){
    window.location.href = '/blog.html'
})

let serial = 0;
document.getElementById('btnCalculate').addEventListener('click', function(){
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
    const calculate = inputLeftValueStrToInt * inputRightValueStrToInt * 0.5;

    // get shape name
    const getHeaderName = document.getElementById('shapeName').innerText;
    
    // get button 
    const getBtn = document.getElementById('convertToMiter').innerHTML;
    
    // get table container 
    const getTable = document.getElementById('tableContainer');

    // create element 
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <tr>
        <td>${serial}</td>
        <td>${getHeaderName}</td>
        <td>${calculate}</td>
        <td>${getBtn}</td>
    </tr>
    `
    getTable.appendChild(tr)    
})