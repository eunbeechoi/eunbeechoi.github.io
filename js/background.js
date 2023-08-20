const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img"); //js에서 html element 추가 

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); // 생성한 bgImage를 body에 append 시킨다!

bgImage.classList.add("background-image");