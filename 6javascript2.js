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





function updatePrice() {
    let s = document.getElementsByName("prodType");
    let select = s[0];
    let price = 0;
    let prices = getPrices();
    let priceIndex = parseInt(select.value) - 1;
    if (priceIndex >= 0) {
      price = prices.prodTypes[priceIndex];
    }
    let radioDiv = document.getElementById("radios");
    radioDiv.style.display = (select.value == "2" ? "block" : "none");
    let radios = document.getElementsByName("prodOptions");
    radios.forEach(function(radio) {
      if (radio.checked) {
        let optionPrice = prices.prodOptions[radio.value];
        if (optionPrice !== undefined) {
          price += optionPrice;
        }
      }
    });
    let checkDiv = document.getElementById("checkboxes");
    checkDiv.style.display = (select.value == "3" ? "block" : "none");
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        let propPrice = prices.prodProperties[checkbox.name];
        if (propPrice !== undefined) {
          price += propPrice;
        }
      }
    });
    let prodPrice = document.getElementById("prodPrice");
    prodPrice.innerHTML = price + " рублей";
  }
  function getPrices() {
    var num3;
    num3 = document.getElementById('n3').value;
    return {
      prodTypes: [500 * num3, 2000 * num3, 5000 * num3],
      prodOptions: {
        option0: 0,
        option1: 250 * num3,
        option2: 500 * num3,
        option3: 1000 * num3,
      },
      prodProperties: {
        prop1: 1000 * num3,
        prop2: 3000 * num3,
      }
    };
  }
  window.addEventListener('DOMContentLoaded', function (event) {
    let radioDiv = document.getElementById("radios");
    radioDiv.style.display = "none";
    let s = document.getElementsByName("prodType");
    let select = s[0];
    select.addEventListener("change", function(event) {
      let target = event.target;
      console.log(target.value);
      updatePrice();
    }); 
    let radios = document.getElementsByName("prodOptions");
    radios.forEach(function(radio) {
      radio.addEventListener("change", function(event) {
        let r = event.target;
        console.log(r.value);
        updatePrice();
      });
    }); 
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener("change", function(event) {
        let c = event.target;
        console.log(c.name);
        console.log(c.value);
        updatePrice();
      });
    });
    updatePrice();
  });