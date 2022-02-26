const colors = ["green", "red", "#00ffff", "rgb(190,50,190)"];
const btn = document.getElementById("js_button");
const colorName= document.querySelector(".colorName");

btn.addEventListener("click" , function() {
  const ran = Math.floor(Math.random() * colors.length);
  console.log(ran);
  document.body.style.backgroundColor = colors[ran];
   colorName.textContent = colors[ran];
});
