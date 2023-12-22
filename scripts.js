const halloweenDate = new Date('October 31, 2023 00:00:00').getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = halloweenDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById('countdown').innerText = `${days} días hasta Halloween`;
};