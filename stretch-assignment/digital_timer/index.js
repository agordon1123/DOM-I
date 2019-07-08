const digits = document.querySelector('digits')

const tens = document.querySelector('#secondTens');
tens.innerHTML = '0';

const ones = document.querySelector('#secondOnes');
ones.innerHTML = '0';

const dotHuns = document.querySelector('#msHundreds');
dotHuns.innerHTML = '0';

const msTens = document.querySelector('#msTens');
msTens.innerHTML = '0';

function timer() {
    let ms = 0;
    const timeCount = window.setInterval(() => {
        ms += 10;
        if(ms === 10000) {

        }
    }
}