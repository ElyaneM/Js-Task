// WINDOW & DOCUMENT//////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////

// BURADA SIZDEN YARATMAGINIZ ISTENILEN DIV-LER HER BIRI AYRI OLUB TASK HELL EDILDIKDEN SONRA KOMMENTE ATILMALI
// VE HANSI DIVIN HANSI TAKSA AID OLDUGU KOMMENT SHEKLINDE QEYD EDILMELIDIR!
// VE YA HER BIRINI AYRI FAYLLARDA EDE BILERSINIZ.


// --------------------------------------------------------------------------------------------------------




// // 1) Bir div yaradin pencerenin solunda normal yerinde dayansin. 2 saniyeden bir 20px sola hereket etsin ve 20 saniyeden sonra dayansin.

// const root = document.getElementById("root")

// let divElement = document.createElement("div")

// divElement.style.cssText = `
//     background:red;
//     width:100px;
//     height:100px;
// `
// root.appendChild(divElement)

// // 20 saniyeden sonra silinsin
// setTimeout(() => {
//     clearInterval(myInterval)
// }, 20000);

// let num = 0
// let myInterval = setInterval(() => {
//     num+=20
//     divElement.style.transform = `translateX(${num}px)`
// }, 2000);




// --------------------------------------------------------------------------------------------------------



// // 2) Bir div yaradin olcusu 100-100px kvadrat olsun 1 saniyeden bir 10px 
// //    ashagi 10px saga transitionla hereket etsin.

// const root = document.getElementById("root")

// let divElement = document.createElement("div")

// divElement.style.cssText = `
//     background:royalblue;
//     width:100px;
//     height:100px;
//     transition:all .2s;
// `

// root.appendChild(divElement)

// let num = 0
// setInterval(() => {
//     num+=10
//     divElement.style.transform = `translate(${num}px,${num}px)`
// }, 1000);



// --------------------------------------------------------------------------------------------------------




// // 3) Bir div yaradin onu sehifede centerleyin. Olculeri 200-200px
// //  kvadrat olsun 1 saniyeden bir boyuyerek 400px-400px sonra yeniden oz olculerine qayitsin
// // Transitonla etmeyiniz gozlenilendir.


// const root = document.getElementById("root")

// let divElement = document.createElement("div")

// divElement.style.cssText = `
//     background:rebeccapurple;
//     width:200px;
//     height:200px;
//     position:fixed;
//     top:50%;
//     left:50%;
//     transition:all .5s;
//     transform:translate(-50%,-50%);
// `

// root.appendChild(divElement)

// let size = 200
// setInterval(() => {
//     if(size == 200){
//         size=400
//     } else if(size == 400){
//         size = 200
//     }
//     divElement.style.width = `${size}px`
//     divElement.style.height = `${size}px`

// }, 500);




// --------------------------------------------------------------------------------------------------------



// // 4) Bir div (200px x 200px olcude kvadrat)  ve iki button (Start ve stop) yaradin onlari alt alta centerleyin
// // Start buttona basandan 1 saniye sonra ve her 2 saniyeden bir div 90 derece firlansin
// // Stop buttona basanda 'Stop' sozunun yaninda 3 2 1 saysin ve firlanma dayansin.


// const root = document.getElementById("root")

// let divElement = document.createElement("div")
// root.style.cssText = `
//     width:100vw;
//     height:100vh;
//     overflow:hidden;
//     display:flex;
//     flex-direction:column;
//     align-items:center;
//     justify-content:center;
// `
// divElement.style.cssText = `
//     background:royalblue;
//     width:200px;
//     height:200px;
//     margin-bottom:100px;
//     transition:all 2s;
// `

// let newDiv = document.createElement("div")

// let btnStart = document.createElement("button")
// btnStart.innerText = "Start"
// let btnStop = document.createElement("button")
// btnStop.innerText = "Stop"

// newDiv.appendChild(btnStart)
// newDiv.appendChild(btnStop)


// root.appendChild(divElement)
// root.appendChild(newDiv)
// let startInterval;
// let rotateDeg = 0
// btnStart.addEventListener('click',function(e){
//     e.preventDefault()
//     setTimeout(() => {
//         startInterval = setInterval(() => {
//             rotateDeg+=90
//             divElement.style.transform = `rotate(${rotateDeg}deg)`
//         }, 2000);
//     }, 1000);
// })

// btnStop.addEventListener('click',function(e){
//     e.preventDefault()
//     let time = 3
//     let stopInterval = setInterval(() => {
//         if(time==0){
//             clearInterval(startInterval)
//             clearInterval(stopInterval)
//             btnStop.innerText = "Stop"
//         } else {
//             btnStop.innerText = "Stop" + time
//             time--
//         }

//     }, 1000);

// })






// --------------------------------------------------------------------------------------------------------




// // 5) Bir div yaradin pencerenin sol yuxari kuncunde dayansin. Ustune clickledikde Ilk olaraq en sag kunce  
// // 2ci defe clickledikde ashagi kunce 3 cu de  sol ashagi kunce ve sonda ilk bashldigi yere qayitsin

// const root = document.getElementById("root")

// let divElement = document.createElement("div")

// divElement.style.cssText = `
//     background:royalblue;
//     width:200px;
//     height:200px;
//     transition:all 2s;
//     position:fixed;
//     top:0;
//     left:0;
//     cursor:pointer;
// `

// root.appendChild(divElement)
// let clickCount = 0
// divElement.addEventListener('click',function(e){
//     e.preventDefault()
//     clickCount++
//     if(clickCount%4==1){
//         divElement.style.left = "calc(100% - 200px)";
//     } else if(clickCount%4==2){
//         divElement.style.top = "calc(100% - 200px)";
//     } else if(clickCount%4 == 3){
//         divElement.style.left = "0%";
//     }else{
//         divElement.style.top = "0%";
//     }
// })




// --------------------------------------------------------------------------------------------------------



// // 6) 5 ci task hell edildiyi teqdirde eyni fayllar uzerinden davam edin ve klaviaturada 
// // kursor ashagi yuxari sag sol duymelerine basdiqda div-i hereket etdirmeye calishin. 
// // Hem 5 ci tapshiriqdaki hem de bu tapshiriq ishlek veziyyetde olmalidir.

// const root = document.getElementById("root")

// let divElement = document.createElement("div")

// divElement.style.cssText = `
//     background:royalblue;
//     width:200px;
//     height:200px;
//     transition:all 2s;
//     position:fixed;
//     top:0;
//     left:0;
//     cursor:pointer;
// `

// root.appendChild(divElement)
// let clickCount = 0
// divElement.addEventListener('click',function(e){
//     e.preventDefault()
//     clickCount++
//     move(clickCount)
// })

// window.onkeydown = function(e){
//     if(e.key == "ArrowRight"){
//         clickCount = 1
//     } else if(e.key == "ArrowDown"){
//         clickCount = 2
//     } else if(e.key == "ArrowLeft"){
//         clickCount = 3
//     } else if(e.key == "ArrowUp"){
//         clickCount = 4
//     }
//     move(clickCount)
// }


// function move(clickCount){
//     if(clickCount%4==1){
//         divElement.style.left = "calc(100% - 200px)";
//     } else if(clickCount%4==2){
//         divElement.style.top = "calc(100% - 200px)";
//     } else if(clickCount%4 == 3){
//         divElement.style.left = "0%";
//     }else{
//         divElement.style.top = "0%";
//     }
// }





// --------------------------------------------------------------------------------------------------------




// // 7) 5 ve 6 ci tasklar ugurla hell edilerse budefe hemin box-un yerini yadda saxlayin. 
// // Sehifeni yenilesem bele axirinci hansi veziyyetde qalmishdisa o veziyyetde gorunsun
// // Ipucu localstorage ve ya session storage istifade edin. 
// const root = document.getElementById("root")

// let divElement = document.createElement("div")

// divElement.style.cssText = `
//     background:royalblue;
//     width:200px;
//     height:200px;
//     transition:all 2s;
//     position:fixed;
//     top:0;
//     left:0;
//     cursor:pointer;
// `

// root.appendChild(divElement)

// if(localStorage.getItem('clickcount')){
//     move(parseInt(localStorage.getItem('clickcount')))
// }

// let clickCount = parseInt(localStorage.getItem('clickcount'))
// divElement.addEventListener('click',function(e){
//     e.preventDefault()
//     clickCount++
//     move(clickCount)
// })

// window.onkeydown = function(e){
//     if(e.key == "ArrowRight"){
//         clickCount = 1 // sag yuxari kunc
//     } else if(e.key == "ArrowDown"){
//         clickCount = 2 // sag asagi kunc
//     } else if(e.key == "ArrowLeft"){
//         clickCount = 3 // sol asagi kunc
//     } else if(e.key == "ArrowUp"){
//         clickCount = 4 //  sol yuxari kunc
//     }
//     move(clickCount)
// }


// function move(clickCount){
//     if(clickCount%4==1){
//         divElement.style.top = "0%";
//         divElement.style.left = "calc(100% - 200px)";
//     } else if(clickCount%4==2){
//         divElement.style.left = "calc(100% - 200px)";
//         divElement.style.top = "calc(100% - 200px)";
//     } else if(clickCount%4 == 3){
//         divElement.style.top = "calc(100% - 200px)";
//         divElement.style.left = "0%";
//     }else{
//         divElement.style.top = "0%";
//         divElement.style.left = "0%";

//     }
//     localStorage.setItem("clickcount",clickCount)
// }




// --------------------------------------------------------------------------------------------------------




// // 8) Chrome dinozavr oyununu gormush olarsiz Space basdiqca Dinozavr tullanib dushur. 
// // oradaki kimi oyun yazmaginizi yox sadece istediyiniz bir heyvanin png sheklini ekranda cixarib 'Space' duymesini basdiqda 200px tullanib sora yerine qayitmagini yazin. :D Maragli olacaq

// let imageElement = document.createElement("img")
// imageElement.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/af85a464-b058-42d9-bcb4-eb2d4799af7b/dd9i02r-a360c4a4-5c06-4b08-a277-24e283819b8a.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FmODVhNDY0LWIwNTgtNDJkOS1iY2I0LWViMmQ0Nzk5YWY3YlwvZGQ5aTAyci1hMzYwYzRhNC01YzA2LTRiMDgtYTI3Ny0yNGUyODM4MTliOGEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XKrl7JEOmf_alXcMl3Wty47-Ar3P3mMLJGUrDWVUkp4"

// const root = document.getElementById("root")
// root.style.cssText = `
//     border-bottom:1px dotted #000;
//     width:100vw;
//     height:300px;
//     display:flex;
//     justify-content:flex-start;
//     align-items:flex-end;
//     padding-bottom:30px;
// `
// imageElement.style.cssText = `
//     width:100px;
//     height:120px;
//     object-fit:contain;
// `

// root.appendChild(imageElement)
// let x = 0
// document.body.addEventListener("keydown",function(e){
//     e.preventDefault()
//     if(e.key == "ArrowRight"){
//         x+=20
//         imageElement.src = "https://media.tenor.com/kpSl5LNHupMAAAAC/sonic-running-sonic.gif"
//         imageElement.style.transform = `translateX(${x}px) scaleX(1)`
        
//     }else if(e.key == "ArrowLeft"){

//         if(x!=0){
//             x-=20
//         }
//         imageElement.src = "https://media.tenor.com/kpSl5LNHupMAAAAC/sonic-running-sonic.gif"
//         imageElement.style.transform = `translateX(${x}px) scaleX(-1)`
//     } else if(e.which==32){
//         imageElement.src = "https://i.pinimg.com/originals/82/81/4e/82814e4a976d84271a133821984bdc87.png"
//         imageElement.style.transition = "all .3s"
//         imageElement.style.transform = `translate(${x}px,-30px)`;
//         setTimeout(() => {
//             imageElement.style.transition = "0s"
//             imageElement.style.transform = `translate(${x}px,0px)`;
//             imageElement.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/af85a464-b058-42d9-bcb4-eb2d4799af7b/dd9i02r-a360c4a4-5c06-4b08-a277-24e283819b8a.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FmODVhNDY0LWIwNTgtNDJkOS1iY2I0LWViMmQ0Nzk5YWY3YlwvZGQ5aTAyci1hMzYwYzRhNC01YzA2LTRiMDgtYTI3Ny0yNGUyODM4MTliOGEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XKrl7JEOmf_alXcMl3Wty47-Ar3P3mMLJGUrDWVUkp4"
//         }, 1000);
//     }
    
// })

// document.body.addEventListener("keyup",function(e){
//     if(e.which!=32){
//         imageElement.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/af85a464-b058-42d9-bcb4-eb2d4799af7b/dd9i02r-a360c4a4-5c06-4b08-a277-24e283819b8a.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FmODVhNDY0LWIwNTgtNDJkOS1iY2I0LWViMmQ0Nzk5YWY3YlwvZGQ5aTAyci1hMzYwYzRhNC01YzA2LTRiMDgtYTI3Ny0yNGUyODM4MTliOGEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XKrl7JEOmf_alXcMl3Wty47-Ar3P3mMLJGUrDWVUkp4"
//     }
// })




// --------------------------------------------------------------------------------------------------------




// // 9) Random reng generate eden functionu internetden tapib ekrana her clickde body-e 
// // yeni generate edilmish ve yeni reng-le renglenmish 100px - kvadrat box elave edin. 

// const root = document.getElementById("root")

// let divElement = document.createElement("div")
// divElement.style.cssText = `
//     width:100px;
//     height:100px;
//     background:royalblue;
// `;


// root.appendChild(divElement)

// document.body.onclick = function (e) {

//     let rand1 = Math.floor(Math.random() * 255)
//     let rand2 = Math.floor(Math.random() * 255)
//     let rand3 = Math.floor(Math.random() * 255)

//     let color = `rgb(${rand1},${rand2},${rand3})`

//     e.preventDefault()
//     divElement.style.background = color
// }




// --------------------------------------------------------------------------------------------------------




// // 10) Input (Type number) ve box (div 10px kvadrat) elave edin. 
// // Inputun icerisine reqem yazdiginiz qeder olculer boyusun ve ya kicilsin.
// // Meselen 10px dir inputa 100yazdim olcusu 110px kvadrat olsun 

// let inputElement = document.createElement("input")
// inputElement.setAttribute("type","number")
// inputElement.style.cssText = `
//     margin-bottom:30px;
//     outline:none;
//     border:none;
//     background:#1e1e1e;
//     border:1px solid #000;
//     color:#fff;
// `


// let divElement = document.createElement("div")
// let size = 10
// divElement.style.cssText = `
//     width:${size}px;
//     height:${size}px;
//     background:rgb(10,113,254);
//     display:flex;
//     justify-content:center;
//     align-items:center;
// `


// const root = document.getElementById("root")
// root.appendChild(inputElement)
// root.appendChild(divElement)

// inputElement.onchange = function(e){
//     e.preventDefault()
    
//     divElement.style.width = parseInt(e.target.value) + size + "px"
//     divElement.style.height = parseInt(e.target.value) + size + "px"
//     divElement.innerText = parseInt(e.target.value) + size + "px"
//     size = parseInt(e.target.value) + size
//     e.target.value = ""
// }



// --------------------------------------------------------------------------------------------------------
