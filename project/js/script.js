const iconMenu=document.querySelector('.header_burger');
if(iconMenu){
    const menuBurger=document.querySelector('.header_menu');
     iconMenu.addEventListener('click' , function(){
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBurger.classList.toggle('_active');

     })
}
