"use strict";

var userData = [];

var validateForm = function validateForm(event) {
  event.preventDefault();
  var form = document.getElementById("myForm");
  var fullname = form.fname.value;
  var email = form.email.value;
  var phone = form.phone.value;
  var company = form.company.value;
  var subject = form.subject.value;
  var age = form.age.value;
  var message = form.message.value;
  var emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  var user = {
    fullname: fullname,
    email: email,
    phone: phone,
    company: company,
    subject: subject,
    age: age,
    message: message
  };

  if (fullname === "") {
    alert("Please enter your full name!");
    return false;
  }

  if (email === "" && !emailPattern.test(email)) {
    alert("Invalid email address");
    return false;
  }

  if (phone === "" && !phonePattern.test(phone)) {
    alert("Invalid Phone Number");
    return false;
  }

  if (company == "") {
    alert("Please enter your company");
    return false;
  }

  if (subject == "") {
    alert("Please enter your subject");
    return false;
  }

  if (age <= 0 && age >= 200) {
    alert("Invalid Your Age");
    return false;
  }

  if (message == "") {
    alert("Please enter your message");
    return false;
  }

  userData.push(user);
  document.getElementById("fname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("company").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("age").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("message").value = "";
  return true;
};

console.log(userData);
var productItems = document.querySelectorAll('.categories-product');
productItems.forEach(function (item) {
  var productName = item.querySelector('.product-content_name').innerText;
  var productRating = item.querySelector('.product-rating').innerHTML;
  var popup = item.nextElementSibling;
  var popupName = popup.querySelector('.product-name');
  var popupRating = popup.querySelector('.product-rating');
  popupName.textContent = productName;
  popupRating.innerHTML = productRating;
  item.addEventListener('mouseenter', function () {
    popup.style.display = 'block';
  });
  item.addEventListener('mouseleave', function () {
    popup.style.display = 'none';
  });
});