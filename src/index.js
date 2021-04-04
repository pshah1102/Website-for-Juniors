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

if("serviceWorker" in navigator)   {
    navigator.serviceWorker.register("sw.js").then(registration =>{
        console.log("SW Registered!");
        console.log(registration);
    }).catch(error =>{
        console.log("SW Registration failed!");
        console.log(error);
    });
}     