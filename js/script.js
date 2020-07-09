document.addEventListener("DOMContentLoaded", function(){
    const button = document.getElementById('zdo_drawer_button');
    button.addEventListener('click',()=>{
        button.classList.toggle('active');
        document.getElementById('drawer-nav').classList.toggle('active');
    });
});