///////////////////////  Slow scroll
$(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });
});
/////////////////////////////////////


//////////////////////////   Hidding additional text
var btn_show_text = document.getElementById("show_btn");
var hidden_text = document.querySelector(".hidden");

hide();
function hide() {
    if (document.body.clientWidth < 776) {
        btn_show_text.style.display = "block";
        hidden_text.style.display = "none";
    }
}

btn_show_text.onclick = function () {
    if (hidden_text.style.display == "block") {
        hidden_text.style.display = "none";
    }
    else hidden_text.style.display = "block";
}
/////////////////////////////


///////////////////////////  Form validation
function validateForm() {
    var name = document.getElementById('name').value;
    if (name == "") {
        document.getElementById('status').innerHTML = "Вкажіть своє ім'я";
        return false;
    }

    var email = document.getElementById('email').value;
    if (email == "") {
        document.getElementById('status').innerHTML = "Вкажіть свій email";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            document.getElementById('status').innerHTML = "Email введено невірно";
            return false;
        }
    }

    var phone = document.getElementById('phone').value;
    if (phone == "") {
        document.getElementById('status').innerHTML = "Вкажіть свій телефон";
        return false;
    }

    var message = document.getElementById('message').value;
    if (message == "") {
        document.getElementById('status').innerHTML = "Напишіть своє повідомлення";
        return false;
    }

    document.getElementById('status').innerHTML = "Надсилання...";
    document.getElementById('contact-form').submit();
};
////////////////////////////////


///////////////////////////////// Up Arrow
var up_arrow = document.querySelector(".up_arrow");

document.onscroll = function () {
    if (window.pageYOffset > 400) {
        up_arrow.style.display = "block";
    } else {
        up_arrow.style.display = "none"
    }
}


up_arrow.onclick = function up() {
    if (window.pageYOffset > 0) {
        window.scrollTo(0, window.pageYOffset - 50);
        var timer = setTimeout(up, 20);
    }else {
        clearTimeout(timer);
    }
}




























