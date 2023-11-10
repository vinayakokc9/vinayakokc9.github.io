if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
function ready() {
    var addCartButton = document.getElementsByClassName('btn-primary')
    for (var i = 0; i < addCartButton.length; i++) {
        var button = addCartButton[i]
        button.addEventListener('click', addtoCart)
    }



    
}
function  updateTotal() {
    
}
function addtoCart(event) {
    var button = event.target
    var productItem = button.parentElement

    var productName = productItem.getElementsByClassName('product-name')[0].innerText
    console.log(productName)

    var productPrice = productItem.getElementsByClassName('product-price')[0].innerText
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
            <div class="col-2"><img src="${picture}" alt="" class="img-fluid"></div>
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
    }
    

}