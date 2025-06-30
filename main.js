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
    document.querySelectorAll('*').forEach(el => {
        Object.assign(el.style, {
          margin: '0',
          padding: '0',
          boxSizing: 'border-box'
        });
      });
      
    Object.assign(html.style, {
        height: '100%',
        margin: '0',
        padding: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    })

    Object.assign(body.style, {
        height: '100%',
        margin: '0',
        padding: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center' 
    })

    Object.assign(y.style, {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px'
    })

    Object.assign(time.style, {
        fontSize: '50px',
        textAlign: 'center',
        display: 'block',
        width: 'max-content',
        paddingLeft: '65px'
    })

    Object.assign(hinichi.style, {
        fontSize: '50px',
        textAlign: 'center',
        display: 'block',
        width: 'max-content'
    })
});