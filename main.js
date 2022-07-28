const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenu.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    
    aside.classList.toggle('inactive');
}

const productList = [];
productList.push ({
    name:'Bike',
    price: 12700,
    image: 'https://www.zotezo.com/in/wp-content/uploads/sites/2/2020/08/TATA-Stryder-I-Ride-Model-MTB-Speed-Bicycle-Full-Heavy-Tyre-Road-Bike.jpg'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://contents.mediadecathlon.com/p2273555/k$cb0442da2b150ee0ea9a2c6fa55249e4/casco-de-ciclismo-ruta-van-rysel-roadr-500-negro.jpg?&f=452x452'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://contents.mediadecathlon.com/p1607327/k$6b2d6fae1bd60dd7fbc48ee57a3509b2/roadr-500-road-cycling-helmet-black.jpg?&f=452x452'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1500,
    image: 'http://cdn.shopify.com/s/files/1/0260/0809/2734/products/blackred1_1200x1200.png'
});
productList.push ({
    name:'Seat',
    price: 300,
    image: 'https://i5.walmartimages.com/asr/aae81858-32ab-4b7f-b2f9-63b86c406c98_1.777845aefe4fbee485457bf0070d41f9.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
});
productList.push ({
    name:'Tennis Mountain Bike',
    price: 2200,
    image: 'https://i.pinimg.com/originals/48/64/e4/4864e491f93630db8aeb4534b6e18fe2.jpg'
});
productList.push ({
    name:'Sunglasses',
    price: 800,
    image: 'https://www.burton.com/static/product/S23/23655100001_1.png'
});
productList.push ({
    name:'Sunglasses',
    price: 600,
    image: 'https://www.burton.com/static/product/S23/23655100600_1.png'
});
productList.push ({
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/71cRW9TnzfL._AC_SS450_.jpg'
}); 

/*<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
*/

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList);

