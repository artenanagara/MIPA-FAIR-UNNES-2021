let loading = document.querySelector(".loading h1")
let text = loading.innerText;

$(document).ready(function() {
    setTimeout(function(){
       $('div.content').addClass('loaded');
        $('.loading').css('opacity', 0)
        $('.loading').css('visibility', 'hidden')
    }, 3000)
})