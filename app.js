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


}