const btn=document.querySelector('.btn');

window.addEventListener('scroll' , ()=>{
    if(window.pageYOffset>300){
        btn.classList.add('active');
    }
    else{
        btn.classList.remove('active');
    }
})  