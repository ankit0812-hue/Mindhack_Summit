let swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const checkZero = (num) => {
    if (num <= 0) {
        return "00";
    } else if (num < 10) {
        return "0" + num;
    }
    return num;
}

const getTime = () => {
    const today = new Date();
    const eventStartDate = new Date('10/10/2020');
    let difference = Math.abs(eventStartDate - today) / 1000;

    const  days = checkZero(Math.floor(difference / 86400));
    difference -= days * 86400;

    const hours = checkZero(Math.floor(difference / 3600) % 24);
    difference -= hours * 3600;

    const minutes = checkZero(Math.floor(difference / 60) % 60);
    difference -= minutes * 60;

    const seconds = checkZero(Math.floor(difference % 60));

    return { days, hours, minutes, seconds }
}

const setTimer = () => {
    const daysDom = document.getElementById('day');
    const hrsDom = document.getElementById('hrs');
    const minDom = document.getElementById('mins');
    const secDom = document.getElementById('secs');

    const { days, hours, minutes, seconds } = getTime();
    
    daysDom.innerHTML = days;
    hrsDom.innerHTML = hours;
    minDom.innerHTML = minutes;
    secDom.innerHTML = seconds;
}

setTimer();
setInterval(() => {
    setTimer();
}, 1000);

if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./serviceworker.js')
            .then((reg) => console.log('Success: ', reg.scope))
            .catch((err) => console.log('Failure: ', err));
    })
}