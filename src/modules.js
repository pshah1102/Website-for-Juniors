var menuBtn = document.getElementById("menu-btn");
var sideNav = document.getElementById("sideNav");

sideNav.style.right = "-250px";
menuBtn.onclick = function(){
    if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0px";
    }else{
        sideNav.style.right = "-250px";
    }
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}