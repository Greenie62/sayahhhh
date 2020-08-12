
var h1El=document.querySelector(".header_h1_one");
let toothbrushone=document.querySelector(".toothbrushone")
let toothbrushtwo=document.querySelector(".toothbrushtwo")
let overlay=document.querySelector(".overlay");
let h1overlay=document.querySelector(".h1overlay");
let goodnite=new Audio('./assets/goodnite.m4a')

toothbrushone.style.display='none'
h1overlay.style.display='none'
toothbrushtwo.style.display='none'


function animateDots(){

    let h1Text=h1El.innerHTML;
    console.log(h1Text)

   h1El.innerHTML=""

    for(let i=0;i<3;i++){
        h1Text += "<span class='dot'>.</span>"
    }

    h1El.innerHTML=h1Text

    addDots()
}

let x= alert("heres a dumb card from guerro")

animateDots()


function addDots(){
    let spans=document.querySelectorAll(".dot");
    console.log(spans)

    for(let i=0;i<spans.length;i++){
        setTimeout(()=>{
        spans[i].classList.add("animate-dot")

        if(i == 2){
            console.log("bring up ahhh!")
            document.querySelector(".header_h1_two").classList.add("say_ahh")
            openUp()
            setTimeout(()=>{
                overlay.classList.add("show-overlay")
                h1overlay.style.display='block'
                goodnite.play()

            },4000)
        }
        },i*750)
    }
}

// 

let mouth=document.querySelector(".mouth")
let teeth=document.querySelectorAll(".teeth")
let eyes=document.querySelectorAll(".eyeball")

// mouth.classList.remove("closemouth")
// teeth.forEach(t=>{
// t.classList.remove("hideteeth")
// })


function openUp(){

     mouth.classList.remove("closemouth")
     toothbrushone.style.display='block'
      toothbrushtwo.style.display='block'
  teeth.forEach(t=>{
   t.classList.remove("hideteeth")
    })
    eyes.forEach(t=>{
        t.classList.add("say-ahh")
         })
}