// console.log("salut");
// alert('salut')

// const openMenu =()=> {
// const  menu =document.querySelector(".menu")
// // menu.classList.toggle('acti')
// menu.style.display-"flex"
// }


const burge = document.querySelector('.btn')
        const burgeIcon = document.querySelector('.burger i')
        const links = document.querySelector('.menu')

        burge.onclick = function(){
            links.classList.toggle('open')

            if (links.classList.contains('open')){
                document.querySelector('.material-icons').innerHTML='close'
            }
            else{
                document.querySelector('.material-icons').innerHTML='menu'
            }
        }