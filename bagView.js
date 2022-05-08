let CartData = JSON.parse(localStorage.getItem("Cart"));
let SC = JSON.parse(localStorage.getItem("SC"));
let total = document.querySelector("#TotalDiv");
total.innerHTML = "Shopping Bag (" + CartData.length + ")";
let e = CartData;
let selectTag;
let firstcolor;
let TotalPrice = 0;
for (let i = 0; i < e.length; i++) {
  let TotalPriceWithQty = 0;
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
  let price = document.createElement("h6");
  price.setAttribute("id", "color");
  price.innerText = "Price: " + e[i].price;
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
    price,
    articleCode,
    Delivery,
    remove
  );

  let threeDiv = document.createElement("div");
  selectTag = document.createElement("select");
  selectTag.setAttribute("id", "selectTag");
  selectTag.addEventListener("change", function () {
    //console.log(selectTag.value);
    calculate(selectTag.value, e[i].price);
  });

  for (let p = 0; p < 51; p++) {
    firstcolor = document.createElement("option");
    firstcolor.setAttribute("id", "selectTag");
    if (p == 0) {
      firstcolor.innerText = "Qty";
    } else if (p > 0) {
      firstcolor.innerText = p;
      firstcolor.value = p;
    }
    selectTag.append(firstcolor);
  }
  threeDiv.append(selectTag);

  let fourDiv = document.createElement("div");
  fourDiv.setAttribute("id", "PriceDiv");
  fourDiv.innerText = "Rs." + " " + 0;

  function calculate(qty, price) {
    let PriceA = [];
    for (let k = 0; k < price.length - 3; k++) {
      if (
        price[k] == "0" ||
        price[k] == "1" ||
        price[k] == "2" ||
        price[k] == "3" ||
        price[k] == "4" ||
        price[k] == "5" ||
        price[k] == "6" ||
        price[k] == "7" ||
        price[k] == "8" ||
        price[k] == "9"
      ) {
        PriceA.push(Number(price[k]));
      }
    }
    let FirstPrice = PriceA.join("");
    TotalPriceWithQty = FirstPrice * 1*qty;
    fourDiv.innerText = "Rs." + " " + TotalPriceWithQty;
    TotalPrice += TotalPriceWithQty;
    //console.log(TotalPrice,TotalPriceWithQty);
    document.querySelector("#TotalPrise").innerText =
    "Subtotal:--------------------------------------       " +
    "Rs." +
    " " +
    TotalPrice;
    localStorage.setItem("TotalPrice", JSON.stringify(TotalPrice));
  }
  main.append(oneDiv, twoDiv, threeDiv, fourDiv);

  document.querySelector("#first").append(main);
}



function Splicedata(s, d) {
  s.splice(d, 1);
  localStorage.setItem("Cart", JSON.stringify(s));
  location.reload();
}

document.querySelector("#Check").addEventListener("click", function () {
  GoToPayment();
});
function GoToPayment() {
  if(TotalPrice==0){
    alert("Please Select Quantity")
  }else{
    window.location.href = "./payment.html";

  }
}

document.addEventListener("keydown", SearchCategory);

function SearchCategory(e) {
  if (e.key == "Enter") {
    let Keyword = document.querySelector("#search").value;
    window.location.href = "./womes's_page.html";
    let link = `https://www2.hm.com/en_in/women/shop-by-product/${Keyword}/_jcr_content/main/productlisting.display.json?sort=stock&image-size=small&image=model&offset=36&page-size=36`;
    // document.querySelector("#Pickone").innerHTML = null;
    ClothMap(link);
  }
}
