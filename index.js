 import { navbar } from "../components/navbar.js";

 document.getElementById("navbar").innerHTML = navbar()


 document.addEventListener("keydown", SearchCategory);
 
 function SearchCategory(e) {
    if (e.key == "Enter") {
      let Keyword = document.querySelector("#search").value;
      window.location.href="../../NORD_STROM_UNIT_3/women_Page/womes's_page.html"
      let link = `https://www2.hm.com/en_in/women/shop-by-product/${Keyword}/_jcr_content/main/productlisting.display.json?sort=stock&image-size=small&image=model&offset=36&page-size=36`;
      // document.querySelector("#Pickone").innerHTML = null;
      ClothMap(link);
    }
  }