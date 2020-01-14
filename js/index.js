// Your code goes here



//mouseenter
const busImage = document.querySelector("img")
console.log(busImage)

busImage.addEventListener("mouseenter", () => {
  busImage.style.transform = "scale(1.2)";
  busImage.style.transition = "transform 0.3s"
});
busImage.addEventListener("mouseleave", () => {
    busImage.style.transform = "scale(1)"
  });

   //double click
//const card = document.querySelector('.img-content');

//card.addEventListener('dblclick', function (e) {
  //card.classList.toggle('large');
//});

const btn = document.querySelector('.btn');

btn.addEventListener('click', event => {
  btn.innerHTML = `Click count: ${event.detail}`;
});
