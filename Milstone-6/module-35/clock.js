function startButton() {
    const startBtn = document.getElementById('input-field');
    const startBtnText = startBtn.innerText;
    let num = 0;
    const intervalId = setInterval(() => {
        console.log(++num);
        if (num === 60) {
            clearInterval(intervalId)
        }
    }, 1000);
    startBtn.innerText = setInterval()
}