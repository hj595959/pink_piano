let taget = document.querySelector("#dynamic");


function randomString(){
    let stringArr = ["가 상 \n 피 아 노", "마 우 스 로 \n 연 주 해 보 세 요 😺", "v i r t u a l\np i a n o", "마 우 스 로 \n 클 릭 해  보 세 요 ! 😸", "도 🎵 부 터 \n 시 🎵 까 지 연 주 할 \n 수 \n 있 어 요 👍 "];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)]
    let selectStringArr = selectString.split(" ");

return selectStringArr;
}

function resetTyping(){
    taget.textContent = "";
    dynamic(randomString());
}

function dynamic(randomArr){

    if(randomArr.length > 0){
        taget.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        },80)
    }else{
        setTimeout(resetTyping, 6000);
    }
}

dynamic(randomString());

function blink(){
    taget.classList.toggle("active");
}
setInterval(blink, 500);

const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();

//피아노 음계
const notes = {
    C: 261.63,
    'C#': 277.18,
    D: 293.66,
    'D#': 311.13,
    E: 329.63,
    F: 349.23,
    'F#': 369.99,
    G: 392.00,
    'G#': 415.30,
    A: 440.00,
    'A#': 466.16,
    B: 493.88,
};

function playNoteByFrequency(frequency) {
    const oscillator = audioContext.createOscillator();
    oscillator.frequency.value = frequency;

    oscillator.connect(audioContext.destination);

    oscillator.start();

    setTimeout(() => {
        oscillator.stop();
    }, 150);
}

const pianoKeys = document.querySelectorAll('.key');
pianoKeys.forEach(key => {
    key.addEventListener('click', () => {
        const note = key.dataset.note;
        const frequency = notes[note];
        playNoteByFrequency(frequency);
        
    
    });
});
