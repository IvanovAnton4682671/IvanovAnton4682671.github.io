$(document).ready(function() {  
    PopUpHide();
});

function PopUpShow() {
    $("#popup1").show();
}

function PopUpHide() {
    $("#popup1").hide();
}

function Send() {
var json = '{"key": "Форма была отправлена"}';
var obj = JSON.parse(json);
alert(obj.key);
var xhr = new XMLHttpRequest();
function go() {
  xhr.open('GET', '/web8/json/a.txt', false);
  xhr.send();
  var element = document.getElementById('frag');
  element.innerHTML = xhr.responseText;
  return false;
    }
}

let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-popup');
let names = document.getElementById('Name');
let email = document.getElementById('Email');
let msg = document.getElementById('Text');
let cb = document.getElementById('CB');

function save() {
  localStorage.setItem('Имя', names.value);
  localStorage.setItem('Почта', email.value);
  localStorage.setItem('Сообщение', msg.value);
  if (cb.checked) {
    localStorage.setItem('Чекбокс', 1);
  } else {
    localStorage.setItem('Чекбокс', 0);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  names.value = localStorage.getItem('Имя');
  email.value = localStorage.getItem('Почта');
  msg.value = localStorage.getItem('Сообщение');
  let checkBox = localStorage.getItem('Чекбокс');
  if (checkBox == 1) {
    cb.checked = true;
  } else if (checkBox == 0) {
    cb.checked = false;
  }

  names.oninput = save;
  email.oninput = save;
  msg.oninput = save;
  cb.oninput = save;

  openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      window.onpopstate = function () {
        window.history.back();
        popupBg.classList.remove('active');
        popup.classList.remove('active');
      };
      history.pushState({ page: 1 }, 'forma', '?forma');
      popupBg.classList.add('active');
      popup.classList.add('active');
    });
  });

  $(function () {
    $('#forma').submit(function (e) {
      e.preventDefault();
      $.ajax({
        type: 'POST',
        dataType: 'json',
        url: 'https://formcarry.com/s/LKEmd9SHK',
        data: $(this).serialize(),
        success: function (response) {
          if (response.status == 'success') {
            alert('Форма была отправлена!');
            localStorage.removeItem('Имя');
            localStorage.removeItem('Почта');
            localStorage.removeItem('Сообщение');
            localStorage.removeItem('Чекбокс');
            names.value = localStorage.getItem('Имя');
            email.value = localStorage.getItem('Почта');
            msg.value = localStorage.getItem('Сообщение');
            cb.checked = false;
          }
        },
        error: function (jqxhr, status, errorMsg) {
          alert('Ошибка!');
        },
      });
    });
  });
});
