if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
function ready() {
    var addCartButton = document.getElementsByClassName('btn-warning')
    for (var i = 0; i < addCartButton.length; i++) {
        var button = addCartButton[i]
        button.addEventListener('click', addtoCart)
    }

    var userInput = document.getElementsByClassName('search-box')[0]
    console.log(userInput)
    userInput.addEventListener('keypress', function (event) {
        if(event.key === 'Enter') {
            event.preventDefault()
            document.getElementsByClassName("btn-outline-secondary")[0].click()
        }
    })
    
}

function searchBehavior() {
    var searchInput = document.getElementsByClassName('search-box')[0].value
    console.log(searchInput)
    const searchKeywords = ["playstation", "play station", "xbox", "switch", "nintendo switch", "video games", "games"]

    if(searchKeywords.includes(searchInput.toLowerCase())) {
        window.location.href = "searchResults.html"   
    }
    else if (searchInput == ""){
        alert("Search box cannot be blank. Please enter a value in the search field.")
    }
    else {
        alert("No search results found. Please search for another item.")
    }
}

function  updateSummary(cartWindow, cartLength, price) {
// updating total item count
    var itemCount = cartWindow.document.getElementById('total-items')
    itemCount.innerText = cartLength
    
    // updating total price
    var totalPrice = cartWindow.document.getElementById('total-price');
    totalPrice.innerText = price


    
}
function addtoCart(event) {
    var button = event.target
    var productItem = button.parentElement

    var productName = document.querySelector('.product-name').innerText
    console.log(productName)

    var productPrice = document.querySelector('.product-price').innerText
    console.log(productPrice)

    var productPicture = document.querySelector(".product-picture").src
    console.log(productPicture)    

    addItem(productName, productPrice, productPicture)

}

function addItem(name, price, picture) {
    var cartWindow = window.open('cart.html')
    

    cartWindow.onload = function() {
        var cartRow = cartWindow.document.createElement('div')
        var cartItems = cartWindow.document.getElementsByClassName('product-list')[0]
        var itemContent = `
        <div class="row border-top border-bottom">
          <div class="row align-items-center product-item">
            <div class="col-2 ps-0"><img src="${picture}" alt="" class="img-fluid"></div>
            <div class="col">
              <div class="row cart-title">${name}</div>
            </div>
            <div class="col cart-quantity">Quantity: 1</div>
            <div class="col cart-price">${price}</div>
          </div>
        </div>
        `
        cartRow.innerHTML = itemContent
        cartItems.append(cartRow)

        // update number of items in cart
        var cartCount = cartWindow.document.getElementsByClassName('product-item').length
       
        // update total price
        var totalPrice = 0;
        var priceList = cartWindow.document.querySelectorAll('.cart-price')
        console.log(priceList)

        priceList.forEach(function (item) {
            var priceText = item.innerText.replace('Price: $', '')
            var price = parseFloat(priceText);

            totalPrice += price
        });
        totalPrice += 2.5 + 3.4


        updateSummary(cartWindow, cartCount, totalPrice);

    }
    

}