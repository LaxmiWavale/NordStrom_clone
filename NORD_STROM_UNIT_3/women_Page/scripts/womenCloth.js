let Clothurl =
  "https://www2.hm.com/en_in/women/new-arrivals/clothes/_jcr_content/main/productlisting.display.json?sort=stock&image-size=small&image=model&offset=36&page-size=36";

window.addEventListener("load", function () {
  ClothMap(Clothurl);
});

import ClothMap from "../component/womenDataMap.js";

//===========================Desses Map============================================
function makingEmpty(name, SingleImage) {
  let add = document.querySelector("#ADD");
  add.innerHTML = name;
  document.querySelector("#Fresh").innerHTML = null;
  document.querySelector("#Freshtwo").innerHTML = null;
  document.querySelector("#DTJ").innerHTML = null;
  let MakeEmpty = document.querySelector("#CatImage");
  MakeEmpty.style.marginTop = "0px";
  MakeEmpty.src = SingleImage;
}

document.querySelector("#Dresses").addEventListener("click", function () {
  let SingleImage =
    "https://n.nordstrommedia.com/id/e9df8c2b-5c3c-447b-bb3b-2dcc7645a9ef.jpeg?h=417&w=1334";
  makingEmpty(" / Dresses", SingleImage);

  let DressUrl =
    "https://www2.hm.com/en_in/women/shop-by-product/dresses/_jcr_content/main/productlisting.display.json?sort=stock&image-size=small&image=model&offset=36&page-size=36";
  ClothMap(DressUrl);
});

//===========================Top Map============================================

document.querySelector("#Tops").addEventListener("click", function () {
  let SingleImage =
    "https://n.nordstrommedia.com/id/37a743a8-df9f-4c9e-8913-902eb78d13f1.jpeg?h=417&w=1334";
  makingEmpty(" / Tops", SingleImage);

  let TopsUrl =
    "https://www2.hm.com/en_in/women/shop-by-product/tops/_jcr_content/main/productlisting.display.json?sort=stock&image-size=small&image=model&offset=36&page-size=36";
  ClothMap(TopsUrl);
});

//===========================Denim Map============================================

document.querySelector("#Denim").addEventListener("click", function () {
  document.querySelector("#Pickone").innerHTML = null;
  let add = document.querySelector("#ADD");
  add.innerHTML = " / Jeans & Denim";
  let DenimUrl =
    "https://www2.hm.com/en_in/women/shop-by-product/jeans/_jcr_content/main/productlisting.display.json?sort=stock&image-size=small&image=model&offset=36&page-size=36";
  ClothMap(DenimUrl);
});

//===========================Jackets Map============================================

document.querySelector("#Jackets").addEventListener("click", function () {
  document.querySelector("#Pickone").innerHTML = null;
  let add = document.querySelector("#ADD");
  add.innerHTML = " / Coats & Jackets";

  let JacketsUrl =
    "https://www2.hm.com/en_in/women/shop-by-product/jackets-coats/_jcr_content/main/productlisting.display.json?sort=stock&image-size=small&image=model&offset=36&page-size=36";
  ClothMap(JacketsUrl);
});

//===========================Swimsuits Map============================================

document.querySelector("#Swimsuits").addEventListener("click", function () {
  let SingleImage =
    "https://n.nordstrommedia.com/id/44dadb38-8487-48b7-a69e-ef3b6c480ec0.jpeg?h=417&w=1334";
  makingEmpty(" / Swimsuits & Cover-Ups", SingleImage);

  let SwimsuitsUrl =
    "https://www2.hm.com/en_in/women/shop-by-product/swimwear/_jcr_content/main/productlisting.display.json?sort=stock&image-size=small&image=model&offset=36&page-size=36";

  ClothMap(SwimsuitsUrl);
});

//===============================Search=============================

document.addEventListener("keydown", SearchCategory);

function SearchCategory(e) {
  if (e.key == "Enter") {
    let Keyword = document.querySelector("#SearchedCategory").value;
    let link = `https://www2.hm.com/en_in/women/shop-by-product/${Keyword}/_jcr_content/main/productlisting.display.json?sort=stock&image-size=small&image=model&offset=36&page-size=36`;
    document.querySelector("#Pickone").innerHTML = null;
    ClothMap(link);
  }
}
