const computerProducts = document.querySelector(".computer-items");
const salesItems = document.querySelector(".sales-items");
const phonesTablets = document.querySelector(".phones-tablets-items");

allDataItems.forEach((product) => {
  const precentage_disc = Math.round(
    ((product.old_price - product.price) / product.old_price) * 100
  );
  if (product.old_price) {
    salesItems.innerHTML += `
                  <div class="sales-item swiper-slide">
                  <p class="sale-percent">%${precentage_disc}</p>
                  <div class="icons">
                    <i class="fa-solid fa-cart-plus" onclick = "addToCart(${product.id},this)"></i>
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
                      <p class="old-price">$${product.old_price}</p>
                      <p class="new-price">$${product.price}</p>
                    </div>
                  </div>
                </div>
                  `;
  }
});

allDataItems.forEach((product) => {
  computerProducts.innerHTML += `
                  <div class="computer-item swiper-slide">
                  <div class="icons">
                    <i class="fa-solid fa-cart-plus" onclick = "addToCart(${product.id},this)"></i>
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
                      <p class="new-price">$${product.price}</p>
                    </div>
                  </div>
                </div>
                  `;
});

allDataItems.forEach((product) => {
  phonesTablets.innerHTML += `
                  <div class="phones-tablets-item swiper-slide">
                  <div class="icons">
                    <i class="fa-solid fa-cart-plus" onclick = "addToCart(${product.id},this)"></i>
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
                      <p class="new-price">$${product.price}</p>
                    </div>
                  </div>
                </div>
                  `;
});

