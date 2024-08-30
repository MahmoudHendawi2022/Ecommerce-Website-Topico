function changeImage(img) {
  let mainImage = document.querySelector(".main-image img");
  mainImage.src = img;
  console.log(mainImage.src);
}
let itemSelected = JSON.parse(localStorage.getItem("choosenItem"));
let cartSelected = document.querySelector(".cart-selected .container");
cartSelected.innerHTML = `
    
    <div class="cart-images">
            <div class="main-image">
              <img src=${itemSelected.img} alt="" />
            </div>
            <div class="images-category">
              <div class="image">
                <img onclick = "changeImage(this.src)" src="./img/product/product-2.jpg" alt="" />
              </div>
              <div class="image">
                <img onclick = "changeImage(this.src)" src="./img/product/product-3.jpg" alt="" />
              </div>
              <div class="image">
                <img onclick = "changeImage(this.src)" src="./img/product/product-4.jpg" alt="" />
              </div>
              <div class="image">
                <img onclick = "changeImage(this.src)" src="./img/product/product-5.jpg" alt="" />
              </div>
            </div>
          </div>
          <div class="cart-detailes">
            <p class="cart-name">${itemSelected.name}</p>
            <div class="cart-rate">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div class="cart-price">
              <p class="new-price">$${itemSelected.price}</p>
              <p class="old-price">$${itemSelected.old_price}</p>
            </div>
            <div class="avialability">
              <p>avialability: <span>in stock</span></p>
            </div>
            <div class="sku">
             SKU:<p>samsung c49389:$857,debenhams plus</p>
            </div>
            <div class="cart-description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
                veniam, velit sed in tempore nobis at animi perferendis voluptate
                delectus optio, ad harum tempora consectetur voluptatem maiores.
                Reprehenderit odio corrupti ratione, expedita eveniet veritatis
                fugiat perferendis deleniti nesciunt nostrum iste rerum quod
                voluptatum natus vel error est mollitia officia? Asperiores!
              </p>
            </div>
            <p class="harry">harry up!only 98 products left in stock</p>
            <div class="btn-addToCart" onclick = "addToCart(${itemSelected.id} , this)">
              <p>add to cart <i class="fa-solid fa-cart-plus"></i></p>
            </div>
            <div class="additional-feat">
              <i class="fa-regular fa-heart"></i>
              <i class="fa-solid fa-sliders"></i>
              <i class="fa-solid fa-print"></i>
              <i class="fa-solid fa-share-nodes"></i>
            </div>
          </div>
    
    
    
    `;
