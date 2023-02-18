




document.getElementById('triangle').addEventListener('click', function(){

    const getBottomField = document.getElementById('bottom');
    const getBottomValue = getBottomField.value;
    const bottomValueStrToInt = parseFloat(getBottomValue);
    const bottomValue = getBottomField.value = bottomValueStrToInt;
    
    const getHightField = document.getElementById('hight');
    const getHeightValue = getHightField.value;
    const heightValueStrToInt = parseFloat(getHeightValue);
    const heightValue = getHightField.value = heightValueStrToInt;
    
    const bottomAndHeightVal = bottomValue * heightValue;
    const triangleValue = bottomAndHeightVal * 0.5;

    if(isNaN(bottomAndHeightVal)){
        alert("Please Input A valid Number");
        return;
    }else{
        return;
    };
    
})