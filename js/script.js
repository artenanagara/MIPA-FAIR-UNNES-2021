
const sambutanObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('move-in')
        }
    })
})

sambutanObserver.observe(document.querySelector('#sambutan'))

const teaserObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('move-in')
        }
    })
})

teaserObserver.observe(document.querySelector('#teaser'))

const ukmObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('move-in')
        }
    })
})

ukmObserver.observe(document.querySelector('#ukm'))

let loading = document.querySelector(".loading h1")
let text = loading.innerText;

$(document).ready(function() {
    setTimeout(function(){
       $('div.content').addClass('loaded');
        $('.loading').css('opacity', 0)
        $('.loading').css('visibility', 'hidden')
    }, 3000)
})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})