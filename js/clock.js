// html의 h2를 받아와서 그 내부에 text를 입력하면 됨. 

const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    //date.getHours()에는 padStart()를 쓸 수 없다. getHours()는 number이기 때문 
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");


    clock.innerText = `${hours}:${minutes}:${seconds}`;
}



//website가 load 되자마자 getClock()을 실행하고 또 매초마다 다시 실행되도록
getClock();  // 이게 없으면 1초 뒤에 시간이 나옴. 우리는 웹사이트 들어가자 마자 시간이 나오게 하고 싶음. 즉시 호출!
setInterval(getClock, 1000);
