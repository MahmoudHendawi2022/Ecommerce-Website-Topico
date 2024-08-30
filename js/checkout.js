function showProductInCheckout() {
  let itemsOrder = document.querySelector(".items-order");
  let totalPrice = document.querySelector(".total-price");
  let total = localStorage.getItem("totalPrice");
  let cart = JSON.parse(localStorage.getItem("cart"));
  console.log(itemsOrder);
  cart.map((product) => {
    itemsOrder.innerHTML += `
        <div class="item">
                  <div class="image">
                    <img src=${product.img} alt="" />
                  </div>
                  <div class="item-order-det">
                    <p class="name">
                      ${product.name}
                    </p>
                    <p class="price">price: $${product.price}</p>
                  </div>
                </div>
        `;
  });
  totalPrice.innerHTML = `$` + total;
}
showProductInCheckout();



