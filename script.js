const timerEl = document.getElementById('timer');
const startEl = document.getElementById('start');
const stopEl = document.getElementById('stop');
const resetEl = document.getElementById('reset');


let startTime = 0;
let elapsedTime = 0;
let timeInterval;

startEl.addEventListener('click', startTimer = () =>{
    startTime = Date.now()-elapsedTime;
    timeInterval = setInterval(()=>{
        elapsedTime = Date.now() - startTime
        timerEl.textContent = formatTime(elapsedTime);
    },10)
    startEl.disabled = true;
    stopEl.disabled = false;
});

function formatTime(elapsedTime){
    const milli = Math.floor((elapsedTime % 1000)/10);
    const sec = Math.floor((elapsedTime % (1000 *60))/1000)
    const min = Math.floor((elapsedTime % (1000 *60*60))/(1000*60))
    const hr = Math.floor((elapsedTime)/(1000*60*60))

    return(
        (hr ? (hr>9 ?hr : '0' + hr):'00') +":"+
        (min ? (min>9 ?min : '0' + min):'00') +":"+
        (sec ? (sec>9 ?sec : '0' + sec):'00') +":"+
        (milli >9 ? milli : '0' + milli)
    ) 
}



stopEl.addEventListener('click', stopTimer = () =>{
    clearInterval(timeInterval)
    startEl.disabled = false;
    stopEl.disabled = true;
});



resetEl.addEventListener('click', resetTimer = () =>{
    clearInterval(timeInterval)

    elapsedTime = 0;
    timerEl.textContent = '00:00:00'

    startEl.disabled = false;
    stopEl.disabled = true;
});

