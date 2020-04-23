const setOfWords =  [ "The best answer to anger is silence - Marcus Aurelius ","Things that were hard to bear are sweet to remember - Seneca ","Your soul takes on the color of your thoughts - Marcus Aurelius", "If something is possible for humans believe that it is possible also for you - Marcus Aurelius"];

const msg = document.getElementById('msg');
const typeWords = document.getElementById('mywords');
const btn = document.getElementById('btn');

// start to count time

let startTime, endTime;

const playGame = () => {
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    msg.innerHTML = setOfWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerHTML = "Done";
}

const endPlay = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime)/1000);


let totalStr = typeWords.value;
let wordCount = wordCounter(totalStr);

let speed = Math.round((wordCount / totalTime) * 60);

let finalMsg = " You typed " + speed + " wpm";

finalMsg += compareWords(msg.innerHTML, totalStr);
msg.innerHTML = finalMsg;
}

const compareWords = (str1, str2) => {
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;
    //
    words1.forEach(function(item, index) {
        if(item == words2[index]) {
            cnt++;
        }
        })
        let errorWords = ( words1.length - cnt);
        return (" " + cnt + " correct out of " + words1.length + " and you misspelled " + errorWords + "." );
}


const wordCounter = (str) => {
   let response = str.split(" ").length;
   return response;
}

btn.addEventListener('click', function() {
    if(this.innerHTML == 'Start') {
        typeWords.disabled = false;
        playGame();
    } else if(this.innerHTML == "Done") {
        typeWords.disabled = true;
        btn.innerHTML ="Start";
        endPlay();
    }
});