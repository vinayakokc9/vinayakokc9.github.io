if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
var quantity = 1;
var gameConsoles = {
    "Playstation": {
        "Type": "Console",
        "Color": "White",
        "Weight": "14.7 lbs",
        "Customer Reviews": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    },
    "Xbox": {
        "Type": "Console",
        "Color": "Black",
        "Weight": "9.7 lbs",
        "Customer Reviews": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
    },
    "Switch": {
        "Type": "Handheld",
        "Color": "Black",
        "Weight": "0.66 lbs",
        "Customer Reviews": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"
    },
    "Apple": {
        "Type": "Wrist Accessory",
        "Color": "Black",
        "Weight": "31.9 grams",
        "Customer Reviews": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    },
    "Samsung": {
        "Type": "Wrist Accessory",
        "Color": "Grey",
        "Weight": "28.7 grams",
        "Customer Reviews": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
    },
    "Fitbit": {
        "Type": "Wrist Accessory",
        "Color": "Gold",
        "Weight": "24.66 grams",
        "Customer Reviews": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"
    },
    "Airpods": {
        "Type": "Over-ear",
        "Color": "Silver",
        "Weight": "13.6 ounces",
        "Customer Reviews": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    },
    "Bose": {
        "Type": "Over-ear",
        "Color": "Black",
        "Weight": "8.3 ounces",
        "Customer Reviews": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
    },
    "Beats": {
        "Type": "Over-ear",
        "Color": "White/Gold",
        "Weight": "9.17 ounces",
        "Customer Reviews": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"
    }
};

function ready() {
    var addCartButton = document.getElementsByClassName('btn-warning')
    for (var i = 0; i < addCartButton.length; i++) {
        var button = addCartButton[i]
        button.addEventListener('click', addtoCart)
    }

    var userInput = document.getElementsByClassName('search-box')[0]
    // console.log(userInput)
    userInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault()
            document.getElementsByClassName("btn-outline-secondary")[0].click()
        }
    })

}

function searchBehavior() {
    var searchInput = document.getElementsByClassName('search-box')[0].value
    var playstationItem = document.getElementsByClassName('playstation-item')[0];
    var xboxItem = document.getElementsByClassName('xbox-item')[0];
    var switchItem = document.getElementsByClassName('switch-item')[0];
  
    if(!xboxItem) {
        console.error("Not found")
    }
    const searchKeywords = [ "xbox", "switch", "nintendo switch", "gaming consoles", "playstation", "play station", "video games", "games", "fitbit watch", "samsung watch", "apple watch", "fitness watch", "apple airpods", "headphones", "bose headphones", "beats headphones"]
    for(var i = 0 ; i < searchKeywords.length; i++) {
        if (searchKeywords[i].includes(searchInput.toLowerCase()) && searchInput.length > 3) {
            
            if(i < 1) {
               window.location.href = "searchResultsXbox.html" 
            }
            else if(i < 3) {
                window.location.href = "searchResultsSwitch.html" 
            }
            else if(i > 2 && i < 8) {
                window.location.href = "searchResults.html" 
            }
            else if(i == 8) {
                window.location.href = "searchResultsWatches2.html"
            }
            else if(i == 9) {
                window.location.href = "searchResultsWatches3.html"
            }
            else if(i > 9 && i < 12) {
                window.location.href = "searchResultsWatches.html"
            }
            else if(i > 11 && i < 14) {
                window.location.href = "searchResultsHeadphones.html"
            }
            else if(i == 14) {
                window.location.href = "searchResultsHeadphones2.html"
            }
            else if(i == 15) {
                window.location.href = "searchResultsHeadphones3.html"
            }
            return;
        }
        
    }
    
     
    if (searchInput == "") {
        alert("Search box cannot be blank. Please enter a value in the search field.")
    }
    else {
        alert("No search results found. Please search for another item.")
    }
}





function updateSummary(cartWindow, cartLength, price) {
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


    cartWindow.onload = function () {
        var cartRow = cartWindow.document.createElement('div')
        var cartItems = cartWindow.document.getElementsByClassName('product-list')[0]
        var itemContent =
            `
            <div class="row border-top border-bottom">
          <div class="row align-items-center product-item">
            <div class="col-2 ps-0">
              <img src="${picture}" alt="" class="img-fluid">
            </div>
            <div class="col">
              <div class=" cart-title">${name}</div>
            </div>

            <div class="col d-flex">
              <div class="d-flex flex-row">
                <a class="mb-0 font-weight-bold cart-minus pe-2" href="javascript:void(0);" onclick="decreaseItem();"><strong>-</strong></a>
                <p class="mb-0  ">Quantity: 1</p>
                <p class="mb-0 font-weight-bold ps-2"><strong>+</strong></p>
              </div>
            </div>
            <div class="col d-flex justify-content-end">
              <div class="col cart-price">${price}</div>
              <a class="delete-item " onclick="return deleteItem()">X</a>
            </div>
          </div>
        </div>
        `
        // <div class="row border-top border-bottom">
        //   <div class="row align-items-center product-item">
        //     <div class="col-2 ps-0">
        //         <img src="${picture}" alt="" class="img-fluid"></div>
        //     <div class="col">
        //       <div class="row cart-title">${name}</div>
        //     </div>
        //     <div class="col cart-quantity">Quantity: 1</div>
        //     <div class="col cart-price">${price}</div>
        //   </div>
        // </div>
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



function updateTable() {
    var selectedFeatures = getSelectedValues("featuresDropdownContent");
    var selectedProducts = getSelectedValues("productsDropdownContent");
    var tableBody = document.getElementById("tableBody");
    var tableCol = document.getElementById("tableCol");
    var comparisonTable = document.getElementById("comparisonTable");
    var selectedFeaturesSpan = document.getElementById("selectedFeatures");
    var selectedProductsSpan = document.getElementById("selectedProducts");


    tableBody.innerHTML = "";

    // update selected product list 
    if (selectedProducts.length > 0) {
        selectedProductsSpan.textContent = selectedProducts.join(', ');
    }
    else {
        selectedProductsSpan.textContent = "None";
    }

    // update selected features list
    if (selectedFeatures.length > 0) {
        selectedFeaturesSpan.textContent = selectedFeatures.join(', ');
    }
    else {
        selectedFeaturesSpan.textContent = "None";
    }


    //reset header cells
    if (tableCol.childElementCount > 0) {
        for (var i = 1; i < tableCol.childElementCount; i++) {
            tableCol.deleteCell(i);
            i--;
        }
    }

    //insert product columns
    for (var i = 0; i < selectedProducts.length; i++) {
        var featureCell = tableCol.insertCell(i + 1);
        featureCell.innerText = selectedProducts[i];

    }

    //populate table body
    if (selectedProducts.length > 0 && selectedFeatures.length > 0) {

        comparisonTable.style.display = "table";

        // create list of products and items

        selectedProductsSpan.textContent = selectedProducts.join(', ');
        selectedFeaturesSpan.textContent = selectedFeatures.join(', ');

        // populate rows
        for (var i = 0; i < selectedFeatures.length; i++) {
            var newRow = tableBody.insertRow(tableBody.rows.length);
            var featureCell = newRow.insertCell(0);
            featureCell.innerText = selectedFeatures[i];

            for (var j = 0; j < selectedProducts.length; j++) {
                var productCell = newRow.insertCell(j + 1);
                productCell.innerText = getData(selectedProducts[j], selectedFeatures[i]);
            }
        }
    } else {
        comparisonTable.style.display = "none";
    }
}

function getSelectedValues(dropdownId) {
    var dropdownContent = document.getElementById(dropdownId);
    var selectedValues = [];
    var activeCheckboxes = dropdownContent.querySelectorAll('input[type="checkbox"]:checked');

    for (var i = 0; i < activeCheckboxes.length; i++) {
        selectedValues.push(activeCheckboxes[i].value);
    }
    return selectedValues;
}

function getData(product, feature) {

    return gameConsoles[product][feature];
}



function decreaseItem(event) {
    if(quantity > 0) {
        quantity--;
        updateQuantity();
    }
    
    if(quantity < 1) {
        deleteItem(event);
    }
    // Call remove function if quantity reaches 0
}

function increaseItem() {

        quantity++;
        updateQuantity();
}

function updateQuantity() {
    document.getElementById('cart-quantity').innerText = "Quantity: " + quantity;
}

function deleteItem(event) {
    parentDivElement = event.parentElement.parentElement.parentElement;
    if (parentDivElement) {
        parentDivElement.remove();
    }
    window.confirm("Item in your cart has been deleted.")
    
}