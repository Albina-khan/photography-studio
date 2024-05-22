const slides = document.querySelectorAll(".slide")
const slidesArray = Array.from(slides)

const getData=(e)=>{
   const framerLink = e.target.getAttribute('data-attr');
   localStorage.setItem("Value", framerLink);
   window.location.href="contact.html";
}
const setDataValue=()=>{
   try {const frameSrcLink = localStorage.getItem("Value")
    const framer = document.querySelector('.framer');
    framer.setAttribute('src',frameSrcLink)
   localStorage.clear();   
   }
    catch{}
}

slidesArray.map(item => item.addEventListener('click', getData))
setDataValue();


const observer = new IntersectionObserver(entry=>{
  entry.map(item=>console.log(item.target.classList.toggle('show', item.isIntersecting === true)))
})

const hiddenItems = document.querySelectorAll('.hidden')
Array.from(hiddenItems).map(el=>{observer.observe(el)})