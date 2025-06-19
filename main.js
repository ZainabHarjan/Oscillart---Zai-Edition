const input = document.getElementById('input');

//creating web api elements
const audioCtx = new AudioContext();
const gainNode = audioCtx.createGain();

//create Ocsillator mode
const oscillator = audioCtx.createOscillator();
oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);
oscillator.type = "sine";

function frequency(pitch){

}

function handle(){
    frequency(input.value);
}