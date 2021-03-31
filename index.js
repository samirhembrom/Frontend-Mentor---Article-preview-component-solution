function popUp(){
    const popUpMenuEl = document.getElementById("popUpMenu");
    const imgshareEl = document.getElementById("img-share");
    const btnEl = document.getElementById("btn");
    btnEl.classList.toggle("toGray");
    imgshareEl.classList.toggle("toWhite");
    popUpMenuEl.classList.toggle("show");
    if(window.screen.availWidth > 799){
        popUpMenuEl.classList.remove("popup");
        popUpMenuEl.classList.add("popupDesk");
    }else{
        popUpMenuEl.classList.remove("popupDesk");
        popUpMenuEl.classList.add("popup");
    }
}