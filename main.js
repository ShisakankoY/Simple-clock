import { clock, timer } from './first-Module.js';

document.addEventListener('DOMContentLoaded', () => {
    const time = document.getElementById('clock');
    const hinichi = document.getElementById('hi');
    timer(() => {
    const a = clock();
    time.textContent = a[1];
    hinichi.textContent = a[0];
    }, 1000);
});