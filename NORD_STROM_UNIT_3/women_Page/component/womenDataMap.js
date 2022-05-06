function ClothMap(url) {
  fetch(url)
    .then(function (res) {
      //console.log(res.json());
      return res.json();
    })
    .then(function (res) {
      console.log(res);
      // DataMap(res.products);
      document
        .querySelector("#SelectTag")
        .addEventListener("click", function () {
          let sort = document.querySelector("#SelectTag").value;
          if (sort !== "") {
            //console.log(sort);
            Sorting(res.products, sort);
          }
        });
      DataMap(res.products);
    });

  function DataMap(data) {
    document.querySelector("#ClothDataMap").innerHTML = null;
    document.querySelector("#TotalItems").innerText = data.length + " Items";

    data.map(function (e) {
      let box = document.createElement("div");
      box.setAttribute("id", "smallClothDiv");
      box.addEventListener("click", function () {
        localStorage.setItem("Selected", JSON.stringify(e));
        window.location.href = "../../SelectedItem/ViewSelected.html";
      });

      let pic = document.createElement("img");
      pic.setAttribute("id", "ClothPic");
      pic.src = e.image[0].src;

      let Dissappering = document.createElement("div");
      Dissappering.setAttribute("id", "Dissappering");
      Dissappering.innerText = "Quick View";
      Dissappering.addEventListener("click", function (e) {
        localStorage.setItem("Selected", JSON.stringify(e));
        window.location.href = "../../SelectedItem/ViewSelected.html";
      });

      let title = document.createElement("h5");
      title.innerText = e.title;
      title.setAttribute("id", "titleOfCloth");

      let peise = document.createElement("p");
      peise.innerText = e.price;
      peise.setAttribute("id", "peise");

      let ColorDiv=document.createElement("div")
      ColorDiv.setAttribute("id","AvailableColors")
      for(let i=0; i<e.swatches.length; i++){
        let firstcolorDiv=document.createElement("div")
        firstcolorDiv.style.background=e.swatches[i].colorCode
        firstcolorDiv.setAttribute("id","smallColorDiv")
        ColorDiv.append(firstcolorDiv)
      }

      let sellingAttribute = document.createElement("p");
      sellingAttribute.innerText = e.sellingAttribute;
      sellingAttribute.setAttribute("id", "sellingAttribute");

      let category = document.createElement("p");
      category.innerText = "category: " + e.category;
      category.setAttribute("id", "category");

      box.append(pic, Dissappering, title, peise, ColorDiv,sellingAttribute, category);
      document.querySelector("#ClothDataMap").append(box);
    });
  }

  function Sorting(SortData, value) {
    SortData.sort(function (a, b) {
      let PriceA = [];
      for (let i = 0; i < a.price.length - 3; i++) {
        if (
          a.price[i] == "0" ||
          a.price[i] == "1" ||
          a.price[i] == "2" ||
          a.price[i] == "3" ||
          a.price[i] == "4" ||
          a.price[i] == "5" ||
          a.price[i] == "6" ||
          a.price[i] == "7" ||
          a.price[i] == "8" ||
          a.price[i] == "9"
        ) {
          PriceA.push(Number(a.price[i]));
        }
      }
      let FirstPrice = PriceA.join("");

      let PriceB = [];
      for (let i = 0; i < b.price.length - 3; i++) {
        if (
          b.price[i] == "0" ||
          b.price[i] == "1" ||
          b.price[i] == "2" ||
          b.price[i] == "3" ||
          b.price[i] == "4" ||
          b.price[i] == "5" ||
          b.price[i] == "6" ||
          b.price[i] == "7" ||
          b.price[i] == "8" ||
          b.price[i] == "9"
        ) {
          PriceB.push(Number(b.price[i]));
        }
      }
      let SecondPrice = PriceB.join("");
      if (value === "HTL") {
        if (FirstPrice < SecondPrice) return -1;
        if (FirstPrice > SecondPrice) return 1;
        return 0;
      }
      if (value === "LTH") {
        if (FirstPrice > SecondPrice) return -1;
        if (FirstPrice < SecondPrice) return 1;
        return 0;
      }
    });
    DataMap(SortData);
  }
}

export default ClothMap;
