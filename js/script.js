let butterfly= document.querySelector('.butterfly');

window.addEventListener('mousemove',function(e){

    butterfly.style.top=`${e.clientY}px`
    butterfly.style.left=`${e.clientX}px`
})