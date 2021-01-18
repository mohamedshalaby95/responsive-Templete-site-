
// display navbar in scroll up and none in scoll down  start 
    let nav=document.querySelector(".navbar");
    var lastScrollTop = 0;


   window.addEventListener("scroll", function(){ 
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop){
     nav.style.display="none";
    } else {
    nav.style.display="flex";
    }
   lastScrollTop = st 
}, false);
// display in scroll up and none in scoll down  end


/* make the resposive button start*/

let button_toggle=document.querySelector(".toggle");
let linksUl =document.querySelector(".nav_links")


button_toggle.onclick=function(){
   
    linksUl.classList.toggle("open");
 }
 /* make the resposive button end*/


// make links work smooth start


 let  links=document.querySelectorAll(".nav_links li a");
   links.forEach(link =>{

 link.addEventListener("click",(e) =>{
     
     e.preventDefault();
  

document.querySelector(link.getAttribute('data_section')).scrollIntoView({
    behavior:'smooth'
})



 })




   })



// make links work smooth end

// side bar start


// togle side bar start
var settingBar=document.getElementById('close');
var side_bar=document.getElementById("side_bar");
settingBar.onclick=function(){
 
    this.classList.toggle("fa-spin");
    side_bar.classList.toggle("open");
}

// togle side bar end


//change color start
var mainColor=localStorage.getItem("color_select")
if(mainColor!=null){
    document.documentElement.style.setProperty("--main--color",mainColor)
   document.querySelectorAll(".choose_color li").forEach(element => {
        element.classList.remove("active");

        if(element.dataset.color === mainColor){
            element.classList.add("active");
        }
    });
    
}

var element=document.querySelectorAll(".choose_color li");
var colors=[];
for(var i=0;i<element.length;i++){
    colors.push(element[i].getAttribute("data-color"))

    element[i].addEventListener("click",function(e){
        
     
        document.documentElement.style.setProperty("--main--color",e.target.dataset.color);
        localStorage.setItem("color_select",e.target.dataset.color);

        // add and remove activa class
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });
        e.target.classList.add("active");
    })
   
}



//change color end

// setting side bar start

var settingBar=document.getElementById('close');
var side_bar=document.getElementById("side_bar");
settingBar.onclick=function(){
 
    this.classList.toggle("fa-spin");
    side_bar.classList.toggle("open");
}

// side bar end

//make slider start
let j=1;
let slider =document.querySelector(".home");
let slider_count;

function startSlider(){
  
    slider_count=setInterval(function(){
        if(j>3) j=1;
        
         slider.style.backgroundImage="url('img/img/slider/slider-"+j+".jpg')";
        j++;
    
    
    },3000)
}
startSlider();
// stop button slider start
let btn_stop=document.querySelector(".btn2 ");
 btn_stop.onclick=function(){
    clearInterval(slider_count);
    slider.style.backgroundImage="url('img/img/slider/slider-1.jpg')";
 }

// stop button slider end

//return start
let btn_start=document.querySelector(".btn1");
btn_start.onclick=function(){
    startSlider();
 }


// slider end
     

// replace words desinger and developer start
let replace=document.getElementById("replace");

 setInterval(function(){



    
    replace.innerText= replace.textContent.replace(replace.textContent,"Developer|");
       
    
    
 },1000);
 setInterval(function(){

 
    
    replace.innerText= replace.textContent.replace(replace.textContent,"Designer|");
       
    
    
 },2000);

 // replace words desinger and developer end
 
// make slider portfoile

let portfoileImage=Array.from(document.querySelectorAll(".Portfolio_images "));
let sliderContainer=document.querySelector(".slider_display")
let imagesSlider=document.querySelector(".slider_caption ");
let close=document.getElementById("close_slider");
let next=document.getElementById("next_slider");
var prev =document.getElementById("prev");
let currentIndex=0


 
for( let i=0;i<portfoileImage.length;i++){
portfoileImage[i].addEventListener('click',function(e){

sliderContainer.style.display="flex";

     
     currentIndex=portfoileImage.indexOf(e.target);
     
    var imagesSrc=e.target.src;
   
     
     imagesSlider.style.backgroundImage = "url("+imagesSrc+")";
     

})

}
close.addEventListener("click",closeOverly)

function closeOverly() {
    sliderContainer.style.display="none";
   
}
next.addEventListener("click",gonext)

function  gonext(){
    currentIndex++;
 if(currentIndex>portfoileImage.length-1){
     currentIndex=0;
 }
 imagesSlider.style.backgroundImage = "url("+portfoileImage[currentIndex].src+")";
 
}

prev.addEventListener("click",goprev)

function goprev(){

    currentIndex--;
if(currentIndex<0){
    currentIndex=portfoileImage.length-1;
}
imagesSlider.style.backgroundImage = "url("+portfoileImage[currentIndex].src+")";



}


document.addEventListener("keyup",function(e){
    if(e.keyCode==39){
        gonext();
    }
    else if(e.keyCode==37){
        goprev();
    }
    else if(e.keyCode==27){
        closeOverly();
        
    }
    
    
    
    })

    // end slider portofolia


    // feed back start 
    let changeFeedback1=document.getElementById("btnfeedback1");
    let changeFeedback2=document.getElementById("btnfeedback2");
    let feedbackCaption2=document.getElementById("Feedback-caption2");
    let feedbackCaption1=document.getElementById("Feedback-caption1");
   
    
    changeFeedback1.onclick=function(){

        this.classList.add("btnfeedback1");
        changeFeedback2.classList.remove("btnfeedback1");
        feedbackCaption2.style. opacity="0";
        feedbackCaption2.style.left="90%";


    }
    changeFeedback2.onclick=function(){

        this.classList.add("btnfeedback1");
         changeFeedback1.classList.remove("btnfeedback1");
         feedbackCaption2.style. opacity="1";
         feedbackCaption2.style.left="20%";
    }

    // feed back end 
     
