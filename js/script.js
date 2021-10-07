const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('move-in')
        }
    })
})

observer.observe(document.querySelector('.section'))













let loading = document.querySelector(".loading h1")
let text = loading.innerText;

$(document).ready(function() {
    setTimeout(function(){
       $('div.content').addClass('loaded');
        $('.loading').css('opacity', 0)
        $('.loading').css('visibility', 'hidden')
    }, 300)
})