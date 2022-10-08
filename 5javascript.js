function multiply() {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    result = num1 * num2;
    alert("Вы собираетесь умножить 2 числа: "+num1+" и "+num2);
    document.getElementById('out').innerHTML = result;
}

window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
    let b = document.getElementById("click");
    b.addEventListener("multiply");
});