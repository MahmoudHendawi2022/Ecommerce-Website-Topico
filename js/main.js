// var productJson;

let cartDiv = document.querySelector(".cart");
function openCart() {
  cartDiv.classList.add("active");
  menuDiv.classList.remove("active");
}

function closeCart() {
  cartDiv.classList.remove("active");
}



function openMenu() {
  let menuDiv = document.querySelector(".links ul");
  menuDiv.classList.add("active");
  cartDiv.classList.remove("active");
}

function closeMenu() {
  let menuDiv = document.querySelector(".links ul");
  menuDiv.classList.remove("active");
}

if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", "[]");
}

function addToCart(id, btn) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart.push(allDataItems[id]);
  localStorage.setItem("cart", JSON.stringify(cart));

  btn.classList.add("active");
  showProductInCart();
}
let subTotalPrice = document.querySelector(".subtotal-price");
let total = 0;
let cartTitleSpan = document.querySelector(".cart-title span");
let iconCartSpan = document.querySelector(".icon-cart span");
let cartInfoPrice = document.querySelector(".market-info .price");

showProductInCart();

function showProductInCart() {
  let itemsInCart = document.querySelector(".items-in-cart");
  itemsInCart.innerHTML = "";
  total = 0;
  cartTitleSpan.innerHTML = "";
  iconCartSpan.innerHTML = "";
  cartInfoPrice.innerHTML = "";
  let cart = JSON.parse(localStorage.getItem("cart"));
  for (let i = 0; i < cart.length; i++) {
    itemsInCart.innerHTML += `
  <div class="item-cart">
          <div class="item-img">
            <img src=${cart[i].img} alt="" />
          </div>
          <div class="item-detailes">
            <p class="item-name">
              ${cart[i].name}
            </p>
            <p class="item-price">$${cart[i].price}</p>
          </div>
          <button class="delete-item">
            <i class="fa-regular fa-trash-can" onclick = "removeFromCart(${i})"></i>
          </button>
        </div>
  `;
    total += cart[i].price;
  }
  subTotalPrice.innerHTML = `$${total}`;
  cartTitleSpan.innerHTML = `(${cart.length} items in cart)`;
  iconCartSpan.innerHTML = `${cart.length}`;
  cartInfoPrice.innerHTML = `$${total}`;
  localStorage.setItem("totalPrice", total);
  localStorage.setItem("cartLength", cart.length);
}
/////////////////////////////////////////////////////////////////////////////////////
function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (cart.length != 0) {
    cart.splice(index, 1);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  showProductInCart();
  let addCartBtns = document.querySelectorAll(".fa-cart-plus");
  console.log(addCartBtns);
  for (let i = 0; i < addCartBtns.length; i++) {
    addCartBtns[i].classList.remove("active");
    cart.forEach((product) => {
      if (product.id == i) {
        addCartBtns[i].classList.add("active");
      }
    });
  }
}

// ////////////////////////////////////////////////////////////////////////////////////
let backToTop = document.querySelector(".back-to-top");
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});