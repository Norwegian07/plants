

function openNav(){
    document.getElementById("nav-contain-holder").style.width = "100%";
}

function closeNav(){
    document.getElementById("nav-contain-holder").style.width = "0%";
}

function nextImg(n){
    showSlide(initialSlide += n)
}
let initialSlide = 1;
function showSlide(n){
let i;
let slides = document.getElementsByClassName("img-contains")
for(i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
slides[initialSlide -1].style.display = "block";

slides[initialSlide -1].style.zoom = "1.3";                                                            

if(n < 1){
    initialSlide = slides.length;
}

if(n > 1){
    initialSlide = 1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
}                                                                                                                                                                                                                                                                                        


}