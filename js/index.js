
//--- To open and add elements to cart

const buttonToCart = document.getElementById("cartmodal");
const modalCart = document.querySelector(".shopping__cart");
//const buttonAddCart = document.querySelector(".addToCart");
const badgecounter = document.querySelector(".badge__btn");
const cartItemsContainer = document.getElementById("cart-items");
const closeButton = document.getElementById("close__modal");
const iconCart = document.getElementById("icon__cart");


//--Variables del menu

const iconCloseMenu = document.getElementById("icon__menu-close");
const modalMenu = document.getElementById("menu_modal");
const iconMenuOpen = document.getElementById("icon__menu-open");

iconMenuOpen.addEventListener("click", (e) => {
    e.preventDefault();
    modalMenu.classList.toggle("Showmobile");
    
});

iconCloseMenu.addEventListener("click", (e) => {
    e.preventDefault();
    modalMenu.classList.remove("Showmobile");
    
});



let cartCount = 0;

iconCart.addEventListener("click", (e) => {
    e.preventDefault();
    modalCart.classList.toggle("show-Cart");
    
});


buttonToCart.addEventListener("click", (e) => {
    e.preventDefault();
    modalCart.classList.toggle("show-Cart");
    
});



closeButton.addEventListener("click", (e) => {
    e.preventDefault();
    modalCart.classList.remove("show-Cart");
    
});


/* 
document.addEventListener("click", (e) => {
    if(!modalCart.contains(e.target) && !buttonToCart.contains(e.target)){
        modalCart.classList.remove("show-Cart")
    }

    if (e.target.matches("button")) {
        modalCart.classList.remove("close__modal")
    }
});
*/

// add item to cart


document.querySelectorAll(".addToCart").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("producto añadido");

    const card = button.closest(".card__templante");
    const productImg = card.querySelector(".article__image").src;
    const productTitle = card.querySelector("h3").innerText;
    const productPrice = card.querySelector("p").innerText;

    const cartItem = document.createElement("div");
    cartItem.classList.add("card__cart");
    cartItem.innerHTML = `
      <img src="${productImg}" alt="Producto" class="image__product" width="50">
      <div>
        <h3>${productTitle}</h3>
        <p>${productPrice}</p>
      </div>
      <button class="delete__product"><img src="img/svg/delete_24dp_.svg"></button>
    `;

    cartItemsContainer.appendChild(cartItem);

    cartCount++;
    badgecounter.textContent = cartCount;

    // Mostrar badge si hay productos
    if (cartCount > 0) {
      badgecounter.style.display = "flex";
    }

    // Eliminar producto del carrito
    cartItem.querySelector(".delete__product").addEventListener("click", () => {
      cartItem.remove();
      cartCount--;
      badgecounter.textContent = cartCount;

      // Ocultar badge si ya no hay productos
      if (cartCount <= 0) {
        badgecounter.style.display = "none";
      }
    });
  });
});










//---To drop options
const dropDownButton = document.querySelector(".drop__down-button");
const dropDoow = document.querySelector(".drop__down");


dropDownButton.addEventListener("click", (e) => {
    e.stopPropagation();
    dropDoow.classList.toggle("show-drop");
});

document.addEventListener("click", (e) => {
    if(!dropDoow.contains(e.target) && !dropDownButton.contains(e.target)){
        dropDoow.classList.remove("show-drop")
    }

    if (e.target.matches("li")) {
        dropDoow.classList.remove("show-drop")
    }
});
