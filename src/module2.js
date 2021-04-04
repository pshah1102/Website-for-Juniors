const synth = window.speechSynthesis;
const voiceSelect = document.getElementById('voice-select');
$('#voice-select').hide();
let voices = [];

  const getVoices = () => {
    voices = synth.getVoices();
  
    voices.forEach(voice => {
      console.log('in voices');
      const option = document.createElement('option');
      option.textContent = voice.name + '(' + voice.lang + ')';
      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      voiceSelect.appendChild(option);
    });
  };

  getVoices();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = getVoices;
  }

const speak = (alpha) => {
  if (voiceSelect.value !== '') {
    // Get speak text
    const speakText = new SpeechSynthesisUtterance(alpha);

    // Speak error
    speakText.onerror = e => {
      console.error('Something went wrong');
    };

    // Selected voice
    const selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name');

    // Loop through voices
    voices.forEach(voice => {
      if (voice.name === selectedVoice) {
        speakText.voice = voice;
      }
    });

    // Set pitch and rate
    speakText.rate = 1;
    speakText.pitch = 1;
    // Speak
    synth.speak(speakText);
  }
};

var listenButton = document.getElementsByClassName('speakButton');
var alphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var boolAlpha = [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true];
var cnt=1;
var ans;

$('.speakButton').click(function (){
    while(cnt<26){
        ans = Math.floor(Math.random() * 25);
        console.log(ans);
        if(boolAlpha[ans] == true){
            console.log("---");
            console.log(alphabets[ans]);
            speak(alphabets[ans]);
            boolAlpha[ans]=false;
            cnt++;
            break;
        }else{
            continue;
        }
        
    }
});


 $('.a').click(function (){
    
    if(ans == 0){
        //$('.a').css("backgroundColor","");
        $('.a').css("backgroundColor","green");
        setTimeout(function (){$('.a').css("backgroundColor","#f67c92");},3000);
        console.log('True');
    }else{
        $('.a').css("backgroundColor","red");
        setTimeout(function (){$('.a').css("backgroundColor","#f67c92");},3000);
        console.log('False');
    }
});

$('.b').click(function (){
    if(ans == 1){
        $('.b').css("backgroundColor","green");
        setTimeout(function (){$('.b').css("backgroundColor","#f67c92");},3000);
        console.log('True');
    }else{
        $('.b').css("backgroundColor","red");
        setTimeout(function (){$('.b').css("backgroundColor","#f67c92");},3000);
        console.log('False');
    }
});
$('.c').click(function (){
    if(ans == 2){
        $('.c').css("backgroundColor","green");
        setTimeout(function (){$('.c').css("backgroundColor","#f67c92");},3000);
        console.log('True');
    }else{
        $('.c').css("backgroundColor","red");
        setTimeout(function (){$('.c').css("backgroundColor","#f67c92");},3000);
        console.log('False');
    }
});
$('.d').click(function (){
    if(ans == 3){
        $('.d').css("backgroundColor","green");
        setTimeout(function (){$('.d').css("backgroundColor","#f67c92");},3000);
        console.log('True');
    }else{
        $('.d').css("backgroundColor","red");
        setTimeout(function (){$('.d').css("backgroundColor","#f67c92");},3000);
        console.log('False');
    }
});
$('.e').click(function (){
    if(ans == 4){
        $('.e').css("backgroundColor","green");
        setTimeout(function (){$('.e').css("backgroundColor","#f67c92");},3000);
        console.log('True');
    }else{
        $('.e').css("backgroundColor","red");
        setTimeout(function (){$('.e').css("backgroundColor","#f67c92");},3000);
        console.log('False');
    }
});
$('.f').click(function (){
    if(ans == 5){
        $('.f').css("backgroundColor","green");
        setTimeout(function (){$('.f').css("backgroundColor","#f67c92");},3000);
        console.log('True');
    }else{
        $('.f').css("backgroundColor","red");
        setTimeout(function (){$('.f').css("backgroundColor","#f67c92");},3000);
        console.log('False');
    }
});
$('.g').click(function (){
    if(ans == 6){
        $('.g').css("backgroundColor","green");
        setTimeout(function (){$('.g').css("backgroundColor","#f67c92");},3000);
        console.log('True');
    }else{
        $('.g').css("backgroundColor","red");
        setTimeout(function (){$('.g').css("backgroundColor","#f67c92");},3000);
        console.log('False');
    }
});
$('.h').click(function (){
    if(ans == 7){
        $('.h').css("backgroundColor","green");
        setTimeout(function (){$('.h').css("backgroundColor","#f67c92");},3000);
        console.log('True');
    }else{
        $('.h').css("backgroundColor","red");
        setTimeout(function (){$('.h').css("backgroundColor","#f67c92");},3000);
        console.log('False');
    }
});
$('.i').click(function (){
    if(ans == 8){
        $('.i').css("backgroundColor","green");
        setTimeout(function (){$('.i').css("backgroundColor","#f67c92");},3000);
        console.log('True');
    }else{
        $('.i').css("backgroundColor","red");
        setTimeout(function (){$('.i').css("backgroundColor","#f67c92");},3000);
        console.log('False');
    }
});
$('.j').click(function (){
    if(ans == 9){
        $('.j').css("backgroundColor","green");
        setTimeout(function (){$('.j').css("backgroundColor","#f67c92");},3000);
        console.log('True');
    }else{
        $('.j').css("backgroundColor","red");
        setTimeout(function (){$('.j').css("backgroundColor","#f67c92");},3000);
        console.log('False');
    }
});
$('.k').click(function (){
    if(ans == 10){
        $('.k').css("backgroundColor","green");
        setTimeout(function (){$('.k').css("backgroundColor","#f67c92");},3000);
        console.log('True');
    }else{
        $('.k').css("backgroundColor","red");
        setTimeout(function (){$('.k').css("backgroundColor","#f67c92");},3000);
        console.log('False');
    }
});
$('.l').click(function (){
    if(ans == 11){
        $('.l').css("backgroundColor","green");
        setTimeout(function (){$('.l').css("backgroundColor","#f67c92");},3000);
        console.log('True');
    }else{
        $('.l').css("backgroundColor","red");
        setTimeout(function (){$('.l').css("backgroundColor","#f67c92");},3000);
        console.log('False');
    }
});
$('.m').click(function (){
    if(ans == 12){
        $('.m').css("backgroundColor","green");
        setTimeout(function (){$('.m').css("backgroundColor","#f67c92");},3000);
        console.log('True');
    }else{
        $('.m').css("backgroundColor","red");
        setTimeout(function (){$('.m').css("backgroundColor","#f67c92");},3000);
        console.log('False');
    }
});
$('.n').click(function (){
    if(ans == 13){
        $('.n').css("backgroundColor","green");
        setTimeout(function (){$('.n').css("backgroundColor","#f67c92");},3000);
        console.log('True');
    }else{
        $('.n').css("backgroundColor","red");
        setTimeout(function (){$('.n').css("backgroundColor","#f67c92");},3000);
        console.log('False');
    }
});
$('.o').click(function (){
    if(ans == 14){
        $('.o').css("backgroundColor","green");
        setTimeout(function (){$('.o').css("backgroundColor","#f67c92");},3000);
        console.log('True');
    }else{
        $('.o').css("backgroundColor","red");
        setTimeout(function (){$('.o').css("backgroundColor","#f67c92");},3000);
        console.log('False');
    }
});
$('.p').click(function (){
    if(ans == 15){
        $('.p').css("backgroundColor","green");
        setTimeout(function (){$('.p').css("backgroundColor","#f67c92");},3000);
        console.log('True');
    }else{
        $('.p').css("backgroundColor","red");
        setTimeout(function (){$('.p').css("backgroundColor","#f67c92");},3000);
        console.log('False');
    }
});
$('.q').click(function (){
    if(ans == 16){
        $('.q').css("backgroundColor","green");
        setTimeout(function (){$('.q').css("backgroundColor","#f67c92");},3000);
        console.log('True');
    }else{
        $('.q').css("backgroundColor","red");
        setTimeout(function (){$('.q').css("backgroundColor","#f67c92");},3000);
        console.log('False');
    }
});
$('.r').click(function (){
    if(ans == 17){
        $('.r').css("backgroundColor","green");
        setTimeout(function (){$('.r').css("backgroundColor","#f67c92");},3000);
        console.log('True');
    }else{
        $('.r').css("backgroundColor","red");
        setTimeout(function (){$('.r').css("backgroundColor","#f67c92");},3000);
        console.log('False');
    }
});
$('.s').click(function (){
    if(ans == 18){
        $('.s').css("backgroundColor","green");
        setTimeout(function (){$('.s').css("backgroundColor","#f67c92");},3000);
        console.log('True');
    }else{
        $('.s').css("backgroundColor","red");
        setTimeout(function (){$('.s').css("backgroundColor","#f67c92");},3000);
        console.log('False');
    }
});
$('.t').click(function (){
    if(ans == 19){
        $('.t').css("backgroundColor","green");
        setTimeout(function (){$('.t').css("backgroundColor","#f67c92");},3000);
        console.log('True');
    }else{
        $('.t').css("backgroundColor","red");
        setTimeout(function (){$('.t').css("backgroundColor","#f67c92");},3000);
        console.log('False');
    }
});
$('.u').click(function (){
    if(ans == 20){
        $('.u').css("backgroundColor","green");
        setTimeout(function (){$('.u').css("backgroundColor","#f67c92");},3000);
        console.log('True');
    }else{
        $('.u').css("backgroundColor","red");
        setTimeout(function (){$('.u').css("backgroundColor","#f67c92");},3000);
        console.log('False');
    }
});
$('.v').click(function (){
    if(ans == 21){
        $('.v').css("backgroundColor","green");
        setTimeout(function (){$('.v').css("backgroundColor","#f67c92");},3000);
        console.log('True');
    }else{
        $('.v').css("backgroundColor","red");
        setTimeout(function (){$('.v').css("backgroundColor","#f67c92");},3000);
        console.log('False');
    }
});
$('.w').click(function (){
    if(ans == 22){
        $('.x').css("backgroundColor","green");
        setTimeout(function (){$('.w').css("backgroundColor","#f67c92");},3000);
        console.log('True');
    }else{
        $('.w').css("backgroundColor","red");
        setTimeout(function (){$('.w').css("backgroundColor","#f67c92");},3000);
        console.log('False');
    }
});
$('.x').click(function (){
    if(ans == 23){
        $('.x').css("backgroundColor","green");
        setTimeout(function (){$('.x').css("backgroundColor","#f67c92");},3000);
        console.log('True');
    }else{
        $('.x').css("backgroundColor","red");
        setTimeout(function (){$('.x').css("backgroundColor","#f67c92");},3000);
        console.log('False');
    }
});
$('.y').click(function (){
    if(ans == 24){
        $('.y').css("backgroundColor","green");
        setTimeout(function (){$('.y').css("backgroundColor","#f67c92");},3000);
        console.log('True');
    }else{
        $('.y').css("backgroundColor","red");
        setTimeout(function (){$('.y').css("backgroundColor","#f67c92");},3000);
        console.log('False');
    }
});
$('.z').click(function (){
    if(ans == 25){
        $('.z').css("backgroundColor","green");
        setTimeout(function (){$('.z').css("backgroundColor","#f67c92");},3000);
        console.log('True');
    }else{
        $('.z').css("backgroundColor","red");
        setTimeout(function (){$('.z').css("backgroundColor","#f67c92");},3000);
        console.log('False');
    }
});