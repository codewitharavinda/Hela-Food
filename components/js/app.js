fetch("components/nav&footer/nav.html")
.then(res => res.text())
.then(data => {
    document.getElementById("nav").innerHTML = data;
});

fetch("components/nav&footer/footer.html")
.then(res => res.text())
.then(data => {
    document.getElementById("footer").innerHTML = data;
});
showHomeNav();
function showShopNav() {
    fetch("components/shop/shop.html")
    .then(res => res.text())
    .then(data => {
    document.getElementById("root").innerHTML = data;
});
}

function showHomeNav(){
    fetch("components/home/home.html")
    .then(res => res.text())
    .then(data => {
    document.getElementById("root").innerHTML = data;
    });
}

function showAboutNav(){
    fetch("components/about/about.html")
    .then(res => res.text())
    .then(data => {
    document.getElementById("root").innerHTML = data;
    });
}

function showloginNav(){
    fetch("components/login/login.html")
    .then(res => res.text())
    .then(data => {
    document.getElementById("root").innerHTML = data;
    });
}