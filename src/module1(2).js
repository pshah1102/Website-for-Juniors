const synth = window.speechSynthesis;
const voiceSelect = document.getElementById('voice-select');
$('#voice-select').hide();

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
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

  
  


  var allQuestions = [{
    image:'images/chocolate.jpg',
    options: ["King", "Thundering", "Breathing", "Thing"],
    answer: 0
  }, {
    image:'images/cherry.jpg',
    options: ["Throwing", "Threatening", "Ring", "Wing"],
    answer: 2
  }, {
    image:'images/chair.jpg',
    options: ["Thing", "Building", "Growing", "Stealing"],
    answer: 1
  }, {
    image:'images/cheetah.jpg',
    options: ["Horning", "Ring", "Thing", "Warning"],
    answer: 3
   }, {
    image:'images/chess.jpg',
    options: ["Threatening","Paying", "Ping", "Parking"],
    answer: 3
   }, {
    image:'images/bench.jpg',
    options: ["Crying","Thing", "Hiking", "Threatening"],
    answer: 0
   }, {
    image:'images/torch.jpg',
    options: ["Firing","FIghting", "Flying", "Pranking"],
    answer: 2
   }, {
    image:'images/watch.jpg',
    options: ["Gaming","Going", "Gambling", "Gesturing"],
    answer: 0
   }, {
    image:'images/beach.jpg',
    options: ["Ending","Earthing", "Eating", "Meeting"],
    answer: 2
   }, {
    image:'images/ostrich.jpg',
    options: ["Banking","Barking", "Bowling", "Bargaining"],
    answer: 1
   },{
    image:'images/ketchup.jpg',
    options: ["Rendering","Roasting", "Riding", "Running"],
    answer: 3
   }, {
    image:'images/lunchbox.jpg',
    options: ["Bowing","Bending", "Boating", "Bowling"],
    answer: 2
   }, {
    image:'images/nachos.jpg',
    options: ["Casting","Catering", "Cunning", "Cutting"],
    answer: 3
   }, {
    image:'images/matchstick.jpg',
    options: ["Crying","Cycling", "Cunning", "Coming"],
    answer: 1
   }, {
    image:'images/kitchen.jpg',
    options: ["Painting","Paying", "Playing", "Ping"],
    answer: 0 }
 
];

  
  var quesCounter = 0;
  var selectOptions = [];
  var quizSpace = $('#quiz');
  
  
  nextQuestion();

  function createElement(index) 
    {
        var element = $('<div>',{id: 'question'});
        
        var header = $('<h2>Question No. ' + (index + 1) + ' :</h2>');
        element.append(header);

        var question = $('<p>').append("Identify the object from its voice");
        element.append(question);

        var radio = radioButtons(index);
        element.append(radio);

        return element;
    }
  
  function radioButtons(index) 
    {
        var radioItems = $('<ul>',{id: 'radio'});
        var item;
        var input = '';
        for (var i = 0; i < allQuestions[index].options.length; i++) {
          item = $('<li>',{id:'radio_li'});
          input = '<input type="radio" name="answer" value=' + i + ' />';
          input += allQuestions[index].options[i];
          item.append(input);
          radioItems.append(item);
        }
        return radioItems;
  }
  
  function chooseOption() 
    {
        selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
    }
   
  function nextQuestion() 
    {
        quizSpace.fadeOut(function() 
            {
              $('#question').remove();
              if(quesCounter < allQuestions.length)
                {
                    var nextQuestion = createElement(quesCounter);
                    quizSpace.append(nextQuestion).fadeIn();
                    if (!(isNaN(selectOptions[quesCounter]))) 
                    {
                      $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                    }
                    if(quesCounter === 1)
                    {
                      $('#prev').show();
                    } 
                    else if(quesCounter === 0)
                    {
                      $('#prev').hide();
                      $('#next').show();
                    }
                }
              else 
                {
                    var scoreRslt = displayResult();
                    quizSpace.append(scoreRslt).fadeIn();
                    $('#next').hide();
                    $('#prev').hide();
                    
                    var restartButton = $('<div class="button"><a href="module1.html">Restart</a></div>')
                    quizSpace.append(restartButton);

                    var exitButton = $('<div class="button"><a href="index.html">Exit</a></div>')
                    quizSpace.append(exitButton);
                }
        });
    }
  
  function displayResult() 
    {
        var score = $('<p>',{id: 'question'});
        var correct = 0;
        for (var i = 0; i < selectOptions.length; i++) 
        {
          if (selectOptions[i] === allQuestions[i].answer) 
          {
            correct++;
          }
        }
        score.append('You scored ' + correct + ' out of ' +allQuestions.length);
        return score;
  }

  $('#next').click(function () 
    {
        chooseOption();
        if (isNaN(selectOptions[quesCounter])) 
        {
            alert('Please select an option !');
        } 
        else 
        {
          quesCounter++;
          nextQuestion();
        }
    });
  
  $('#prev').click(function () 
    {
        chooseOption();
        quesCounter--;
        nextQuestion();
    });
    $('.speakButton').click(function () 
    {
        speak();
    });


const speak = () => {
  if (voiceSelect.value !== '') {
    // Get speak text
    const speakText = new SpeechSynthesisUtterance(allQuestions[quesCounter].options[allQuestions[quesCounter].answer]);

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
    speakText.rate = 0.5;
    speakText.pitch = 1.4;
    // Speak
    synth.speak(speakText);
  }
};