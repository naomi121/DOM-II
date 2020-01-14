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

  