   
function x(){

    fundo = document.querySelector('.left')
    subnavalbum = document.querySelector('.subnavalbum')
    btn = document.querySelector(".bot");
    icon = btn.querySelector(".fa");

    if(icon.classList.contains("fa-bars")){
        icon.classList.replace("fa-bars", "fa-times");
        subnavalbum.style.display='flex'
        subnavalbum.style.flexDirection = 'column'
    }
    else{
        icon.classList.replace("fa-times", "fa-bars");
        subnavalbum.style.display='none'
    }

   

}





