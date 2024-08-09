document.addEventListener('DOMContentLoaded', (event) => {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCart();

    function updateCart() {
        var cartItems = document.getElementById("cart-items");
        var cartCount = document.getElementById("cart-items-count");
        var summaryItems = document.getElementById("summary-items");
        var totalCost = document.getElementById("total-cost");
        cartItems.innerHTML = "";
        var total = 0;
        cart.forEach(item => {
            var item_html = `<div class="row border-bottom mb-3 pb-3">
                                <div class="col-2"><img src="${item.thumbnail}" alt="${item.title}" class="img-fluid"></div>
                                <div class="col-3">
                                    <h6>${item.title}</h6>
                                    <small>${item.category}</small>
                                    <br>
                                    <a href="#" class="text-danger" onclick="removeFromCart('${item.id}')">Remove</a>
                                </div>
                                <div class="col-2">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <button class="btn btn-outline-secondary" type="button" onclick="updateQuantity('${item.id}', -1)">-</button>
                                        </div>
                                        <input type="text" class="form-control text-center" value="${item.quantity}">
                                        <div class="input-group-append">
                                            <button class="btn btn-outline-secondary" type="button" onclick="updateQuantity('${item.id}', 1)">+</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-2 text-right">£${item.price.toFixed(2)}</div>
                                <div class="col-2 text-right">£${(item.price * item.quantity).toFixed(2)}</div>
                            </div>`;
            cartItems.innerHTML += item_html;
            total += item.price * item.quantity;
        });
        cartCount.textContent = cart.length;
        summaryItems.textContent = cart.length;
        totalCost.textContent = `£${total.toFixed(2)}`;
    }

    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    }

    function updateQuantity(productId, delta) {
        var product = cart.find(item => item.id === productId);
        if (product) {
            product.quantity += delta;
            if (product.quantity <= 0) {
                removeFromCart(productId);
            } else {
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCart();
            }
        }
    }

    window.removeFromCart = removeFromCart;
    window.updateQuantity = updateQuantity;
});
