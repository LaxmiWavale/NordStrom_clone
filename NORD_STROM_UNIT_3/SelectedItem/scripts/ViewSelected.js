import { navbar } from "../../../NavbarUpdate/components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let SelectedItem = JSON.parse(localStorage.getItem("Selected"));

let FirstPic = document.createElement("img");
FirstPic.src = SelectedItem.image[0].dataAltImage;
let secondPic = document.createElement("img");
secondPic.src = SelectedItem.image[0].src;
document.querySelector("#TwoImage").append(secondPic, FirstPic);

let title = document.createElement("h4");
title.innerText = SelectedItem.title;
let brand = document.createElement("p");
brand.setAttribute("id", "brand");
brand.innerText = SelectedItem.brandName;
let category = document.createElement("p");
category.setAttribute("id", "brand");
category.innerText = SelectedItem.category;

let price = document.createElement("h5");
price.setAttribute("id", "price");
price.innerText = SelectedItem.price;

document.querySelector("#DetailDiv").append(title, brand, category, price);

let size = document.createElement("p");
size.setAttribute("id", "brand");
size.innerText = SelectedItem.promotionalMarkerText;
document.querySelector("#size").append(size);

for (let i = 0; i < SelectedItem.swatches.length; i++) {
  let firstcolor = document.createElement("option");
  firstcolor.innerText = SelectedItem.swatches[i].colorName;
  firstcolor.value = SelectedItem.swatches[i].colorName;
  let firstcolorDiv = document.createElement("div");
  firstcolorDiv.style.background = SelectedItem.swatches[i].colorCode;
  firstcolorDiv.setAttribute("id", "smallColorDiv");

  let colorName = document.createElement("p");
  colorName.setAttribute("id", "brand");
  colorName.innerText = SelectedItem.swatches[i].colorName;
  document.querySelector("#ColorSelect").append(firstcolor);
  document.querySelector("#AvailableColors").append(firstcolorDiv, colorName);
}

let AddedToBag = JSON.parse(localStorage.getItem("Cart")) || [];
let ArrSC = JSON.parse(localStorage.getItem("SC")) || [];

document
  .querySelector("#AddToCartButton")
  .addEventListener("click", function () {
    GoToCart();
  });
function GoToCart() {
  let SizeColorArr = {
    size1: document.querySelector("#SizeSelect").value,
    color: document.querySelector("#ColorSelect").value,
  };
  ArrSC.push(SizeColorArr);
  alert("Product Added to your Bag");
  AddedToBag.push(SelectedItem);
  localStorage.setItem("SC", JSON.stringify(ArrSC));
  localStorage.setItem("Cart", JSON.stringify(AddedToBag));
}


document.addEventListener("keydown", SearchCategory);

function SearchCategory(e) {
  if (e.key == "Enter") {
    let Keyword = document.querySelector("#search").value;
    window.location.href="../women_Page/womes's_page.html"
    let link = `https://www2.hm.com/en_in/women/shop-by-product/${Keyword}/_jcr_content/main/productlisting.display.json?sort=stock&image-size=small&image=model&offset=36&page-size=36`;
    // document.querySelector("#Pickone").innerHTML = null;
    ClothMap(link);
  }
}
