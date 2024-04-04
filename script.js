var vendors = [];
var products = [];

document.addEventListener("DOMContentLoaded", function () {
    addShoppingPanel();
    addVendorPanel();
    addProductPanel();
});

// function addShoppingPanel() {
//     document.getElementById('add-shop').addEventListener('click', function () {
//         var productListing = document.getElementById("productListing");
//         productListing.innerHTML = "";
    
//         for (i = 0; i < products.length; i++) {
//             var li = document.createElement("LI");
//             var textnode=document.createTextNode(products[i].productname + "/" + products[i].brandname + " from " + products[i].vendor + " - " + products[i].price);
//             li.appendChild(textnode);
//             productListing.appendChild(li);
//         }    
//         $('#modal-pr').modal('show');
//     });
// }

function addShoppingPanel() {
    document.getElementById('add-shop').addEventListener('click', function () {
        var productListing = document.getElementById("productListing");
        productListing.innerHTML = "";
    
        for (i = 0; i < products.length; i++) {
            var li = document.createElement("li");
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.name = "selectedProducts";
            checkbox.value = i; // Set the value to the index of the product in the array
            var label = document.createElement("label");
            label.textContent = products[i].productname + "/" + products[i].brandname + " from " + products[i].vendor + " - " + products[i].price;
            
            li.appendChild(checkbox);
            li.appendChild(label);
            productListing.appendChild(li);
        }    
        $('#modal-pr').modal('show');
    });
}


function addVendorPanel() {
    document.getElementById('add-vendor').addEventListener('click', function () {
        $('#modal-vn').modal('show');
    });
}

function addProductPanel() {
    document.getElementById('add-product').addEventListener('click', function () {
        var vendorSelectionList = document.getElementById("vendorSelection");
        vendorSelectionList.innerHTML = "";
        for (i = 0; i < vendors.length; i++) {
            vendorSelectionList.appendChild(new Option(vendors[i], i)); 
        }
        $('#modal-p').modal('show');
    });
}

function addNewVendor() {
    var vname = document.getElementById("vendorNameInput").value;
    if (vname != undefined) {
        for (i = 0; i < vendors.length; i++) {
            if (vendors[i] == vname) {
                return;
            }
        }
        vendors.push(vname);
        $('#modal-vn').modal('hide');
    }
}

function addNewProduct() {
    var form = document.getElementById('productform')
    console.log(form);
    var details = {
        productname: form.elements["productName"].value,
        brandname: form.elements["brandName"].value,
        vendor: vendors[form.elements["vendorSelection"].value],
        price: form.elements["price"].value
    }

    products.push(details);
    $('#modal-p').modal('hide');

    console.log(details);
}

// function addSelectedProducts() {
//     // Get the list of selected products
//     var selectedProducts = document.getElementById('selectedProductsList').getElementsByTagName('li');
    
//     // Process the selected products
//     for (var i = 0; i < selectedProducts.length; i++) {
//         var productName = selectedProducts[i].innerText;
//         // Process each selected product as needed
//         console.log("Selected Product: ", productName);
//     }
    
//     // Here you can perform further actions with the selected products, such as adding them to a new list or performing other operations.
    
//     // For example, you can clear the selected products list after submission
//     document.getElementById('selectedProductsList').innerHTML = "";
    
//     // Close the modal after submission if needed
//     $('#modal-pr').modal('hide');
// }

// function addSelectedProducts() {
//     // Get the list of selected checkboxes
//     var selectedCheckboxes = document.querySelectorAll('#productListing input[type="checkbox"]:checked');
    
//     // Clear the existing selected products list
//     var selectedProductsList = document.getElementById('selectedProductsList');
//     selectedProductsList.innerHTML = '';
    
//     // Create a new card for the selected products
//     var cardDiv = document.createElement("div");
//     cardDiv.classList.add("card", "col-12", "mb-3");

//     // Create card body
//     var cardBody = document.createElement("div");
//     cardBody.classList.add("card-body");

//     // Create card title
//     var cardTitle = document.createElement("h5");
//     cardTitle.classList.add("card-title");
//     cardTitle.textContent = "Selected Products";

//     // Create list for selected products
//     var ul = document.createElement("ul");
//     ul.classList.add("list-group");

//     // Process each selected checkbox
//     selectedCheckboxes.forEach(function(checkbox) {
//         var productIndex = parseInt(checkbox.value); // Get the index of the selected product
//         var product = products[productIndex]; // Get the selected product object
        
//         // Create list item for each selected product
//         var li = document.createElement("li");
//         li.classList.add("list-group-item");
//         li.textContent = product.productname + " - " + product.brandname + " from " + product.vendor + " - " + product.price;

//         // Append list item to the list
//         ul.appendChild(li);
//     });

//     // Append elements to card body
//     cardBody.appendChild(cardTitle);
//     cardBody.appendChild(ul);

//     // Append card body to card
//     cardDiv.appendChild(cardBody);

//     // Append the card to the selected products container
//     selectedProductsList.appendChild(cardDiv);

//     // Close the modal after submission if needed
//     $('#modal-pr').modal('hide');
// }

function addSelectedProducts() {
    // Get the list of selected products
    var selectedProducts = document.querySelectorAll('input[name="selectedProducts"]:checked');
    
    // Create a new card
    var cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "col-3", "dsc-ca");
    
    // Create a new ul element for the list of selected items
    var ul = document.createElement("ul");
    ul.classList.add("list-group", "list-group-flush");

    // Populate the list with selected items
    selectedProducts.forEach(function (checkbox) {
        var index = checkbox.value;
        var product = products[index];
        var li = document.createElement("li");
        li.classList.add("list-group-item");
        li.textContent = product.productname + "/" + product.brandname + " from " + product.vendor + " - " + product.price;
        ul.appendChild(li);
    });

    // Append the ul to the card
    cardDiv.appendChild(ul);

    // Append the card to the selected products container
    document.getElementById("selectedProductsContainer").appendChild(cardDiv);
    
    // Close the modal after submission if needed
    $('#modal-pr').modal('hide');
}

