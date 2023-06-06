/* Validate */
var userData = [];
const validateForm = (event) => {
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
    }

    if (fullname === "") {
        alert("Please enter your full name!");
        return false;
    }

    if (email === "" || !emailPattern.test(email)) {
        alert("Invalid email address");
        return false;
    }

    if (phone === "" || !phonePattern.test(phone)) {
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
}
// console.log(userData);


/* Map dữ liệu ra giao diện ra popup */
// const categories = document.querySelectorAll(".categories-product");

// document.addEventListener("DOMContentLoaded", function () {
//     const categories = document.querySelectorAll(".categories-product");
//     const modalImage = document.querySelector(".modal-body .preview-img img");
//     const modalTag = document.querySelector(".modal-body .preview_tag p");
//     const modalTitle = document.querySelector(".modal-body .preview-content_title p");
//     const modalStar = document.querySelector(".modal-body .preview-content_title img");
//     const modalPriceOld = document.querySelector(".modal-body .product-price_old");
//     const modalPriceNew = document.querySelector(".modal-body .product-price_new");
//     const modalDescription = document.querySelector(".modal-body .preview-content_body p");
//     const modalQuantity = document.querySelector(".modal-body #quantityInput");

//     fetch("data.json")
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//             const products = data.products;

//             categories.forEach(function (category, index) {
//                 const product = products[index];

//                 category.addEventListener("click", function () {
//                     modalTag.innerHTML = product.tag;
//                     modalImage.src = product.img;
//                     modalTitle.innerHTML = product.name;
//                     modalStar.src = "./assets/img/start.jpg";
//                     modalPriceOld.innerHTML = product.priceOld;
//                     modalPriceNew.innerHTML = product.priceNew;
//                     modalDescription.innerHTML = product.description;
//                     modalQuantity.value = product.quantity;
//                 });
//             });
//         })
//         .catch(error => console.error(error));
// });

/* Logic thêm sản phẩm vào giỏ hàng */
// document.addEventListener("DOMContentLoaded", function () {
//     const categories = document.querySelectorAll(".categories-product");

//     categories.forEach(function (category, index) {
//         const modalId = `exampleModal${index}`;
//         const modal = document.getElementById(modalId);
//         const cartItemCountElement = document.getElementById('cartItemCount');
//         const addButton = document.getElementById('addButton');
//         const quantityInput = document.getElementById('quantityInput');
//         const increaseBtn = document.getElementById('increaseBtn');
//         const decreaseBtn = document.getElementById('decreaseBtn');

//         var cartItemCount = 0;
//         var totalCartItemCount = 0;

//         increaseBtn.addEventListener('click', function () {
//             cartItemCount++;
//             quantityInput.value = cartItemCount;
//         });

//         decreaseBtn.addEventListener('click', function () {
//             if (cartItemCount > 0) {
//                 cartItemCount--;
//             }
//             quantityInput.value = cartItemCount;
//         });

//         addButton.addEventListener('click', function () {

//             var quantity = parseInt(quantityInput.value);

//             if (quantity > 0) {
//                 totalCartItemCount += quantity;
//                 alert('Sản phẩm đã được thêm vào giỏ hàng!' + quantity);
//                 cartItemCountElement.innerHTML = totalCartItemCount;
//                 quantityInput.value = 1;
//             } else {
//                 alert('Vui lòng thêm ít nhất một sản phẩm vào giỏ hàng!');
//             }
//         });
//     })
// })
