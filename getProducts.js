class Cart {
    constructor() {
        this.cartItems = [];
    }

    addToCart = (product) => {
        const existProduct = this.cartItems.find(item => item.name === product.name);
        if (existProduct) {
            existProduct.quantity += product.quantity;
        } else {
            const newProduct = {
                name: product.name,
                img: product.img,
                quantity: product.quantity,
                price: product.price
            };
            this.cartItems.push(newProduct);
        }
    }

    viewCart = () => {
        const modalBody = document.querySelector(".cartModal .table");
        let totalPrice = 0;

        const headerhtml = `
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                `

        const itemHtml = this.cartItems.map(item => {
            const itemPrice = (parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2);
            totalPrice += parseFloat(itemPrice);

            return `
                    <tbody>
                        <tr>
                            <td>${item.name}</td>
                            <td><img src="${item.img}" alt="${item.name}"/></td>
                            <td class="d-flex flex-row justify-content-between align-items-center btn-setting">
                                <button class="btn btn-primary decreaseQuantityBtn" data-name="${item.name}">-</button>
                                <span class="quantity">${item.quantity}</span>
                                <button class="btn btn-primary increaseQuantityBtn" data-name="${item.name}">+</button>
                            </td>
                            <td class="price">$${itemPrice}</td>
                            <td>
                                <button class="btn btn-danger deleteBtn" data-name="${item.name}">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                    `;
        }).join("");

        const footerhtml = `
                    <tfoot>
                    <tr class="total-row">
                        <td colspan="3"></td>
                        <td>Total:</td>
                        <td><span class="total-price">$${totalPrice.toFixed(2)}</span></td>
                    </tr>
                    </tfoot>
                `

        modalBody.innerHTML = headerhtml + itemHtml + footerhtml;

        // Sự kiện tăng giảm trong giỏ hàng
        const decreaseQuantityBtn = document.querySelectorAll(".decreaseQuantityBtn");
        const increaseQuantityBtn = document.querySelectorAll(".increaseQuantityBtn");
        const deleteBtn = document.querySelectorAll(".deleteBtn");

        decreaseQuantityBtn.forEach(button => {
            button.addEventListener("click", () => {
                const productName = button.getAttribute("data-name");
                const productIndex = this.cartItems.findIndex(item => item.name === productName);
                if (productIndex !== -1) {
                    if (this.cartItems[productIndex].quantity > 1) {
                        this.cartItems[productIndex].quantity--;
                    } else {
                        alert("Số lượng tối thiểu là 1");
                    }
                    this.viewCart();
                }
            });
        });

        increaseQuantityBtn.forEach(button => {
            button.addEventListener("click", () => {
                const productName = button.getAttribute("data-name");
                const productIndex = this.cartItems.findIndex(item => item.name === productName);
                if (productIndex !== -1) {
                    this.cartItems[productIndex].quantity++;
                    this.viewCart();
                }
            });
        });

        deleteBtn.forEach(button => {
            button.addEventListener("click", () => {
                const productName = button.getAttribute("data-name");
                const productIndex = this.cartItems.findIndex(item => item.name === productName);
                if (productIndex !== -1) {
                    this.cartItems.splice(productIndex, 1);
                    this.viewCart();
                }
            });
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
            const products = data.products.map((item, index) => `
                <div key=${index} class="col-xl-3 col-md-6 col-xs-12 categories-product" data-bs-toggle="modal" data-bs-target="#exampleModal${index}">
                    <div class="product-tag">
                        ${item.tag}
                    </div>
                    <div class="product-image">
                        <img src="${item.img}" alt="${item.name}">
                    </div>
                    <div class="product-content">
                        <div class="product-content_name">
                            ${item.name}
                        </div>
                        <hr>
                        <div class="product-rating d-flex flex-row justify-content-between">
                            <div class="product-price d-flex flex-row">
                                <span class="product-price_old">
                                    ${item.priceOld}
                                </span>
                                <div class="product-price_new">
                                    ${item.priceNew}
                                </div>
                            </div>
                            <div class="product-start">
                                <img src="./assets/img/start.jpg" alt="start">
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Popup Modal -->
                <div class="modal fade" id="exampleModal${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Info Product</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="product-preview">
                                    <div class="container" data-target="p-1">
                                        <div class="row">
                                            <div class="col-6 preview-info">
                                                <div class="preview_tag">
                                                    <p>${item.tag}</p>
                                                </div>
                                                <div class="preview-img">
                                                    <img src="${item.img}" alt="${index}">
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="preview-content">
                                                    <div class="preview-content_title">
                                                        <p>${item.name}</p>
                                                        <img src="./assets/img/start.jpg" alt="start">
                                                        <div class="product-price d-flex flex-row">
                                                            <span class="product-price_old">
                                                                ${item.priceOld}
                                                            </span>
                                                            <div class="product-price_new">
                                                                ${item.priceNew}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="preview-content_body">
                                                        <p>${item.description}</p>
                                                    </div>
                                                    <div class="preview-content_button d-md-flex flex-row">
                                                        <p>Quantity: </p>
                                                        <div class="button-quantity d-flex flex-row">
                                                            <button class="decreaseBtn">-</button>
                                                            <input type="number" class="quantityInput" value="1" min="1">
                                                            <button class="increaseBtn">+</button>
                                                        </div>
                                                    </div>
                                                    <div class="preview-button">
                                                        <button class="addButton btn">Add To Cart <i class="bi bi-arrow-right-short"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            `)
                .join("");

            const html = document.querySelector(".shop-product .row");
            html.innerHTML = products;

            // let cartItems = [];
            const cart = new Cart();
            let totalCartItemCount = 0;
            let cartItemCount = 0;

            // Tăng giảm số lượng
            const categories = document.querySelectorAll(".categories-product");
            categories.forEach(function (category, index) {
                const modalId = `exampleModal${index}`;
                const modal = document.getElementById(modalId);
                const quantityInput = modal.querySelector(".quantityInput");
                const increaseBtn = modal.querySelector(".increaseBtn");
                const decreaseBtn = modal.querySelector(".decreaseBtn");

                increaseBtn.addEventListener("click", function () {
                    cartItemCount++;
                    quantityInput.value = cartItemCount;
                });
                decreaseBtn.addEventListener("click", function () {
                    if (cartItemCount > 0) {
                        cartItemCount--;
                    } else {
                        alert("Bạn có muốn giảm số lượng hàng, số lương hiện tại đang là 1!")
                    }
                    quantityInput.value = cartItemCount;
                });
            })

            // Thêm sản phẩm vào giỏ hàng
            // const addToCart = (product) => {
            //     const existProduct = cartItems.find(item => item.name === product.name);
            //     if (existProduct) {
            //         existProduct.quantity += product.quantity;
            //     } else {
            //         const newProduct = {
            //             name: product.name,
            //             img: product.img,
            //             quantity: product.quantity,
            //             price: product.price
            //         };
            //         cartItems.push(newProduct)
            //     }
            // }

            // const showViewCart = () => {
            //     const modalBody = document.querySelector(".cartModal .table");
            //     let totalPrice = 0;

            //     const headerhtml = `
            //         <thead>
            //             <tr>
            //                 <th>Name</th>
            //                 <th>Image</th>
            //                 <th>Quantity</th>
            //                 <th>Price</th>
            //                 <th></th>
            //             </tr>
            //         </thead>
            //     `

            //     const itemHtml = cartItems.map(item => {
            //         const itemPrice = (parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2);
            //         totalPrice += parseFloat(itemPrice);

            //         return `
            //                 <tbody>
            //                     <tr>
            //                         <td>${item.name}</td>
            //                         <td><img src="${item.img}" alt="${item.name}"/></td>
            //                         <td class="d-flex flex-row justify-content-between align-items-center btn-setting">
            //                             <button class="btn btn-primary decreaseQuantityBtn" data-name="${item.name}">-</button>
            //                             <span class="quantity">${item.quantity}</span>
            //                             <button class="btn btn-primary increaseQuantityBtn" data-name="${item.name}">+</button>
            //                         </td>
            //                         <td class="price">$${itemPrice}</td>
            //                         <td>
            //                             <button class="btn btn-danger deleteBtn" data-name="${item.name}">Delete</button>
            //                         </td>
            //                     </tr>
            //                 </tbody>

            //             </table>
            //         `;
            //     }).join("");

            //     const footerhtml = `
            //         <tfoot>
            //         <tr class="total-row">
            //             <td colspan="3"></td>
            //             <td>Total:</td>
            //             <td><span class="total-price">$${totalPrice.toFixed(2)}</span></td>
            //         </tr>
            //         </tfoot>
            //     `

            //     modalBody.innerHTML = headerhtml + itemHtml + footerhtml;

            //     // Sự kiện tăng giảm trong giỏ hàng
            //     const decreaseQuantityBtn = document.querySelectorAll(".decreaseQuantityBtn");
            //     const increaseQuantityBtn = document.querySelectorAll(".increaseQuantityBtn");
            //     const deleteBtn = document.querySelectorAll(".deleteBtn");

            //     decreaseQuantityBtn.forEach(button => {
            //         button.addEventListener("click", function () {
            //             const productName = this.getAttribute("data-name");
            //             const productIndex = cartItems.findIndex(item => item.name === productName);
            //             if (productIndex !== -1) {
            //                 if (cartItems[productIndex].quantity > 1) {
            //                     cartItems[productIndex].quantity--;
            //                 } else {
            //                     alert("Số lượng tối thiểu là 1");
            //                 }
            //                 showViewCart();
            //             }
            //         });
            //     });

            //     increaseQuantityBtn.forEach(button => {
            //         button.addEventListener("click", function () {
            //             const productName = this.getAttribute("data-name");
            //             const productIndex = cartItems.findIndex(item => item.name === productName);
            //             if (productIndex !== -1) {
            //                 cartItems[productIndex].quantity++;
            //                 showViewCart();
            //             }
            //         });
            //     });

            //     deleteBtn.forEach(button => {
            //         button.addEventListener("click", function () {
            //             const productName = this.getAttribute("data-name");
            //             const productIndex = cartItems.findIndex(item => item.name === productName);
            //             if (productIndex !== -1) {
            //                 cartItems.splice(productIndex, 1);
            //                 showViewCart();
            //             }
            //         });
            //     });
            // };

            // Thông báo đã thêm được sản phẩm vào giỏ hàng
            const addToCartButtons = document.querySelectorAll(".addButton");
            addToCartButtons.forEach(function (category, index) {
                category.addEventListener("click", function () {
                    const modalId = `exampleModal${index}`;
                    const modal = document.getElementById(modalId);
                    const cartItemCountElement = document.getElementById("cartItemCount");
                    const quantityInput = modal.querySelector(".quantityInput");
                    const quantity = parseInt(quantityInput.value);
                    const productName = modal.querySelector(".preview-content_title p").textContent;
                    const productImage = modal.querySelector(".preview-img img").getAttribute("src");
                    const productPrice = modal.querySelector(".product-price_new").textContent.trim();

                    const product = {
                        name: productName,
                        img: productImage,
                        quantity: quantity,
                        price: productPrice
                    };
                    totalCartItemCount += quantity;
                    cart.addToCart(product);
                    alert("Sản phẩm đã được thêm vào giỏ hàng!" + quantity);
                    cartItemCountElement.innerHTML = totalCartItemCount;
                    quantityInput.value = 1;
                    cartItemCount = 1;
                    cart.viewCart();
                })
            })
        })
        .catch((err) => {
            console.log(err)
        });
});

