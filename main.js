const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
  console.log('Click');
  desktopMenu.classList.toggle('inactive');
}

console.log('JS funcionando');


const productlist = [];

productlist.push ({
    name: "bike",
    precio: "100",
    imagen: "hp1"
});

productlist.push ({
    name: "tv",
    precio: "200",
    imagen: "hp2"
});

productlist.push ({
    name: "cel",
    precio: "300",
    imagen: "hp3"
});


for (const producto of productlist) {
    console.log(producto.name);
}
