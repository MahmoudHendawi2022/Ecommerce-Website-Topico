const productsDev = document.querySelector(".products-dev");

allDataItems.forEach((product) => {
  const precentage_disc = Math.round(
    ((product.old_price - product.price) / product.old_price) * 100
  );
  productsDev.innerHTML += `
                  <div class="sales-item swiper-slide" data-category = "${
                    product.data_category
                  }" data-brand = "${product.data_brand}"  data-color = "${
    product.data_color
  }">
                  ${
                    product.old_price
                      ? ` <p class="sale-percent">%${precentage_disc}</p>`
                      : ""
                  }
                  <div class="icons">
                    <i class="fa-solid fa-cart-plus" onclick = "addToCart(${
                      product.id
                    },this)"></i>
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-share"></i>
                  </div>
                  <div class="item-image">
                    <img src=${product.img} alt="" />
                    <img src=${product.img_hover} alt="" class="img-hover" />
                  </div>
                  <div class="item-dets">
                  <h4 class="title" onclick = "goToCartDet(${product.id})">
                  ${product.name}
                  </h4>
                    <div class="rate">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="price">
                    ${
                      product.old_price
                        ? `<p class="old-price">$${product.old_price}</p>`
                        : ""
                    }
                      
                      <p class="new-price">$${product.price}</p>
                    </div>
                  </div>
                </div>
                  `;
});

// product filteration

document.querySelectorAll("input[type = 'checkbox']").forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    filterProducts();
  });
});

function filterProducts() {
  let selectedCategories = Array.from(
    document.querySelectorAll("input[name = 'category']:checked")
  ).map((cb) => cb.value);
  let selectedBrands = Array.from(
    document.querySelectorAll("input[name = 'brand']:checked")
  ).map((cb) => cb.value);
  let selectedColors = Array.from(
    document.querySelectorAll("input[name = 'color']:checked")
  ).map((cb) => cb.value);
  let products = document.querySelectorAll(".sales-item");

  products.forEach((product) => {
    let productCategory = product.dataset.category;
    let productBrand = product.dataset.brand;
    let productColor = product.dataset.color;
    console.log(productCategory);
    let categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(productCategory);
    let brandMatch =
      selectedBrands.length === 0 || selectedBrands.includes(productBrand);

    let colorMatch =
      selectedColors.length === 0 || selectedColors.includes(productColor);

    if (categoryMatch && brandMatch && colorMatch) {
      product.classList.remove("hidden");
    } else {
      product.classList.add("hidden");
    }
  });
}




// let itemsInCart = document.querySelector(".items-in-cart");
// let cart = JSON.parse(localStorage.getItem("cart"));

// function addToCart(id, btn) {
//   cart.push(allDataItems[id]);
//   btn.classList.add("active");
//   localStorage.setItem("cart", JSON.stringify(cart));
//   showProductInCart();
//   console.log("item added");
// }
// let subTotalPrice = document.querySelector(".subtotal-price");
// let total = 0;
// let cartTitleSpan = document.querySelector(".cart-title span");
// let iconCartSpan = document.querySelector(".icon-cart span");
// let cartInfoPrice = document.querySelector(".market-info .price");

// function showProductInCart() {
//   itemsInCart.innerHTML = "";
//   total = 0;
//   cartTitleSpan.innerHTML = "";
//   iconCartSpan.innerHTML = "";
//   cartInfoPrice.innerHTML = "";

//   for (let i = 0; i < cart.length; i++) {
//     itemsInCart.innerHTML += `
//   <div class="item-cart">
//           <div class="item-img">
//             <img src=${cart[i].img} alt="" />
//           </div>
//           <div class="item-detailes">
//             <p class="item-name">
//               ${cart[i].name}
//             </p>
//             <p class="item-price">$${cart[i].price}</p>
//           </div>
//           <button class="delete-item">
//             <i class="fa-regular fa-trash-can" onclick = "removeFromCart(${i})"></i>
//           </button>
//         </div>
//   `;
//     total += cart[i].price;
//   }
//   subTotalPrice.innerHTML = `$${total}`;
//   cartTitleSpan.innerHTML = `(${cart.length} items in cart)`;
//   iconCartSpan.innerHTML = `${cart.length}`;
//   cartInfoPrice.innerHTML = `$${total}`;
// }
// /////////////////////////////////////////////////////////////////////////////////////
// function removeFromCart(index) {
//   cart.splice(index, 1);
//   localStorage.setItem("cart", JSON.stringify(cart));
//   showProductInCart();

//   let addCartBtns = document.querySelectorAll(".fa-cart-plus");
//   console.log(addCartBtns);
//   for (let i = 0; i < addCartBtns.length; i++) {
//     addCartBtns[i].classList.remove("active");
//     cart.forEach((product) => {
//       if (product.id == i) {
//         addCartBtns[i].classList.add("active");
//       }
//     });
//   }
// }
// showProductInCart();
// let cartDiv = document.querySelector(".cart");
// function openCart() {
//   cartDiv.classList.add("active");
//   menuDiv.classList.remove("active");
// }

// function closeCart() {
//   cartDiv.classList.remove("active");
// }






// function openFilterDev() {
//   let filterDev = document.querySelector(".filter");
//   filterDev.classList.toggle("active");
// }