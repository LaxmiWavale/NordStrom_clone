let firstA = document.getElementById('first');

setInterval(myfunc,3000);

let count =0;
function myfunc(){

    firstA.style.backgroundColor = 'rgb(242, 231, 135)'

    let logo = document.getElementById('child2');
    logo.style.display='none'

   let a= document.getElementById('h3head');
   a.innerHTML = 'Get Mom $150 in gift cards, Earn a $25 promo card!'

   let p = document.getElementById('child3p');
   p.innerHTML = "Ends May 12 at 1 PM ET. Restriction Apply. Online only!";

   let btn = document.getElementById('child3b');
   btn.innerText = 'Shop Gift Card & See Restrictions.'

   let b = document.getElementById('child4')
   b.src='https://townandcitygiftcards.com/wp-content/uploads/2020/08/bournemouthfloating-600x480.png';
   b.style.width ="150px"
   
   
   
    count++;   

    if(count>1){
        firstA.style.backgroundColor = 'rgb(224, 229, 234)'
        a.innerHTML = 'Get a 40$ Bonus Note!';
        logo.style.display='flex';
        p.innerHTML = "An exclusive offer for new Nordstorm credit card members. Restrictions apply.";
        btn.innerText = 'Apply Now.'
        b.src="https://www.nordstrom.com/creditcard/static/assets/CREDIT_0520_Visa-Signature-Card_USA_FLAT@2x.png";
        b.style.width ="110px"
        count=0;
    }
}

// ========================================================================================
// ========================================================================================

setInterval(secfun, 3000);

let SecCount=0;
function secfun(){
    SecCount++;
    let secdiv = document.getElementById('second');

    let SecImgDiv = document.createElement('div');
    SecImgDiv.setAttribute('id',"SecImgDiv");
    let secImg = document.createElement('img');

    let SecinfoDiv = document.createElement('div');
    SecinfoDiv.setAttribute('id','secInfoDiv')
    let sidhead = document.createElement('p');
    let sidpara = document.createElement('p');
    let sidbtnDiv = document.createElement('div');
    let sidbtn1 = document.createElement('button');
    let sidbtn2 = document.createElement('button');

    
    if(SecCount===1){
        secdiv.innerHTML=null;
        secImg.src = "https://n.nordstrommedia.com/id/691f346b-379c-47cd-a614-6aabd4ed8be7.jpeg?h=700&w=1608";
        SecImgDiv.append(secImg);
        
        sidhead.innerHTML = "Nordstorm Celebrates AAPI Months";
        sidpara.innerHTML = "Join us as we honour Asian and Pacific Islander communities and cultures alongside our employees, spotlight AAPI-led brands, and share more about our diversity communities";
        sidbtn1.innerText = "Learn more";
        sidbtn2.innerText = "Shop AAPI-Owned & Founded Brands";
        sidbtnDiv.append(sidbtn1,sidbtn2);

        SecinfoDiv.append(sidhead,sidpara,sidbtnDiv)

        
        secdiv.append(SecImgDiv,SecinfoDiv);
    }
    // SecCount++;
    
    if(SecCount===2){
        secdiv.innerHTML=null;
        
        secImg.src = "https://n.nordstrommedia.com/id/f5c66328-e120-49b9-85a4-22bab0dd6851.jpeg?h=700&w=1608";
        SecImgDiv.append(secImg);

        sidhead.innerHTML = "All Dressed Up";
        sidpara.innerHTML = "Bold looks for all the summer soirees on your agenda";
        sidbtn1.innerText = "Women's Occasion wear";
        sidbtn2.innerText = "Men's Occasion wear";
        sidbtnDiv.append(sidbtn1,sidbtn2);

        SecinfoDiv.append(sidhead,sidpara,sidbtnDiv)


        secdiv.append(SecImgDiv,SecinfoDiv);
    }

    if(SecCount==3){
        secdiv.innerHTML=null;

        secImg.src = "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2021/05/11174133/85184024_1079955529006966_6890717379239523847_n.jpg";
        SecImgDiv.append(secImg);

        sidhead.innerHTML = "Color Therapy";
        sidpara.innerHTML = "Bright, bold makeup is back with high impact hues for your eyes, lips and cheeks in every shades of the Spectrum.";
        sidbtn1.innerText = "Make up";
        sidbtn2.innerText = "Learn more!";
        sidbtnDiv.append(sidbtn1,sidbtn2);

        SecinfoDiv.append(sidhead,sidpara,sidbtnDiv)


        secdiv.append(SecImgDiv,SecinfoDiv);

        SecCount =0;
    }
    
}

// ========================================================================================
// ========================================================================================


let popular=[
    {
        image_url:
          "https://content.shop4reebok.com/static/Product-GD8567/MEN_TRAINING_PANTS_GD8567_1.jpg.plp ",
        name: " MEN'S TRAINING WORKOUT READY ELITAGE PANTS ",
        price: 1999,
        strikedoffprice: 3199,
        brand: 'Nike'
    },
    {
        image_url:
          "https://content.shop4reebok.com/static/Product-GK9175/reebok_GK9175_1.jpg.plp",
        name: "MEN'S REEBOK TRAINING FOUNDATION  PANTS  ",
        price: 1019,
        strikedoffprice: 1699,
        brand: 'REEBOK'
    },
    {
        image_url:
          "https://content.shop4reebok.com/static/Product-GK9176/reebok_GK9176_1.jpg.plp ",
        name: "MEN'S REEBOK TRAINING FOUNDATION PANTS  ",
        price: 1019,
        strikedoffprice: 1699,
        brand: 'REEBOK'
    },
    {
        image_url:
          "https://assets.ajio.com/medias/sys_master/root/20200904/dVB5/5f527803aeb269ef8eb95eaf/-473Wx593H-461394178-green-MODEL.jpg ",
        name: "MEN'S NIKE CASUAL PANTS  ",
        price: 1019,
        strikedoffprice: 1699,
        brand: 'REEBOK'
    },
    {
        image_url:
          "https://cdn.shopify.com/s/files/1/0550/5767/8581/products/100-wht-slim_1024x.jpg",
        name: "Mens White Dress Pants Slim Fit",
        price: 1019,
        strikedoffprice: 1699,
        brand: 'REEBOK'
    },
    {
        image_url:
          "https://handcmediastorage.blob.core.windows.net/productimages/TR/TRCLXA43-C01-153037-800px-1040px.jpg",
        name: "Men's Brown Plaid Linen Slim Fit Italian Suit Pants",
        price: 1019,
        strikedoffprice: 1699,
        brand: 'REEBOK'
    },
    {
        image_url:
          "https://rukminim2.flixcart.com/image/332/398/khcb7gw0-0/trouser/m/w/y/30-dsky-chinos-trouser-for-men-white-luxury-original-imafxdefgemwyydj.jpeg?q=50",
        name: " MEN'S TRAINING WORKOUT READY ELITAGE PANTS ",
        price: 1999,
        strikedoffprice: 3199,
        brand: 'Nike'
    },
    {
        image_url:
          "https://sslimages.shoppersstop.com/sys-master/images/h72/h03/27294274387998/S225PCNSX1RAOL_OLIVE.jpg_230Wx334H",
        name: "MEN'S REEBOK TRAINING FOUNDATION  PANTS  ",
        price: 1019,
        strikedoffprice: 1699,
        brand: 'REEBOK'
    },
    {
        image_url:
          "https://rukminim1.flixcart.com/image/332/398/kflftzk0-0/trouser/a/9/n/30-kctr-5555-nb-fubar-original-imafwyf6kagdfxvv.jpeg?q=50",
        name: "MEN'S REEBOK TRAINING FOUNDATION PANTS  ",
        price: 1219,
        strikedoffprice: 1699,
        brand: 'REEBOK'
    },
    {
        image_url:
          "https://assets.ajio.com/medias/sys_master/root/20200904/dVB5/5f527803aeb269ef8eb95eaf/-473Wx593H-461394178-green-MODEL.jpg ",
        name: "MEN'S NIKE CASUAL PANTS  ",
        price: 1119,
        strikedoffprice: 1699,
        brand: 'REEBOK'
    },
    {
        image_url:
          "https://cdn.shopify.com/s/files/1/0266/6276/4597/products/300891869BLUE_2_1024x1024.jpg?v=1649327624",
        name: "Mens White Dress Pants Slim Fit",
        price: 1519,
        strikedoffprice: 1699,
        brand: 'REEBOK'
    },
    {
        image_url:
          "https://cdn.shopify.com/s/files/1/0752/6435/products/watergreen2.jpg?v=1643288462",
        name: "Men's Brown Plaid Linen Slim Fit Italian Suit Pants",
        price: 819,
        strikedoffprice: 1699,
        brand: 'REEBOK'
    },
    {
        image_url:
          "https://i.ebayimg.com/thumbs/images/g/puQAAOSwYVRhBxMV/s-l300.jpg",
        name: " MEN'S TRAINING WORKOUT READY ELITAGE PANTS ",
        price: 1999,
        strikedoffprice: 3199,
        brand: 'Nike'
    },
    {
        image_url:
          "https://cdn.shopify.com/s/files/1/0752/6435/products/TREWS1BEIGE_19.jpg?v=1635397795",
        name: "MEN'S REEBOK TRAINING FOUNDATION  PANTS  ",
        price: 2019,
        strikedoffprice: 2699,
        brand: 'REEBOK'
    },
    {
        image_url:
          "https://5.imimg.com/data5/RV/SK/ZU/SELLER-83185618/mens-light-colour-plain-trouser-250x250.jpeg",
        name: "MEN'S REEBOK TRAINING FOUNDATION PANTS  ",
        price: 1319,
        strikedoffprice: 1699,
        brand: 'REEBOK'
    },
    {
        image_url:
          "https://cdn.shopify.com/s/files/1/0752/6435/products/waterpinka.jpg?v=1632382328",
        name: "MEN'S NIKE CASUAL PANTS  ",
        price: 819,
        strikedoffprice: 1699,
        brand: 'REEBOK'
    },
    {
        image_url:
          "https://jade-media.jadeblue.com/media/catalog/product/cache/fb4843111cefec207bd4231737a432a0/y/y/yyur_1_1.jpg",
        name: "Mens White Dress Pants Slim Fit",
        price: 1019,
        strikedoffprice: 1699,
        brand: 'REEBOK'
    },
    {
        image_url:
          "https://handcmediastorage.blob.core.windows.net/productimages/TR/TRCLXA43-C01-153037-800px-1040px.jpg",
        name: "Men's Brown Plaid Linen Slim Fit Italian Suit Pants",
        price: 1019,
        strikedoffprice: 1699,
        brand: 'REEBOK'
    },

]

let third = document.getElementById('figure');
popular.forEach(function(el){

    let thirdDiv = document.createElement('div');
    thirdDiv.addEventListener('click',function(){
        gotoMens();
    })
    thirdDiv.setAttribute('id','thirdDiv')

    let thirdimg = document.createElement('img');
    thirdimg.src = el.image_url;

    let title = document.createElement('p')
    title.setAttribute('class','p1');
    title.innerText = el.name;

    let Brand = document.createElement('p')
    Brand.setAttribute('class','p2')
    Brand.innerText = el.brand;

    let Price = document.createElement('p')
    Price.setAttribute('class','p3');
    Price.innerText = `INR ${el.price}`;

    let stkprice = document.createElement('p')
    stkprice.setAttribute('class','p4')
    stkprice.innerText = `INR ${el.strikedoffprice}`;

   
    let star = document.createElement('img');
    star.setAttribute('id','rating')
    star.src ="https://www.kindpng.com/picc/m/487-4870870_black-4-star-rating-hd-png-download.png"

    
    thirdDiv.append(thirdimg,title,Brand,Price,stkprice,star)

    third.append(thirdDiv);
})

function gotoMens(){
    window.location.href = "sample.html";
}




// =============================================================================================//
// =============================================================================================//


let fourthdiv = document.getElementById('fourth');

let forthImgDiv = document.createElement('div');
forthImgDiv.setAttribute('id',"forthImgDiv");
let fourthAnchor = document.createElement('a');
fourthAnchor.href ="sample.html";
let fourthImg = document.createElement('img');

let forthinfoDiv = document.createElement('div');
forthinfoDiv.setAttribute('id','forthinfoDiv')
let fidhead = document.createElement('p');
let fidpara = document.createElement('p');
let fidbtnDiv = document.createElement('div');
let fidbtn1 = document.createElement('button');
let fidbtn2 = document.createElement('button');
let fidbtn3 = document.createElement('button');
let fidbtn4 = document.createElement('button');


fourthImg.src = "https://n.nordstrommedia.com/id/59f4195c-0e83-4694-8caa-023699806f73.jpeg?";
fourthAnchor.append(fourthImg)
forthImgDiv.append(fourthAnchor);

fidhead.innerHTML = "Mother's Day Is This Sunday!";
fidpara.innerHTML = "Need a perfect gift by Mother's Day? You can still get it in time with expedited shipping and store pickup options. See delivery dates at checkout.";
fidbtn1.innerText = "Our Gift Guide";
fidbtn2.innerText = "Mother's Day Gift";
fidbtn3.innerText = "Pop-in Gifts";
fidbtn4.innerText = "Gift Cards";
fidbtnDiv.append(fidbtn1,fidbtn2,fidbtn3,fidbtn4);

forthinfoDiv.append(fidhead,fidpara,fidbtnDiv)


fourthdiv.append(forthImgDiv,forthinfoDiv);


// =============================================================================================================
// =============================================================================================================

let sixthdiv = document.getElementById('sixth');

let sixthImgDiv = document.createElement('div');
sixthImgDiv.setAttribute('id',"sixthImgDiv");
let SixthAnchor = document.createElement('a');
SixthAnchor.href ="sample.html";
let sixthImg = document.createElement('img');

let sixthinfoDiv = document.createElement('div');
sixthinfoDiv.setAttribute('id','sixthinfoDiv')
let Sixthidhead = document.createElement('p');
let Sixthidpara = document.createElement('p');
let Sixthidbtn1 = document.createElement('button');



sixthImg.src = "https://n.nordstrommedia.com/id/65237083-ac2a-4dbf-9bb5-637d14d1de9b.jpeg?h=700&w=1608";
SixthAnchor.append(sixthImg)
sixthImgDiv.append(SixthAnchor);

Sixthidhead.innerHTML = "The New Sexy!";
Sixthidpara.innerHTML = "Confidence is your best accessory with these standout styles.";
Sixthidbtn1.innerText = "The New Sexy";


sixthinfoDiv.append(Sixthidhead,Sixthidpara,Sixthidbtn1)


sixthdiv.append(sixthImgDiv,sixthinfoDiv);


// ================================================================================================
// ================================================================================================
// ================================================================================================

let trendingForladies=[
    {
        image_url:
          "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tZW4lMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        name: "COTTON ROUNDED DRESS",
        price: 3999,
        strikedoffprice: 4199,
        brand: 'Auriela'
    },
    {
        image_url:
          "https://cdn.shopify.com/s/files/1/0266/6276/4597/products/100001_300888068_001_2_1024x1024.jpg?v=1644614038",
        name: "Cotton Round Dress",
        price: 1219,
        strikedoffprice: 1699,
        brand: 'Auriela'
    },
    {
        image_url:
          "https://n.nordstrommedia.com/id/sr3/8e968b6d-65c4-4f47-9c1a-dd2e6ebf503c.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        name: "ASTR the Label",
        price: 4619,
        strikedoffprice: 5699,
        brand: 'ASTR'
    },
    {
        image_url:
          "https://n.nordstrommedia.com/id/sr3/6cc48d7c-3468-4f6a-bd9a-feae6b755d9f.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        name: "Chunky Heels with Buckle",
        price: 11019,
        strikedoffprice: 10699,
        brand: 'Sam Edelman'
    },
    {
        image_url:
          "https://n.nordstrommedia.com/id/sr3/40339fe1-e400-460d-9467-46eecb4e69cc.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        name: "Heels",
        price: 8119,
        strikedoffprice: 9699,
        brand: 'Vince Camito'
    },
    {
        image_url:
          "https://n.nordstrommedia.com/id/sr3/b502150c-1f76-4c2f-b19d-5aae9e4b153e.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        name: "Spikey Heels",
        price: 4923,
        strikedoffprice: 5699,
        brand: 'Open Edit'
    },
    {
        image_url:
          "https://n.nordstrommedia.com/id/sr3/3ed2ed5b-fc33-4125-aade-b2a93374c45a.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        name: "Party Dress",
        price: 4999,
        strikedoffprice: 5199,
        brand: 'ASTR The Label'
    },
    {
        image_url:
          "https://n.nordstrommedia.com/id/sr3/24f328a1-c12c-4a34-a2b6-5bc8bdfda6fb.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        name: "Fancy Women's Sandalas",
        price: 3219,
        strikedoffprice: 4699,
        brand: 'Vince Camuto'
    },
    {
        image_url:
          "https://n.nordstrommedia.com/id/sr3/4f4a6450-fc23-4e3d-af8f-79b10f9b82b0.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        name: "Outdoor",
        price: 3219,
        strikedoffprice: 2699,
        brand: 'Open Edit'
    },
    {
        image_url:
          "https://n.nordstrommedia.com/id/sr3/b70024b6-5c16-476f-ac69-7a4f7b471cb4.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        name: "Black Party Outfit",
        price: 4119,
        strikedoffprice: 3699,
        brand: 'Naked Wardrobe'
    },
    {
        image_url:
          "https://assetscdn1.paytm.com/images/catalog/product/A/AP/APPSBO-FASHION-SBOF2791089EED1009/1562981535147_0..jpg",
        name: "Meni Red Dress Slim Fit",
        price: 3519,
        strikedoffprice: 3699,
        brand: 'Zara'
    },
    {
        image_url:
          "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3156306241590034339/products/10711605RD.f.07.04.2022.JPG&height=475&width=475",
        name: "Off Combination",
        price: 2819,
        strikedoffprice: 1699,
        brand: 'West Side'
    },
    {
        image_url:
          "https://www.lulus.com/images/product/xlarge/7635141_1583496.jpg?w=195&hdpi=1",
        name: "Bold Party Wear",
        price: 6999,
        strikedoffprice: 7199,
        brand: 'levis'
    },
    {
        image_url:
          "https://cdn.shopify.com/s/files/1/1018/4207/products/2_4c40e0e4-915d-44f5-91f5-93b042c2c1ef_533x.jpg?v=1650521763",
        name: "Berrylush Women's Kurta",
        price: 2019,
        strikedoffprice: 2699,
        brand: 'Sam Wilson'
    },
    {
        image_url:
          "https://cdn.shopify.com/s/files/1/0551/9959/6587/products/ZippedBackUNeckHalfSleeveSolidBodyconDressbyAttireNepal_efcf2386-05b1-406b-9054-e46752bca6e5_1024x1150.jpg?v=1637148788",
        name: "Zipped Back U Neck Half Sleeve Solid Bodycon Dress",
        price: 2319,
        strikedoffprice: 2699,
        brand: 'Attire Nepal'
    },
    {
        image_url:
          "https://m.media-amazon.com/images/I/31Z1Ry94-KL.jpg",
        name: "Zalora Basic Elbow Mini Dress",
        price: 2659,
        strikedoffprice: 2499,
        brand: 'Best Fashion Store'
    },
    {
        image_url:
          "https://cdn.shopify.com/s/files/1/0551/9959/6587/products/3e700311ffa220459db80d00eb312f18.jpg_2200x2200q75_1024x1150.jpg?v=1637127224",
        name: "FuLoo's Magic Dress Heavy Georgette With With Emboridery",
        price: 3019,
        strikedoffprice: 3699,
        brand: 'Fuloo Store'
    },
    {
        image_url:
          "https://cdn.shopify.com/s/files/1/0551/9959/6587/products/fcde10ed24cdd0bc5ec606d2aea0b5d8.jpg_2200x2200q75_1024x1150.jpg?v=1637127632",
        name: "Black Lace Mini Dress",
        price: 2019,
        strikedoffprice: 2699,
        brand: 'Best Fashion Store'
    },

]

let sevneth = document.getElementById('figure1');
trendingForladies.forEach(function(el){
    let SeventhDiv = document.createElement('div');
    SeventhDiv.addEventListener('click',function(){
        gotoWomens();
    })
    SeventhDiv.setAttribute('id','SeventhDiv')

    let Seventhimg = document.createElement('img');
    Seventhimg.src = el.image_url;

    let title = document.createElement('p')
    title.setAttribute('class','p1');
    title.innerText = el.name;

    let Brand = document.createElement('p')
    Brand.setAttribute('class','p2')
    Brand.innerText = el.brand;

    let Price = document.createElement('p')
    Price.setAttribute('class','p3');
    Price.innerText = `INR ${el.price}`;

    let stkprice = document.createElement('p')
    stkprice.setAttribute('class','p4')
    stkprice.innerText = `INR ${el.strikedoffprice}`;

   
    let star = document.createElement('img');
    star.setAttribute('id','rating')
    star.src ="https://www.kindpng.com/picc/m/487-4870870_black-4-star-rating-hd-png-download.png"

    
    SeventhDiv.append(Seventhimg,title,Brand,Price,stkprice,star)

    sevneth.append(SeventhDiv);
})

function gotoWomens(){
    window.location.href = "sample.html";
}