function goToCartDet(id) {
  window.location = "cart.html";
  let choosenItem = allDataItems.find((item) => item.id == id);
  console.log(id);
  localStorage.setItem("choosenItem", JSON.stringify(choosenItem));
}
