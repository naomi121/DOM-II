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


const footColor = document.querySelector('footer');

console.log(footColor);
footColor.addEventListener('dblclick', (event) => {
    console.log(footColor);
    console.log(event);
    event.target.style.backgroundColor = 'green';

});





window.addEventListener("resize", () => {
    let header = document.querySelector('.main-navigation');
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    header.style.background = `#${randomColor}`;

});

window.addEventListener('scroll', function(e) {
    const random = e.timeStamp % 256 * Math.random();
    document.body.style.background = `rgba(${random},${random},${random},0.3`;
    console.log(e.timeStamp % 256 * Math.random())
  })

  const funLogo = document.querySelector('.intro img');

funLogo.addEventListener('click', function(e) {
  event.stopPropagation();
  console.log('bus click');

})
