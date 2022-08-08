const counters = document.querySelectorAll(".increment__title");
const speed = 200;

counters.forEach((counter) => {
  const animate = () => {
    const value = +counter.getAttribute("akhi");
    const data = +counter.innerText;
    const time = value / speed;
    if (data < value) {
      counter.innerText = Math.ceil(data + time);
      setTimeout(animate, 1);
    }
    if(data > value){
        counter.innerText = value;
    }
  };

  animate();
});

//script scrollTop 

window.addEventListener("scroll", ()=> {
  const scroll = document.querySelector(".scrollTop")
  scroll.classList.toggle("active", window.scrollY > 250)
})
const backScrollTop = ()=> {
  window.scrollTo({
    top: 0, 
    behavior: 'smooth',
  })
}