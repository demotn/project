function add(){
    alert("Added")
}
// ---------------------------------- Slider-------------------------------------
$(document).ready(function() {
    var owl = $('.owl-carousel');
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin: 25,
      nav : true,
    //   navText: ["left","right"],
      slideBy: 3, //Arrow click 3 image slide
      responsiveClass: true,
      responsive:{
      0:{
      items:1,
      nav:true
      },
      600:{
      items:2,
      nav:true
      },
      1000:{
      items:3,
      nav:true
      }
      }
      });			  
  })

// ---------------------------------- Search -------------------------------------
document.querySelector('.search-btn').addEventListener('click', function () {
	this.parentElement.classList.toggle('open')
	this.previousElementSibling.focus()
})


const btn = document.querySelectorAll(".btn-add-to-cart")
// console.log(btn)
btn.forEach(function(button,index){
    button.addEventListener("click", function(event){
        var btnItem = event.target
        var product = btnItem.parentElement
        var productImg = product.querySelector(".item-img").src
        var productName = product.querySelector(".name").innerText
        var productPrice = product.querySelector(".price").innerText
        addcart(productImg, productName ,productPrice)
    })
})
function addcart(productImg, productName ,productPrice){
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    // for (var i=0;i<cartItem.length;i++){
    //     var productT = document.querySelectorAll(".title-name")
    //     if(productT[i].innerHTML == productName){
    //         alert("Products already in the cart")
    //         return
    //     }
    // }
    var trcontent = '<tr><td class="cart-imgs"><img class="cart-img" src="'+productImg+'" alt=""><span class="title-name">'+productName+'</span></td><td><p>$<span class="price">'+productPrice+'</span></p></td><td><input class="cart-input" type="number" value="1" min="0"></td><td><span class="delete-product">Delete</span></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    cartTable.append(addtr)
    carttotal()
    deleteCart()
}

// ---------------------------------- Total Price -------------------------------------
function carttotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    var totalB = 0
    for (var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input").value
        // console.log(inputValue)
        var productPrice = cartItem[i].querySelector(".price").innerHTML
        // console.log(productPrice)
        totalA = inputValue*productPrice
        totalB = totalB+totalA
        // totalC = totalB.toLocaleString('en-ZA')
    }
    var cartTotalA = document.querySelector(".total-price span")
    cartTotalA.innerHTML = totalB.toLocaleString('en-ZA')
    inputChange()
    // console.log(cartTotalA)
}
// ---------------------------------- Delete Product  -------------------------------------
function deleteCart(){
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".delete-product")
        productT[i].addEventListener("click", function(event){
            var cartDelete = event.target
            var cartitemR = cartDelete.parentElement.parentElement
            cartitemR.remove()
            carttotal()
        })
    }   
}
function inputChange(){
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
            carttotal()
        })
    }   
}

function none(){
    var close = document.querySelector(".cart");
    close.style.display = "none";
}
function block (){
    var block = document.querySelector(".cart");
    block.style.display = "block";
}