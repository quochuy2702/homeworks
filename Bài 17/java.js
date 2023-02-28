function onLoadDocument(){
    var button = document.getElementById('btn')
    button.onclick = onClickButton;
}

function onClickButton(){
    var elInput1 = parseInt(document.getElementById('number1').value);
    var elInput2 = parseInt(document.getElementById('number2').value);
    var elInput3 = parseInt(document.getElementById('number3').value);
    var elInput4 = parseInt(document.getElementById('number4').value);

    var errNumber1 = document.getElementById('error-number1');
    var errNumber2 = document.getElementById('error-number2');
    var errNumber3 = document.getElementById('error-number3');
    var errNumber4 = document.getElementById('error-number4');

if (number1 == ""){
    errNumber1.firstChild.value= "Vui lòng nhập trường này";
}else errNumber1.firstChild.value=""

if (number2 == ""){
    errNumber1.firstChild.value= "Vui lòng nhập trường này";
}else errNumber1.firstChild.value=""

if (number3 == ""){
    errNumber1.firstChild.value= "Vui lòng nhập trường này";
}else errNumber1.firstChild.value=""

if (number4 == ""){
    errNumber1.firstChild.value= "Vui lòng nhập trường này";
}else errNumber1.firstChild.value=""

}