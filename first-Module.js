//first-Module.js
function clock() {
    let now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const day = now.getDay(); 
    const week = ["日", "月", "火", "水", "木", "金", "土"];
    const weekdays = week[day]; 
    const hizuke = `${year}/${month}/${date} (${weekdays})`;
    const jikann = now.toLocaleTimeString();
    return [hizuke, jikann];
}

function timer(callback, interval) {
    setInterval(callback, interval);
}


export { clock, timer };