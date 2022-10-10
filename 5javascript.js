function multiply() {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num2 = document.getElementById('n2').value;
    var regex = /^[1-9]\d+$/;
    if (!regex.test(num1) || !regex.test(num2)) {
        alert("Пожалуйста, введите корректные числа.");
        return false;
    }
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    result = num1 * num2;
    alert("Вы собираетесь умножить 2 числа: "+num1+" и "+num2+".");
    document.getElementById('out').innerHTML = "Результат: "+result;
}

window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
    let b = document.getElementById("click");
    b.addEventListener("Пожалуйста, введите корректные числа.", multiply);
});
