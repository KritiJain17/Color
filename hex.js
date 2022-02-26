const colors = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById("js_button");
const colorName= document.querySelector(".colorName");

btn.addEventListener("click" , function() {
  let hex="#";
  for(let i=0;i<6;i++){
    hex += colors[Math.floor(Math.random() * 16)];
  }
  document.body.style.backgroundColor = hex;
   colorName.textContent = hex;
});
