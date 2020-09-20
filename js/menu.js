'use strict';

const handleMobileOverviewSection = () => {
    let doc = document.getElementById('overview');
    const { y } = doc.getBoundingClientRect();
    console.log(y)
    let li = document.getElementById('overview-m-nav');
    if (y <= 100 && y >= - (doc.offsetHeight - 100)) {
        li.classList.add('active-m-menu');
    } else {
        li.classList.remove('active-m-menu');
    }
}

const handleMobileScheduleSection = () => {
    let doc = document.getElementById('schedule');
    const { y } = doc.getBoundingClientRect();
    console.log(y)
    let li = document.getElementById('schedule-m-nav');
    if (y <= 100 && y >= - (doc.offsetHeight - 100)) {
        li.classList.add('active-m-menu');
    } else {
        li.classList.remove('active-m-menu');
    }
}

const handleMobileSpeakersSection = () => {
    let doc = document.getElementById('speakers');
    const { y } = doc.getBoundingClientRect();
    console.log(y)
    let li = document.getElementById('speakers-m-nav');
    if (y <= 100 && y >= - (doc.offsetHeight - 100)) {
        li.classList.add('active-m-menu');
    } else {
        li.classList.remove('active-m-menu');
    }
}

const handleMobileTicketsSection = () => {
    let doc = document.getElementById('tickets');
    const { y } = doc.getBoundingClientRect();
    console.log(y)
    let li = document.getElementById('tickets-m-nav');
    if (y <= 100 && y >= - (doc.offsetHeight - 100)) {
        li.classList.add('active-m-menu');
    } else {
        li.classList.remove('active-m-menu');
    }
}

const handleMobileVenuSection = () => {
    let doc = document.getElementById('venu');
    const { y } = doc.getBoundingClientRect();
    console.log(y)
    let li = document.getElementById('venu-m-nav');
    if (y <= 100 && y >= - (doc.offsetHeight - 100)) {
        li.classList.add('active-m-menu');
    } else {
        li.classList.remove('active-m-menu');
    }
}

const handleMobileTeamSection = () => {
    let doc = document.getElementById('team');
    const { y } = doc.getBoundingClientRect();
    console.log(y)
    let li = document.getElementById('team-m-nav');
    if (y <= 100 && y >= - (doc.offsetHeight - 100)) {
        li.classList.add('active-m-menu');
    } else {
        li.classList.remove('active-m-menu');
    }
}

const initMobile = () => {
    handleMobileOverviewSection();
    handleMobileScheduleSection();
    handleMobileSpeakersSection();
    handleMobileTicketsSection();
    handleMobileVenuSection();
    handleMobileTeamSection();
    document.addEventListener('scroll', handleMobileOverviewSection);
    document.addEventListener('scroll', handleMobileScheduleSection);
    document.addEventListener('scroll', handleMobileSpeakersSection);
    document.addEventListener('scroll', handleMobileTicketsSection);
    document.addEventListener('scroll', handleMobileVenuSection);
    document.addEventListener('scroll', handleMobileTeamSection);
}
const handleDesktopNavbar = (event) => {
    let navLogo = document.getElementById('nav-logo');
    let navContainer = document.getElementById('nav-container-main');
    if (window.scrollY > 0) {
        document.getElementsByTagName('nav')[0].style.backgroundColor = "#0E1125";
    } else {
        document.getElementsByTagName('nav')[0].style.backgroundColor = "transparent";
    }
    if (window.scrollY >= 233) {
        navLogo.style.display = "flex";
        navContainer.style.paddingRight = "0rem";
        navContainer.style.fontSize = "16px";
    } else {
        navLogo.style.display = "none";
        navContainer.style.paddingRight = "0rem";
        navContainer.style.fontSize = "20px";
    }
}

const handleDesktopOverviewSection = () => {
    let doc = document.getElementById('overview');
    const { y } = doc.getBoundingClientRect();
    let li = document.getElementById('overview-nav');
    if (y <= 100 && y >= - (doc.offsetHeight - 100)) {
        li.classList.add('active');
    } else {
        li.classList.remove('active');
    }
}

const handleDesktopScheduleSection = () => {
    let doc = document.getElementById('schedule');
    const { y } = doc.getBoundingClientRect();
    let li = document.getElementById('schedule-nav');
    if (y <= 100 && y >= - (doc.offsetHeight - 100)) {
        li.classList.add('active');
    } else {
        li.classList.remove('active');
    }
}

const handleDesktopSpeakersSection = () => {
    let doc = document.getElementById('speakers');
    const { y } = doc.getBoundingClientRect();
    let li = document.getElementById('speakers-nav');
    if (y <= 100 && y >= - (doc.offsetHeight - 100)) {
        li.classList.add('active');
    } else {
        li.classList.remove('active');
    }
}

const handleDesktopTicketsSection = () => {
    let doc = document.getElementById('tickets');
    const { y } = doc.getBoundingClientRect();
    let li = document.getElementById('tickets-nav');
    if (y <= 100 && y >= - (doc.offsetHeight - 100)) {
        li.classList.add('active');
    } else {
        li.classList.remove('active');
    }
}

const handleDesktopVenuSection = () => {
    let doc = document.getElementById('venu');
    const { y } = doc.getBoundingClientRect();
    let li = document.getElementById('venu-nav');
    if (y <= 100 && y >= - (doc.offsetHeight - 100)) {
        li.classList.add('active');
    } else {
        li.classList.remove('active');
    }
}

const handleDesktopTeamSection = () => {
    let doc = document.getElementById('team');
    const { y } = doc.getBoundingClientRect();
    let li = document.getElementById('team-nav');
    if (y <= 100 && y >= - (doc.offsetHeight - 100)) {
        li.classList.add('active');
    } else {
        li.classList.remove('active');
    }
}

const initDesktop = () => {
    handleDesktopNavbar();
    handleDesktopOverviewSection();
    handleDesktopScheduleSection();
    handleDesktopSpeakersSection();
    handleDesktopTicketsSection();
    handleDesktopVenuSection();
    handleDesktopTeamSection();
    document.addEventListener('scroll', handleDesktopNavbar);
    document.addEventListener('scroll', handleDesktopOverviewSection);
    document.addEventListener('scroll', handleDesktopScheduleSection);
    document.addEventListener('scroll', handleDesktopSpeakersSection);
    document.addEventListener('scroll', handleDesktopTicketsSection);
    document.addEventListener('scroll', handleDesktopVenuSection);
    document.addEventListener('scroll', handleDesktopTeamSection);
}

const navSwitcher = (x) => {
    if (x.matches) {
        initMobile();
    } else {
        initDesktop();
    }
}

const x = window.matchMedia("(max-width: 768px)");
x.addListener(navSwitcher);
navSwitcher(x);