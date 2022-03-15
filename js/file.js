var menuItems =document.getElementById("menuItems");
menuItems.style.maxHeight="0px";
function menuetoggel()
{
    if( menuItems.style.maxHeight=="0px")
    {

        menuItems.style.maxHeight="250px";
    }
    else
    {
        menuItems.style.maxHeight="0px";
    }
}
var icon1=document.getElementById("icon");
var search=document.getElementById("search");
icon1.onclick=function(){
    search.classList.toggle('active')
}
const btn=document.querySelector(".ntn-ahmed")
function ahmed()
{
    alert("done")
}
// -------------------------------------------
window.onload=function()
{

    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });
}