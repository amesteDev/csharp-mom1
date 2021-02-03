let showTime = () => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDay();
    let jsout = document.getElementById('jsout');
    let time = addZero(h) + ":" + addZero(m) + ":" + addZero(s);
    jsout.innerText = " " + addZero(day) + '/' + addZero(month) + '/' + year + " | " + time;
    setTimeout(showTime, 1000);
}

let addZero = (input) => {
    return input = (input < 10) ? "0" + input : input;
}

showTime();