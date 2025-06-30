import { clock, timer } from './first-Module.js';

document.addEventListener('DOMContentLoaded', () => {
    const time = document.getElementById('clock');
    const hinichi = document.getElementById('hi');
    const y = document.getElementById('y');
    const body = document.querySelector('body');
    const html = document.querySelector('html');
    timer(() => {
    const a = clock();
    time.textContent = a[1];
    hinichi.textContent = a[0];
    }, 1000);
});