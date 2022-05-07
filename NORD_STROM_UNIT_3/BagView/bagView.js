import { navbar } from "../../NavbarUpdate/components/navbar.js";

document.getElementById("navbar").innerHTML = navbar()


let CartData = JSON.parse(localStorage.getItem("Cart"));
let SC = JSON.parse(localStorage.getItem("SC"));
let total = document.querySelector("#TotalDiv");
total.innerHTML = "Shopping Bag (" + CartData.length + ")";
let e = CartData;
let selectTag;
let firstcolor;
let TotalPrice = 0;
for (let i = 0; i < e.length; i++) {
  let main = document.createElement("div");
  main.setAttribute("id", "second");

  let oneDiv = document.createElement("div");
  let secondPic = document.createElement("img");
  secondPic.src = e[i].image[0].dataAltImage;
  secondPic.setAttribute("id", "smallImage");
  oneDiv.append(secondPic);

  let twoDiv = document.createElement("div");
  twoDiv.setAttribute("id", "twoDiv");
  let title = document.createElement("p");
  title.setAttribute("id", "brand");
  title.innerText = e[i].title;
  let brand = document.createElement("p");
  brand.setAttribute("id", "brand");
  brand.innerText = "Brand: " + e[i].brandName;
  let category = document.createElement("p");
  category.setAttribute("id", "brand");
  category.innerText = "category: " + e[i].category;
  let size = document.createElement("p");
  size.setAttribute("id", "size");
  size.innerText = "size: " + SC[i].size1;
  let color = document.createElement("p");
  color.setAttribute("id", "color");
  color.innerText = "Color: " + SC[i].color;
  let articleCode = document.createElement("p");
  articleCode.setAttribute("id", "color");
  articleCode.innerText = "Item Code: " + e[i].articleCode;
  let Delivery = document.createElement("p");
  Delivery.setAttribute("id", "Delivery");
  Delivery.innerText =
    "Delivery International orders usually arrive within 5–13 business days. We'll give you delivery dates in checkout.";
  let remove = document.createElement("button");
  remove.setAttribute("id", "remove");
  remove.innerText = "Remove";
  remove.addEventListener("click", function () {
    Splicedata(e, i);
  });

  twoDiv.append(
    title,
    brand,
    category,
    size,
    color,
    articleCode,
    Delivery,
    remove
  );

  let threeDiv = document.createElement("div");
  selectTag = document.createElement("select");
  selectTag.setAttribute("id", "selectTag");
  threeDiv.append(selectTag);

  for (let p = 0; p < 51; p++) {
    firstcolor = document.createElement("option");
    firstcolor.setAttribute("id", "selectTag");
    if (p == 0) {
      firstcolor.innerText = "Qty";
    } else if (p > 0) {
      firstcolor.innerText = p;
      firstcolor.value = p;
      //firstcolor.setAttribute("id",p)
    }
    selectTag.append(firstcolor);
  }
  //===================================================Try To Do This==================
// let SelectChildren=selectTag.children
// for (let e of SelectChildren) {
//   e.addEventListener("keydown", Calculate)
// }
// function Calculate(){
//   console.log("hi");
//  console.log(this.id);
// }


  let PriceA = [];
  for (let k = 0; k < e[i].price.length - 3; k++) {
    if (
      e[i].price[k] == "0" ||
      e[i].price[k] == "1" ||
      e[i].price[k] == "2" ||
      e[i].price[k] == "3" ||
      e[i].price[k] == "4" ||
      e[i].price[k] == "5" ||
      e[i].price[k] == "6" ||
      e[i].price[k] == "7" ||
      e[i].price[k] == "8" ||
      e[i].price[k] == "9"
    ) {
      PriceA.push(Number(e[i].price[k]));
    }
  }
  let FirstPrice = PriceA.join("");
  TotalPrice += Number(FirstPrice);

  //======================================================================================

  let fourDiv = document.createElement("div");
  fourDiv.setAttribute("id", "PriceDiv");
  fourDiv.innerText = e[i].price;
  main.append(oneDiv, twoDiv, threeDiv, fourDiv);

  document.querySelector("#first").append(main);
}

function Splicedata(s, d) {
  s.splice(d, 1);
  localStorage.setItem("Cart", JSON.stringify(s));
  location.reload();
}

document.querySelector("#TotalPrise").innerText =
  "Subtotal:--------------------------------------       " +"Rs."+ " "+TotalPrice ;
localStorage.setItem("TotalPrice",JSON.stringify(TotalPrice))

document.querySelector("#Check").addEventListener("click",function(){
  GoToPayment() 
})
function GoToPayment() {
  window.location.href = "../payment/payment.html";
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