const digits = document.querySelector('digits')

const tens = document.querySelector('#secondTens');
tens.innerHTML = '0';

const ones = document.querySelector('#secondOnes');
ones.innerHTML = '0';

const dotHuns = document.querySelector('#msHundreds');
dotHuns.innerHTML = '0';

const dotTens = document.querySelector('#msTens');
dotTens.innerHTML = '0';

function timer() {
    let ms = 0;
    const timeCount = window.setInterval(() => {
        ms += 10;
        if (ms === 10000) {
            stopCount(timeCount);
        }
        updateCount(ms);
    }, 10)

    function increment(string) {
        let number = Number(string) + 1;
        return number.toString();
    }

    function endTimer (intervalId) {
            clearInterval(intervalId);
            Array.from(digits.children).forEach(digit => {
              digit.classList.add("redDigit");
            })
    }

    function stopCount() {
        tens.innerHTML = '0';
        ones.innerHTML = '0';
        dotHuns.innerHTML = '0';
        dotTens.innerHTML = '0';
    }

    function updateCount(ms) {
        if (ms === 10000) {
            tens.innerHTML = '1';
            ones.innerHTML = '0';
            dotHuns.innerHTML = '0';
            dotTens.innerHTML = '0';
        }
        else if (ms === 1000) {
            ones.innerHtml = '1';
            dotHuns.innerHTML = '0';
            dotTens.innerHTML = '0';
        }
        else if (ms === 100) {
            dotHuns.innerHTML = '1';
            dotTens.innerHTML = '0';
        }
        else {
            dotTens.innerHTML = '1';
        }
    }
};

timer();