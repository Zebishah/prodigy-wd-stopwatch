window.onload = function () {
    let seconds = 0o0;
    let tens = 0o0;
    let mints = 0o0;
    let appendTens = document.getElementById("tens")
    let appendMints = document.getElementById("mints")
    let appendSeconds = document.getElementById("seconds")
    let buttonStart = document.getElementById('button-start');
    let buttonStop = document.getElementById('button-stop');
    let buttonReset = document.getElementById('button-reset');
    let ten = document.getElementsByClassName("tens")[0];
    let min = document.getElementsByClassName("mints")[0];
    let sec = document.getElementsByClassName("secs")[0];
    let Interval;
    buttonStart.onclick = () => {
        clearInterval(Interval);
        Interval = setInterval(starttimer, 10);

    }

    buttonReset.onclick = () => {
        clearInterval(Interval);
        mints = 0;
        seconds = 0;
        tens = 0;
        appendMints.innerHTML = "0" + mints;
        appendSeconds.innerHTML = "0" + seconds;
        appendTens.innerHTML = "0" + tens;
    }

    function starttimer() {
        tens++;
        if (tens < 10) {
            appendTens.innerHTML = '0' + tens;
        }
        else if (tens > 9 && tens < 99) {
            appendTens.innerHTML = tens;
        }
        else if (tens > 99) {
            tens = 0o0;
            seconds++;

            appendTens.innerHTML = tens;

        }
        if (seconds < 10) {
            appendSeconds.innerHTML = "0" + seconds;
        }
        else if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
        else if (seconds > 60) {
            seconds = 0;
            appendSeconds.innerHTML = "0" + seconds;
        }

        if (seconds == 60) {
            seconds = 0;
            appendSeconds.innerHTML = "0" + seconds;
            mints++;
            if (mints < 10) {
                appendMints.innerHTML = "0" + mints;
            }
            else if (mints > 9) {
                appendMints.innerHTML = mints;
            }


        }

    }
    buttonStop.onclick = () => {

        if (seconds < 10)
            ten.innerHTML = "0" + seconds + ":";
        else
            ten.innerHTML = seconds + ":";
        if (mints < 10)
            min.innerHTML = "0" + mints + ":";
        else
            min.innerHTML = mints + ":";
        if (tens < 10)
            sec.innerHTML = "0" + tens;
        else
            sec.innerHTML = tens;
        clearInterval(Interval);




    }

}