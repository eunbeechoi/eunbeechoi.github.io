const today = document.querySelector("#date");

function getDate () {
    const now = new Date();

    const year = String(now.getFullYear());
    const month = String(now.getMonth()+1);
    const date = String(now.getDate());

    today.innerText = `${year}년 ${month}월 ${date}일`;

}

getDate();